import { useSelector } from 'react-redux';
import { Task } from '../Task/Task';
import { selectAllTasks } from 'redux/tasks/selectors';
import { ListTask } from './TaskList.styled';

export const TaskList = () => {
  const tasks = useSelector(selectAllTasks);

  return (
    <ListTask>
      {tasks.map(({ id, text }) => (
        <li key={id}>
          <Task id={id} text={text} />
        </li>
      ))}
    </ListTask>
  );
};
