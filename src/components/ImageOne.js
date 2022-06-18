import { Parallax } from "react-parallax";
import Earth from "../images/earth.jpg";

const ImageOne = () => (
  <Parallax
    className="parallax-img"
    blur={0}
    bgImage={Earth}
    bgImageAlt="the earth viewd from space"
    strength={800}
  >
    <div className="content">
      <span className="img-txt">a trip to space</span>
    </div>
  </Parallax>
);

export default ImageOne;
