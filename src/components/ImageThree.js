import { Parallax } from "react-parallax";
import SpaceStation from "../images/spaceStation.jpeg";

const ImageThree = () => (
  <Parallax
    className="parallax-img"
    blur={0}
    bgImage={SpaceStation}
    bgImageAlt="viewing earth from a space station"
    strength={800}
  >
    <div className="content">
      <span className="img-txt">a trip to space</span>
    </div>
  </Parallax>
);

export default ImageThree;
