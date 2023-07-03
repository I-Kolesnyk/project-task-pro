export const SvgComponent = ({ w, h, sprite, icon }) => {
  return (
    <svg width={w} height={h}>
      <use href={sprite + icon}></use>
    </svg>
  );
};

export default SvgComponent;
