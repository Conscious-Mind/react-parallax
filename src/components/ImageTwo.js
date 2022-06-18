import { Parallax } from "react-parallax";
import Satellite from "../images/satellite.jpeg";

const ImageTwo = () => (
  <Parallax
    className="parallax-img"
    blur={0}
    bgImage={Satellite}
    bgImageAlt="satellite viewed from space"
    strength={800}
  >
    <div className="content">
      <span className="img-txt">a trip to space</span>
    </div>
  </Parallax>
);

export default ImageTwo;