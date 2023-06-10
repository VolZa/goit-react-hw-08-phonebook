import { useDispatch } from 'react-redux';
import { addTask } from 'redux/tasks/operations';
import { ButtonAddTask, FormAddTask, InputAddTask } from './TaskEditor.styled';

export const TaskEditor = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const text = form.elements.text.value;
    if (text !== '') {
      dispatch(addTask(text));
      form.reset();
      return;
    }
    alert('Task cannot be empty. Enter some text!');
  };

  return (
    <FormAddTask onSubmit={handleSubmit}>
      <InputAddTask name="text"/>
      <ButtonAddTask type="submit">
        Add task
      </ButtonAddTask>
    </FormAddTask>
  );
};
