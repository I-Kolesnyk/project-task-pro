import {
  BackgroundsList,
  BackgroundItem,
  BackgroundImage,
  BackgroundsTitle,
} from './FilterBackgrounds.styled';
import data from '../../../assets/backgroundIcon/data';
import { useState } from 'react';

const FilterBackgrounds = () => {
  const [selectedBackgroundId, setSelectedBackgroundId] = useState('');
  const handleBackgroundSelect = backgroundId => {
    setSelectedBackgroundId(backgroundId);
  };
  return (
    <>
      <BackgroundsTitle>Backgrounds</BackgroundsTitle>
      <BackgroundsList>
        {data.map(item => (
          <BackgroundItem
            key={item.id}
            isActive={selectedBackgroundId === item.id}
            onClick={() => handleBackgroundSelect(item.id)}
          >
            <BackgroundImage src={item.image} alt="Background" />
          </BackgroundItem>
        ))}
      </BackgroundsList>
    </>
  );
};

export default FilterBackgrounds;
