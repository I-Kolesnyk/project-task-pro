import styled from '@emotion/styled';
import { css } from '@emotion/react';

const formDynamikStyles = ({ theme }) => css`
  width: 287px;
  color: ${theme.authColors.lightText};
  @media screen and (min-width: ${theme.breakpoints[1]}) {
    width: 302px;
  }
`;

const titleDynamicStyles = ({ theme }) => css`
  font-size: ${theme.fontSizes[5]};
  font-weight: ${theme.fontWeights.medium};
  color: ${theme.textColors.main};
  margin-bottom: 24px;
`;

const errorMessageDynamicStyles = ({ theme }) => css`
  color: ${theme.textColors.main};
  margin-bottom: 10px;
  text-align: center;
`;

const inputDynamicStyles = ({ theme }) => css`
  font-size: ${theme.fontSizes[3]};
  width: 100%;
  height: 49px;
  padding: 14px 18px;
  background-color: transparent;
  border: 1px solid ${theme.backgroundColors.formButton};
  border-radius: ${theme.radii.md};
  color: ${theme.textColors.main};
  opacity: 0.4;
  margin-bottom: 24px;

  &:focus {
    outline: none;
    opacity: 1;
  }
`;

export const Form = styled.form`
  ${formDynamikStyles}
`;

export const Title = styled.h3`
  ${titleDynamicStyles}
`;

export const ErrorMessage = styled.p`
  ${errorMessageDynamicStyles};
`;

export const Input = styled.input`
  ${inputDynamicStyles}
`;
