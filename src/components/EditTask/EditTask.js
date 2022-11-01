import classNames from "classnames";
import styles from "./styles.module.css"
import Delete from "../Task/img/delete-icon.svg"
import { useDispatch } from "react-redux";
import { toDoListSliceActions } from "../../app/toDoSlice";
import { useState } from "react";


export const EditTaskPopup = ({editedTask, togglePopup, id}) => {
    const dispatch = useDispatch();
    const [value, setValue] = useState(editedTask ? editedTask : '');

    return (
    <div 
        // onClick={() => setOpened(false)}
        className={classNames(styles.popup)}>
        <div className={classNames(styles.popupContainer)}>
        <form
        noValidate
        className={classNames(styles.form)}
        onSubmit={(event) => {
            event.preventDefault()
            dispatch(toDoListSliceActions.editTask({id, value}));
            togglePopup();
        }}>
            <input 
                className={classNames(styles.input)}
                type="text" 
                name="text" 
                id="text"
                onChange={event => {
                    event.preventDefault()
                    setValue(event.target.value);
                }}
                value={value}/>
        </form>
            <img 
                src={Delete}
                alt={"delete task"}
                className={classNames(styles.button)}
                onClick={() => dispatch(toDoListSliceActions.deleteTask(id))}
                />
        </div>
    </div>
    )}