import React, {useState} from 'react';
import PropTypes from "prop-types";

function AddTodo({my_onCreate}) {
    const [value, setValue] = useState('')

    function submitHandler(event) {
        event.preventDefault()

        if (value.trim()) {
            my_onCreate(value)
            setValue('')
        }
    }

    return (
        <form style={{marginBottom: "1rem"}} onSubmit={submitHandler}>
            <input value={value} onChange={event => setValue(event.target.value)}/>
            &nbsp;
            <button type="submit">Добавить дела</button>
        </form>
    );
}

AddTodo.propTypes = {
    my_onCreate: PropTypes.func.isRequired
}

export default AddTodo;