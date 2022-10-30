import classNames from "classnames";
import styles from "./styles.module.css";
// import Delete from './img/delete-icon.svg'
import Checked from './img/checked-icon.svg'
import { toDoListSliceActions } from "../../app/toDoSlice";
import { useDispatch } from "react-redux";

export const Task = ({task, completed, id}) => {
    const dispatch = useDispatch()
    return (
        <li 
            className={classNames(styles.task, {
                [styles.taskComply]: completed,
            })}>
                {task}
            {/* <img 
                src={Checked}
                alt={"checked task"}
                className={classNames(styles.button)}
                onClick={() => dispatch(toDoListSliceActions.deleteTask(id))}
                /> */}
            <img 
                src={Checked}
                alt={"checked task"}
                className={classNames(styles.button)}
                onClick={() => dispatch(toDoListSliceActions.complyTask(id))}
                />
        </li>)
}