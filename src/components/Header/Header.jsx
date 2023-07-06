import { useRef } from 'react';

import ThemeDropdown from 'components/ThemeDrpdown/ThemeDropdown';
import sprite from '../../assets/sprite.svg';
import { StyledHeader, Svg, Button, Container, Phrase } from './Header.styled';
import UserInfo from 'components/UserInfo/UserInfo';
import phrases from 'assets/phrases';

const phrase = Math.floor(Math.random() * phrases.length);

function Header({ openSidebar }) {
  const myRef = useRef(null);

  // const [size, setSize] = useState({});

  // const resizeHandler = () => {
  //   const { clientWidth } = myRef.current || {};
  //   setSize(clientWidth);
  // };

  // useEffect(() => {
  //   window.addEventListener('resize', resizeHandler);
  //   resizeHandler();
  //   return () => {
  //     window.removeEventListener('resize', resizeHandler);
  //   };
  // }, []);
  return (
    <StyledHeader ref={myRef}>
      <Button type="button" onClick={openSidebar}>
        <Svg>
          <use href={sprite + '#menu'}></use>
        </Svg>
      </Button>
      <Phrase>{phrases[phrase]}</Phrase>
      <Container>
        <ThemeDropdown />
        <UserInfo />
      </Container>
    </StyledHeader>
  );
}

export default Header;
