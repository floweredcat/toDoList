import React, { useState } from "react";
import "./App.css";
import { Form } from "./components/Form/Form";
import { TaskList } from "./components/TaskList/TaskList";

export const App = () => {
  const [taskList, setTaskList] = useState([]);
  const deleteTaskCallBack = (taskIndex) => {
    const newTasklist = taskList.filter((_, idx) => idx !== taskIndex);
    setTaskList(newTasklist);
  };
  return (
    <>
      <Form />
      <TaskList taskList={taskList} deleteTask={deleteTaskCallBack} />
    </>
  );
};
