import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from "./TodoItem";

const styles = {
    ul: {
        listStyle: 'none',
        margin: 0,
        padding: 0
    }
}

const TodoList = (props) => {
    return (
        <ul style={styles.ul}>
            {props.my_todos.map((todo1, index) =>{
                return <TodoItem
                    todo2={todo1}
                    key={todo1.id}
                    my_index={index}
                    my_onChange={props.my_onToggle}
                />
            })}
        </ul>
    );
};

TodoList.propTypes = {
    my_todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    my_onToggle: PropTypes.func.isRequired
}

export default TodoList;

