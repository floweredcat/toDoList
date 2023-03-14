import { MemoTask } from "../Task/Task";
import classNames from "classnames";
import styles from "./styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "nanoid";
import { toDoListSliceActions } from "../../app/toDoSlice";

export const TaskList = () => {
  const dispatch = useDispatch();
  const { toDoList } = useSelector((state) => state);
  let currentCard = null;
  function dragStartHandler(e, card) {
    currentCard = card;
  }
  function dragOverHandler(e) {
    e.preventDefault();
  }
  function dropHandler(e, card) {
    e.preventDefault();
    const updatedList = toDoList.map((c) => {
      if (c.id === card.id) {
        return { ...c, queue: currentCard.queue };
      }
      if (c.id === currentCard.id) {
        return { ...c, queue: card.queue };
      }
      return c;
    });
    dispatch(
      toDoListSliceActions.updateQueue({
        updatedList: updatedList.sort(sortCards),
      })
    );
  }

  function sortCards(a, b) {
    if (a.queue > b.queue) {
      return 1;
    }
    if (a.queue < b.queue) {
      return -1;
    }
  }

  console.log("render tasklist");

  return (
    <ul className={classNames(styles.taskList)}>
      {toDoList.map((task) => {
        return (
          <MemoTask
            dropHandler={dropHandler}
            dragOverHandler={dragOverHandler}
            dragStartHandler={dragStartHandler}
            task={task}
            key={nanoid()}
          />
        );
      })}
    </ul>
  );
};
