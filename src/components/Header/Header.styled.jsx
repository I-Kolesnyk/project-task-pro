import styled from '@emotion/styled';
import { css } from '@emotion/react';

const headerDynamicStyles = ({ theme }) => css`

  background-color: ${theme.backgroundColors.header};

  @media screen and (min-width: ${theme.breakpoints[2]}) {
    float: right;
    width: 82%;
    min-height: 8.9vh;
  }
`;

export const StyledHeader = styled.header`
  ${headerDynamicStyles}
`;