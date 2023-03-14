import { useState } from "react";
import classNames from "classnames";
import styles from "./styles.module.css";
import { toDoListSliceActions } from "../../app/toDoSlice";
import { useDispatch } from "react-redux";

export const Form = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(toDoListSliceActions.addTask({ addedTask: value }));
    setValue("");
  };

  return (
    <form className={classNames(styles.form)} onSubmit={onSubmit}>
      <input
        placeholder="Add task"
        className={classNames(styles.input)}
        type="text"
        name="text"
        id="text"
        onChange={(event) => {
          setValue(event.target.value);
        }}
        value={value}
      />
      {/* <button 
                className={classNames(styles.button)}
                disabled={!value}
                type="submit" 
                onSubmit={event => {
                    event.preventDefault();
                    saveTodo(value);
                }}>Add task</button> */}
    </form>
  );
};
