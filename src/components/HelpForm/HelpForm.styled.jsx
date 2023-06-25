import styled from '@emotion/styled';
import { css } from '@emotion/react';

const formDynamikStyles = ({ theme }) => css`
  width: 335px;
  padding: 24px;
  color: ${theme.authColors.lightText};
  @media screen and (min-width: ${theme.breakpoints[1]}) {
    width: 400px;
  }
`;

const titleDynamicStyles = ({ theme }) => css`
  font-size: ${theme.fontSizes[5]};
  font-weight: ${theme.fontWeights.medium};
  color: ${theme.textColors.main};
  margin-bottom: 24px;
`;

const inputDynamicStyles = ({ theme }) => css`
  font-size: ${theme.fontSizes[3]};
  width: 100%;
  height: 49px;
  padding: 14px 18px;
  background-color: ${theme.authColors.inputBackground};
  border: 1px solid ${theme.authColors.lightButtonBackground};
  border-radius: ${theme.radii.md};
  color: ${theme.authColors.lightText};
  margin-bottom: 4px;
`;
const textariaDynamicStyles = ({ theme }) => css`
  font-size: ${theme.fontSizes[3]};
  width: 100%;
  padding: 14px 18px;
  background-color: ${theme.authColors.inputBackground};
  border: 1px solid ${theme.authColors.lightButtonBackground};
  border-radius: ${theme.radii.md};
  color: ${theme.authColors.lightText};
  min-height: 120px;
  margin-bottom: 15px;
`;

export const Form = styled.form`
  ${formDynamikStyles}
`;

export const Title = styled.h3`
  ${titleDynamicStyles}
`;

export const Input = styled.input`
  ${inputDynamicStyles}
`;

export const Textarea = styled.textarea`
  ${textariaDynamicStyles}
`;
export const ErrorMessage = styled.p`
  margin-bottom: 10px;
  text-align: center;
`;
