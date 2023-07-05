import { BtnForm } from './FormBtn.styled';

function FormBtn({ textBtn }) {
  return (
    <>
      <BtnForm type="submit">{textBtn()}</BtnForm>
    </>
  );
}

export default FormBtn;
