import { Oval } from 'react-loader-spinner';
import { createPortal } from 'react-dom';

import { StyledLoader, LoaderOverlay } from './Loader.styled';

const loaderRoot = document.getElementById('loader-root');

const Loader = () => {
  return createPortal(
    <LoaderOverlay>
      <StyledLoader>
        <Oval
          height={60}
          width={60}
          color="#BEDBB0"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="#BEDBB0"
          strokeWidth={4}
          strokeWidthSecondary={2}
        />
      </StyledLoader>
    </LoaderOverlay>,
    loaderRoot
  );
};

export default Loader;
