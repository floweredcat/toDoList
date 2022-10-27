import React, { useState } from 'react';
import './App.css';
import { Form } from './components/Form/Form';
import { TaskList } from './components/TaskList/TaskList';

export const App = () => {
  const [taskList, setTaskList] = useState([])
  return (
    <>
      <Form 
        saveTodo={todoText => {
          if (todoText.length>0) {
            setTaskList([...taskList, todoText])
          }
      }}/>
      <TaskList 
        taskList={taskList}
        deleteTask={taskIndex => {
          const newTasklist = taskList
            .filter((_, idx) => idx !== taskIndex);
            setTaskList(newTasklist)
        }}/>
    </>
  );
}