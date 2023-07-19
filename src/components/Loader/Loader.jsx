import { createPortal } from 'react-dom';

import { StyledLoader, LoaderOverlay } from './Loader.styled';
import LoaderOval from './LoaderOval';

const loaderRoot = document.getElementById('loader-root');

const Loader = () => {
  return createPortal(
    <LoaderOverlay>
      <StyledLoader>
        <LoaderOval />
      </StyledLoader>
    </LoaderOverlay>,
    loaderRoot
  );
};

export default Loader;
