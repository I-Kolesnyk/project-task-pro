import styled from '@emotion/styled';
import { css } from '@emotion/react';

const styledLoaderDynamicStyle = ({ theme }) => css`
  position: 'absolute';
  top: '50%';
  left: '50%';
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledLoader = styled.div`
  ${styledLoaderDynamicStyle}
`;

export const LoaderOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;  
  z-index: 1200;
`;
