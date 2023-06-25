import { BtnForm } from './FormBtn.styled';

function OnClickBtn({ textBtn, onClick }) {
  return (
    <>
      <BtnForm onClick={onClick}>{textBtn()}</BtnForm>
    </>
  );
}

export default OnClickBtn;
