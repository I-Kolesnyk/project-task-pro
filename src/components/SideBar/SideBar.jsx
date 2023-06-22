import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <>
      <Link to={`:boardName1`}>board1</Link>
      <Link to={`:boardName2`}>board2</Link>
    </>
  );
};

export default Sidebar;
