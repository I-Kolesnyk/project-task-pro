import * as s from './IconList.styled';
import SvgComponent from '../../SvgComponent/SvgComponent';

const IconList = ({ icons, sprite }) => {
  return (
    <s.IconList>
      {icons.map(icon => (
        <s.IconListItem key={icon}>
          <s.IconBtn>
            <SvgComponent w={'16px'} h={'16px'} sprite={sprite} name={icon} />
          </s.IconBtn>
        </s.IconListItem>
      ))}
    </s.IconList>
  );
};

export default IconList;
