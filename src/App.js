import React, {useEffect} from "react";
import TodoList from "./todo/TodoList";
import Context from "./context";

import Loader from "./loader";
import Modal from "./modal/Modal";


const AddTodo = React.lazy(() => new Promise(resolve => {
   setTimeout(() => {
       resolve(import("./todo/AddTodo"))
   }, 3000)
}))


function App() {
    const [todos, setTodos] = React.useState([
        {id: 1, completed: false, title: 'Купить хлеб'},
        {id: 2, completed: false, title: 'Купить молоко'},
        {id: 3, completed: false, title: 'Купить чай'},
    ])
    const [loading, setLoading] = React.useState(true)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=3')
            .then(response => response.json())
            .then(todos => {
                setTimeout(() => {
                    /*setTodos(todos)*/ // не менять лист
                    setLoading(false)
                }, 2000)
            })
    }, [])

    function myToggleTodo(id) {
        setTodos(
            todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
        )
    }

    function removeTodo(id) {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    function addTodo(title) {
        setTodos(todos.concat([{id: Date.now(), completed: false, title: title}]))
    }

    return (
        <Context.Provider value={{removeTodo}}>
            <div className="wrapper">
                <h1>React (тестовое окно)</h1>
                <Modal />
                <React.Suspense fallback={<p>Загрузка...</p>}>
                    <AddTodo my_onCreate={addTodo}/>
                </React.Suspense>

                {loading && <Loader/>}
                {todos.length ? (
                    <TodoList my_todos={todos} my_onToggle={myToggleTodo}/>
                ) : loading ? null : (
                    <p>Нет дел</p>
                )}

            </div>
        </Context.Provider>
    );
}

export default App;

