import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const AuthTabsContainer = styled.div`
  margin: auto;
  width: 424px;
  height: 395px;
  border-radius: 8px;
  background: #a09c9c;
  /* background: #151515; */
  padding: 40px;
`;

export const TabButton = css`
  color: rgba(255, 255, 255, 0.3);
  font-size: 16px;
  font-weight: 500;
  padding: 10px;
  cursor: pointer;
  outline: none;
  border-bottom: 2px solid transparent;

  &:hover {
    color: #ffffff;
  }

  /* &[aria-selected='true'] {
    color: #ffffff;
    border-bottom-color: #bedbb0;
  } */
`;

export const TabPanelContainer = css`
  padding: 40px;
`;

export const Title = css`
  margin-bottom: 8px;
  align-self: flex-start;
  color: #ffffff;
  font-size: 12px;
  letter-spacing: -0.24px;

  @media screen and (min-width: 768px) {
    padding-left: 9.5%;
  }
`;
