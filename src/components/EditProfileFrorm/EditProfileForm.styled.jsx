import styled from '@emotion/styled';
import { css } from '@emotion/react';

const formDynamikStyles = ({ theme }) => css`
  width: 287px;
  color: ${theme.authColors.lightText};
  @media screen and (min-width: ${theme.breakpoints[1]}) {
    width: 352px;
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
  background-color: transparent;
  border: 1px solid ${theme.backgroundColors.formButton};
  border-radius: ${theme.radii.md};
  color: ${theme.textColors.main};
  opacity: 0.4;
  margin-bottom: 14px;

  &:focus {
    outline: none;
    opacity: 1;
  }
`;

const svgEyeDynamicStyles = ({ theme }) => css`
  position: absolute;
  top: 15px;
  right: 40px;
  opacity: 0.4;
  stroke: ${theme.backgroundColors.formButtonSvg};
  &:hover,
  &:focus {
    opacity: 1;
  }
`;

const avatarInputDynamicStyles = ({ theme }) => css`
  background: ${theme.backgroundColors.formButtonBg};
  border-radius: ${theme.radii.sm};
`;

const imgDynamicStyles = ({ theme }) => css`
  border-radius: ${theme.radii.md};
`;

export const Title = styled.h3`
  ${titleDynamicStyles}
`;

export const DataForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
`;
export const AvatarInput = styled.input`
  position: absolute;
  color: transparent;
  width: 24px;
  height: 24px;
  bottom: -12px;

  &::-webkit-file-upload-button {
    visibility: hidden;
  }

  &::before {
    content: '';
    width: 24px;
    height: 24px;
    display: inline-block;
    ${avatarInputDynamicStyles}

    cursor: pointer;
  }
`;
const errorMessageDynamicStyles = ({ theme }) => css`
  color: ${theme.textColors.main};
  margin-bottom: 10px;
  text-align: center;
`;

export const Input = styled.input`
  ${inputDynamicStyles}
`;
export const Image = styled.img`
  width: 68px;
  height: 68px;
  ${imgDynamicStyles};
`;

export const LabelAvatar = styled.label`
  position: relative;
  display: flex;
  justify-content: center;
  margin-bottom: 25px;
  width: 68px;
`;

export const Label = styled.label`
  width: 100%;
`;
export const LabelPassword = styled.label`
  position: relative;
  width: 100%;
`;

export const Svg = styled.svg`
  position: absolute;
  bottom: -5px;
  cursor: pointer;
`;
export const SvgEye = styled.svg`
  ${svgEyeDynamicStyles}
`;
export const Form = styled.form`
  ${formDynamikStyles}
`;

export const Button = styled.button`
  width: 20px;
  height: 20px;
  background-color: transparent;
  position: absolute;
`;

export const ErrorMessage = styled.p`
  ${errorMessageDynamicStyles};
`;
