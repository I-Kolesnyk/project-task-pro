import { TailSpin } from 'react-loader-spinner';

import { StyledLoader } from './Loader.styled';

const Loader = () => {
  return (
    <StyledLoader>
      <TailSpin />
    </StyledLoader>
  );
};

export default Loader;