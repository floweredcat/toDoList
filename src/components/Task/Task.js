import classNames from "classnames";
import styles from "./styles.module.css";
// import Delete from './img/delete-icon.svg'
import Checked from "./img/checked-icon.svg";
import { toDoListSliceActions } from "../../app/toDoSlice";
import { useDispatch } from "react-redux";
import React from "react";

export const Task = ({
  task,
  dropHandler,
  dragOverHandler,
  dragStartHandler,
}) => {
  console.log("render task" + task.text);
  const { id, completed, text } = task;
  const dispatch = useDispatch();
  return (
    <li
      onDragStart={(e) => dragStartHandler(e, task)}
      onDragOver={(e) => dragOverHandler(e)}
      onDrop={(e) => dropHandler(e, task)}
      draggable={true}
      className={classNames(styles.task, {
        [styles.taskComply]: completed,
      })}
    >
      {text}
      {/* {completed && <img 
                src={Delete}
                alt={Delete}
                className={classNames(styles.button)}
                onClick={() => dispatch(toDoListSliceActions.deleteTask(id))}
                />} */}
      <img
        src={Checked}
        alt={Checked}
        className={classNames(styles.button)}
        onClick={() => dispatch(toDoListSliceActions.complyTask(id))}
      />
    </li>
  );
};

export const MemoTask = React.memo(Task);
