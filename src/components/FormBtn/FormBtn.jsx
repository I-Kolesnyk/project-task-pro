// import { BtnForm } from './FormBtn.styled';

// function FormBtn({ textBtn }) {
//   return (
//     <>
//       <BtnForm type="submit">{textBtn()}</BtnForm>
//     </>
//   );
// }

// export default FormBtn;

//example for FormBtn <FormBtn textBtn={() => <ChildComponent textContent="Add" />} />

import { BtnForm } from './FormBtn.styled';

function FormBtn({ textBtn, onClick }) {
  return (
    <>
      <BtnForm type="submit" onClick={onClick}>
        {textBtn()}
      </BtnForm>
    </>
  );
}

export default FormBtn;

//==============================================================
// example for FormBtn with onClick
//--------------------------------------------------------------

// <FormBtn
//   textBtn={() => <ChildComponent textContent="Create" />}
//   onClick={handleCreateBoard}
// />;

//==============================================================
