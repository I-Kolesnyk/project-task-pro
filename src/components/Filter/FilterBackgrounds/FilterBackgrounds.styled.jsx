import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const BackgroundsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-bottom: 38px;
`;

const dynamicStylesBackgroundsTitle = ({ theme }) => css`
  margin-bottom: 16px;
  color: ${theme.textColors.main};
  font-style: normal;
  font-weight: ${theme.fontWeights.medium};
  line-height: normal;
  letter-spacing: -0.28px;
`;

export const BackgroundsTitle = styled.p`
  ${dynamicStylesBackgroundsTitle}
`;

export const BackgroundItem = styled.li`
  cursor: pointer;
  transition: transform 0.3s;
  transform: ${({ isActive }) => (isActive ? 'scale(0.7)' : 'scale(1)')};
  filter: ${({ isActive }) => (isActive ? 'grayscale(100%)' : 'none')};
  filter: ${({ isActive }) => (isActive ? 'brightness(60%)' : 'none')};

  border-radius: 6px;
  overflow: hidden;

  &:hover {
    transform: scale(1.1);
  }
`;

export const BackgroundImage = styled.img`
  width: 28px;
  height: 28px;
`;
