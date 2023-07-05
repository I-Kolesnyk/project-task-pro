import { HomePageListItem } from 'components/HomePageListItem/HomePageListItem';
import { HomePageBoardList } from './HomePageList.styled';

export const HomePageList = ({ boards }) => {
  console.log(boards, 'doooooor');
  return (
    <HomePageBoardList>
      {boards.map(board => (
        <HomePageListItem board={board} key={board._id} />
      ))}
    </HomePageBoardList>
  );
};
