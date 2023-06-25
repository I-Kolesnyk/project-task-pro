import styled from '@emotion/styled';

export const ModalOverlay = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
`;

export const ModalContent = styled.div`
  position: relative;
  padding: 40px;
  border-radius: 8px;
  background-color: #151515;
  z-index: 20;
`;

export const CloseButton = styled.svg`
  position: absolute;
  top: 14px;
  right: 14px;
  width: 18px;
  height: 18px;
  stroke: white;
  cursor: pointer;
`;
