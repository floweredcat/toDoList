import { useState } from "react";
import classNames from "classnames";
import styles from "./styles.module.css"
import { toDoListSliceActions } from "../../app/toDoSlice";
import { useDispatch } from "react-redux";

export const Form = () => {
    const [value, setValue] = useState('');
    const dispatch = useDispatch();
    
    return (
        <form   
        className={classNames(styles.form)}
        onSubmit={event => {
            event.preventDefault();
            dispatch(toDoListSliceActions.addTask(value))
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
            {/* <button 
                className={classNames(styles.button)}
                disabled={!value}
                type="submit" 
                onSubmit={event => {
                    event.preventDefault();
                    saveTodo(value);
                }}>Add task</button> */}
        </form>
    )
}