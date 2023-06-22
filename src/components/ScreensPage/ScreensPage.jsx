import { useParams } from 'react-router-dom';

const ScreensPage = () => {
  const { boardName } = useParams();
  return <h3>{boardName}</h3>;
};

export default ScreensPage;
