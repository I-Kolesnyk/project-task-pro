import styled from '@emotion/styled';
export const WelcomeContainer = styled.div`
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-right: 20px;
  padding-left: 20px;
  @media only screen and(min-width:768px) {
    width: 473px;
    height: 438px;
  }
  @media only screen and(min-width:1440px) {
    width: 473px;
    height: 438px;
  }
`;

export const Thumb = styled.div`
  margin-top: 211px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 24px;
  width: 166px;
  height: 180px;

  @media only screen and (min-width: 768px) {
    width: 222px;
    height: 246px;
  }
  @media only screen and (min-width: 1440px) {
    width: 222px;
    height: 246px;
  }
`;

export const LogoThumb = styled.div`
  display: flex;
`;

export const Title = styled.h2`
  width: 112px;
  color: #161616;
  font-size: 28px;
  font-weight: 600;
  letter-spacing: -1.12px;
`;

export const Svg = styled.svg`
  margin-right: 14px;
  fill: black;
`;

export const Text = styled.p`
  margin-bottom: 28px;
  color: #161616;
  text-align: center;
  line-height: 18px;
  letter-spacing: -0.28px;
`;
