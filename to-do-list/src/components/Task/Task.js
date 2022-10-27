export const Task = ({task, deleteTask, id}) => {
    return (
        <li>{task}
            <button 
                onClick={() => {deleteTask(id)}}>
                    Delete task
            </button>
        </li>)
}