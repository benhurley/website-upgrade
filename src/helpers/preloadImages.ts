import backgroundImg from "../img/background.png";
import dhImg from "../img/dh.png";
import bonobosImg from "../img/bonobos.png";
import nippiesImg from "../img/nippies.png";
import svplychvnImg from "../img/svply.png";
import cryptoCostImg from "../img/cryptocost.png";

export const preloadImages = () => {
  // add any images to preload above fold here
  const images = [backgroundImg, dhImg, bonobosImg, nippiesImg, svplychvnImg, cryptoCostImg];

  return images.map((image) => {
    const img = new Image();
    img.src = image;
    return img;
  });
};
