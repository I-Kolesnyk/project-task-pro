import styled from '@emotion/styled';
import { css } from '@emotion/react';

const dynamicStylesBell = ({ time, theme }) => css`
  height: 16px;
  fill: ${time < 0 ? 'rgba(255, 3, 3, 0.901)' : 'transparent'};
  stroke: ${time < 0 ? 'transparent' : theme.textColors.accent};
`;

export const BellWrapper = styled.div`
  ${dynamicStylesBell}
`;
