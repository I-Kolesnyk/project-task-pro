import { Btn } from './AuthBtn.styled';
import PropTypes from 'prop-types';

function AuthBtn({ textBtn }) {
  return (
    <>
      <Btn type="submit">{textBtn}</Btn>
    </>
  );
}

AuthBtn.propTypes = {
  textBtn: PropTypes.string.isRequired,
};
export default AuthBtn;
