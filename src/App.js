import './App.css';
import { Form } from './components/Form/Form';
import { TaskList } from './components/TaskList/TaskList';

export const App = () => {
  return (
    <>
      <Form />
      <TaskList />
    </>
  );
}