const { Oval } = require('react-loader-spinner');

const LoaderOval = ({ height = 60, width = 60 }) => {
  return (
    <Oval
      height={height}
      width={width}
      color="#BEDBB0"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor="#BEDBB0"
      strokeWidth={4}
      strokeWidthSecondary={2}
    />
  );
};

export default LoaderOval;
