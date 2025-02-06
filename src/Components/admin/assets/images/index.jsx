import donalTrump from "./donald.png";
import institution from "./institution.png";
import blueRectangle from "./blueRectangle.png";
export const DonaldTrump = ({ url }) => {
  return (
    <img
      src={url || donalTrump}
      className='size-10 rounded-full object-cover'
      alt='user'
    />
  );
};

export const InstitutionLogo = () => {
  return <img src={institution || blueRectangle} alt='institution' />;
};

export const BlueRectangleImage = () => {
  return <img src={blueRectangle} alt='institution' />;
};
