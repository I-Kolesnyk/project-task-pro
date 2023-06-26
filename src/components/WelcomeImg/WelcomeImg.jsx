import { Img } from './WelcomeImg.styled';
import * as img from '../../assets/images/';

const WelcomeImg = () => {
  return (
    <picture>
      <source
        type="image/webp"
        media="(min-width: 768px)"
        srcSet={`${img.desktopTabletWebp} 1x , ${img.desktopTabletWebp2x} 2x, `}
        sizes="162px "
      />
      <source
        type="image/webp"
        media="(min-width: 375px)"
        srcSet={` ${img.mobileWebp} 1x, ${img.mobileWebp2x} 2x, `}
        sizes="124px "
      />
      <source
        type="image/png"
        media="(min-width: 768px)"
        srcSet={`${img.desktopTabletPng} 1x, ${img.desktopTabletPng2x} 2x,`}
        sizes="162px,"
      />

      <source
        type="image/png"
        media="(min-width: 375px),"
        srcSet={`${img.mobilePng} 1x, ${img.mobilePng2x} 2x,`}
        sizes="124px,"
      />

      <Img src={img.mobilePng} alt="guy with laptop" />
    </picture>
  );
};

export default WelcomeImg;
