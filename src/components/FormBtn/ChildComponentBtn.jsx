import PropTypes from 'prop-types';

import sprite from '../../assets/sprite.svg';
import { ContainerSvg, Svg } from './ChildComponentBtn.styled';

export function ChildComponent({ textContent }) {
  return (
    <>
      <ContainerSvg>
        <Svg width="14px" height="14px">
          <use href={sprite + '#plus'}></use>
        </Svg>
      </ContainerSvg>

      <p>{textContent}</p>
    </>
  );
}

ChildComponent.propTypes = {
  textContent: PropTypes.string.isRequired,
};
