import classNames from "classnames";
import styles from "./styles.module.css";
import Checked from './img/checked-icon.svg'
import { toDoListSliceActions } from "../../app/toDoSlice";
import { useDispatch } from "react-redux";
import { EditTaskPopup } from "../EditTask/EditTask";
import { useState } from "react";

export const Task = ({task, completed, id}) => {
    const [opened, setOpened] = useState(false) ;
    const togglePopup = () => {
        setOpened(!opened)
    }
    const dispatch = useDispatch()
    return (
        <li className={classNames(styles.task)}>
            <div  
            onClick={togglePopup}
            className={classNames(styles.textContent, {
                [styles.taskComply]: completed,
            })}
            >
                {task}
            </div>
            <img 
                src={Checked}
                alt={"checked task"}
                className={classNames(styles.button)}
                onClick={() => dispatch(toDoListSliceActions.complyTask(id))}
                />
            {opened && <EditTaskPopup editedTask={task} togglePopup={togglePopup} id={id}/>}
        </li>)
}