import React, {useContext} from 'react';
import PropTypes from "prop-types";
import Context from "../context";

const styles = {
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '.5rem 1rem',
        border: '1px solid #ccc',
        borderRadius: '4px',
        marginBottom: '.5rem'
    },
    input: {
        marginRight: '1rem'
    }
}

const TodoItem = ({todo2, my_index, my_onChange}) => {
    const {removeTodo} = useContext(Context)
    const classes = []

    if (todo2.completed) {
        classes.push('done')
    }

    //console.log(todo2)
    return (
        <li style={styles.li}>
            <span className={classes.join('')}>
                <input
                    type="checkbox"
                    checked={todo2.completed}
                    style={styles.input}
                    onChange={() => my_onChange(todo2.id)}
                />

                <strong>{my_index+1}</strong>
                &nbsp;
                {todo2.title}
            </span>
            <button className="rm" onClick={removeTodo.bind(null, todo2.id)}>&times;</button>
        </li>
    );
};

TodoItem.propTypes = {
    todo2: PropTypes.object.isRequired,
    index: PropTypes.number,
    my_onChange: PropTypes.func.isRequired
}

export default TodoItem;