import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Form, Input, Title } from './AddColumnForm.styled';
import FormBtn from 'components/FormBtn/FormBtn';
import { ChildComponent } from 'components/FormBtn/ChildComponentBtn';
import { addColumn } from 'redux/board/operations';

const AddColumnForm = () => {
  const dispatch = useDispatch();

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      title: '',
    },
  });

  const onSubmit = async data => {
    dispatch(addColumn(data));
    reset();
  };

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Title>Add column</Title>
        <label>
          <Input
            autoComplete="off"
            placeholder="Title"
            {...register('title')}
          />
        </label>
        <FormBtn
          textBtn={() => <ChildComponent textContent="Add" />}
          type="submit"
        />
      </Form>
    </>
  );
};

export default AddColumnForm;
