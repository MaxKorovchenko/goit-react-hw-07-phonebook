import { Oval } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <Oval
      height={16}
      width={16}
      color="#3a493a"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor="#4fa94d"
      strokeWidth={2}
      strokeWidthSecondary={2}
    />
  );
};
