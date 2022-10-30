import { Task } from "../Task/Task";
import classNames from "classnames";
import styles from "./styles.module.css"
import { useSelector } from "react-redux";

export const TaskList = () => {

    const taskList = useSelector((state) => state);
    if (taskList?.length) {
        return <div>Loading...</div>
    }

    return (
        <ul className={classNames(styles.taskList)}>
            {taskList.toDoList.map((task) => (
                <Task task={task.task} completed={task.completed} key={task.id} id={task.id}/>
            ))}
        </ul>
    )
}

