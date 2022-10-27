import { Task } from "../Task/Task";

export const TaskList = ({taskList, deleteTask}) => {

    return (
        <ul>
            {taskList?.map((task, id) => (
                <Task task={task} deleteTask={deleteTask} key={id} id={id}/>
            ))}
        </ul>
    )
}