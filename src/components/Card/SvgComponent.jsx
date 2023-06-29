export const SvgComponent = ({ w, h, sprite, name }) => {
  return (
    <svg width={w} height={h}>
      <use href={sprite + name}></use>
    </svg>
  );
};

export default SvgComponent;
