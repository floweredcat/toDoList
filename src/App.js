import './App.css';
import { Form } from './components/Form/Form';
import { TasksList } from './components/TasksList/TasksList';
import { useContext, React, useState } from 'react';

export const App = () => {
  const {task, saveTask} = useState('');
  const TaskContext = React.createContext()
  return (
    <div>
      <Form saveTask={saveTask}/>
      <TasksList />
    </div>
  );
}
