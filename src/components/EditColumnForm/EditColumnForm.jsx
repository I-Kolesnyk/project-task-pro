import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import { Form, Input, Title } from './EditColumnForm.styled';
import FormBtn from 'components/FormBtn/FormBtn';
import { ChildComponent } from 'components/FormBtn/ChildComponentBtn';
import { editColumn } from 'redux/board/operations';

const EditColumnForm = ({ columnId, columnTitle, onClose }) => {
  const dispatch = useDispatch();

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      title: columnTitle,
    },
  });

  const onSubmit = async data => {
    const columnData = {
      columnId,
      ...data,
    };
    dispatch(editColumn(columnData));
    reset();
    onClose();
  };

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Title>Edit column</Title>
        <label>
          <Input autoComplete="off" {...register('title')} />
        </label>
        <FormBtn
          textBtn={() => <ChildComponent textContent="Add" />}
          type="submit"
        />
      </Form>
    </>
  );
};

export default EditColumnForm;
