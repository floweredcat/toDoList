import { useState } from "react";
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
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <input
        placeholder="Add task"
        className={styles.input}
        type="text"
        name="text"
        id="text"
        onChange={handleChange}
        value={value}
      />
    </form>
  );
};
