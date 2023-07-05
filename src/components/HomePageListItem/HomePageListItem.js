import { HomePageBoardListItem } from './HomePageListItem.styled';
import { NavLink } from 'react-router-dom';

export const HomePageListItem = ({ board }) => {
  const { title } = board;

  let path = `${title}`;

  return (
    <NavLink to={path}>
      <HomePageBoardListItem>
        <p>{title}</p>
      </HomePageBoardListItem>
    </NavLink>
  );
};
