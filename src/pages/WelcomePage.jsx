
// import { StyledLink } from './styled/WelcomePage.styled';

// const WelcomePage = () => {
//   return (
//     <div>
//       <StyledLink to="/auth/register">Registration</StyledLink>

//       <StyledLink to="/auth/login">Log In</StyledLink>
//     </div>
//   );
// };

// export default WelcomePage;
import {
  StyleSectionWelcomePage,
  LogoBlock,
  Logo,
  Content,
  Link,
  ImgLogo,
  ImgIcon
} from '../pages/styled/WelcomePage.styled.jsx';

import imageUrl from '../images/icons/iconsPng/menLaptopBig.png';
import iconUrl from '../assets/sprite.svg';

const WelcomePage = () => {
  return (
    <StyleSectionWelcomePage>
      <LogoBlock>
        <ImgLogo src={imageUrl} alt="Boy with laptop" />
        <Logo>
          <ImgIcon>
            <use href={`${iconUrl}`}></use>
          </ImgIcon>
          Task Pro
        </Logo>
      </LogoBlock>
      <Content>
        Supercharge your productivity and take control of your tasks with Task
        Pro - Don't wait, start achieving your goals now!
      </Content>
      <nav>
        <Link to="/auth/register">Register</Link>
        <Link to="/auth/login">Log In</Link>
      </nav>
    </StyleSectionWelcomePage>
  );
};

export default WelcomePage;