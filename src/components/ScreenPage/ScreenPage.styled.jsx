import styled from '@emotion/styled';
import { css } from '@emotion/react';

const sectionDynamicStyles = ({ theme }) => css`
  display: flex;
`;

export const Section = styled.section`
  ${sectionDynamicStyles}
`;
