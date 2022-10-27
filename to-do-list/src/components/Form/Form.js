import { useState } from "react";
import classNames from "classnames";
import styles from "./styles.module.css"

export const Form = ({saveTodo}) => {
    const [value, setValue] = useState('');
    
    return (
        <form   
        className={classNames(styles.form)}
        onSubmit={event => {
            event.preventDefault();
            saveTodo(value);
            setValue('');
        }}>
            <input 
                placeholder="Add task"
                className={classNames(styles.input)}
                type="text" 
                name="text" 
                id="text"
                onChange={event => {
                    setValue(event.target.value);
                }}
                value={value}/>
            <button 
                className={classNames(styles.button)}
                type="submit" 
                onSubmit={event => {
                    event.preventDefault();
                    saveTodo(value);
                }}>Add task</button>
        </form>
    )
}