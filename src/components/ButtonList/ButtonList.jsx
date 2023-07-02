import { useAllBoards } from 'hooks';
import BoardButton from 'components/BoardButton';
import { List } from './ButtonListStyled';

function ButtonList() {
  const allBoards = useAllBoards();

  let allBoards2 = {
    boards: [
      {
        _id: '64996aeb200e2e9a4078415e',
        title: 'Test board',
        icon: '',
        active: true,
        owner: '64996677200e2e9a40783df1',
      },
      {
        _id: '64996aeb200e2e9a4078e45e',
        title: 'Second board',
        icon: '',
        active: false,
        owner: '64996677200e2e9a40783df1',
      },
      {
        _id: '64996aeb200e2e9a4078415e',
        title: 'Just board',
        icon: '',
        active: false,
        owner: '64996677200e2e9a40783df1',
      },
      {
        _id: '64996aeb200e2e9a4078415e',
        title: 'Just board',
        icon: '',
        active: false,
        owner: '64996677200e2e9a40783df1',
      },
      {
        _id: '64996aeb200e2e9a4078415e',
        title: 'Just board',
        icon: '',
        active: false,
        owner: '64996677200e2e9a40783df1',
      },
      {
        _id: '64996aeb200e2e9a4078415e',
        title: 'Just board',
        icon: '',
        active: false,
        owner: '64996677200e2e9a40783df1',
      },
    ],
  };

  return (
    <List>
      {allBoards.length !== 0 &&
        allBoards.map(({ _id, title, icon, active }) => (
          <BoardButton
            key={_id}
            name={title}
            id={_id}
            icon={icon}
            isActive={active}
          />
        ))}
    </List>
  );
}

export default ButtonList;
