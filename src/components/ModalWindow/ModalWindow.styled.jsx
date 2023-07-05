import styled from '@emotion/styled';
import { css } from '@emotion/react';

const ModalContentDynamicStyles = ({ theme }) => css`
  background-color: ${theme.backgroundColors.popUp};
  border-radius: ${theme.radii.md};
  z-index: 20;
  position: relative;
  padding: 24px;

  @media screen and (min-width: ${theme.breakpoints[3]}) {
    margin-left: 24px;
    width: 212px;
    height: 272px;
    padding: 20px;
  }
`;

const CloseButtonDynamicStyles = ({ theme }) => css`
  position: absolute;
  top: 14px;
  right: 14px;
  width: 18px;
  height: 18px;
  stroke: ${theme.textColors.main};
  cursor: pointer;
`;

export const ModalOverlay = styled.div`
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const ModalContent = styled.div`
  ${ModalContentDynamicStyles}
`;

export const CloseButton = styled.svg`
  ${CloseButtonDynamicStyles}
`;
