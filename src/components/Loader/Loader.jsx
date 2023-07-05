import { LineWave } from 'react-loader-spinner';
import { createPortal } from 'react-dom';
import { StyledLoader, LoaderOverlay } from './Loader.styled';

const loaderRoot = document.getElementById('loader-root');

const Loader = () => {
  return createPortal(
    <LoaderOverlay>
      <StyledLoader>
        <LineWave
          height="200"
          width="200"
          ariaLabel="line-wave"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </StyledLoader>
    </LoaderOverlay>,
    loaderRoot
  );
};

export default Loader;
