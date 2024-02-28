import backgroundImg from "../img/background.webp";
import dhImg from "../img/dh.webp";
import bonobosImg from "../img/bonobos.webp";
import prettyTicketsImg from  '../img/prettyTickets.webp';
import golfImg from  '../img/golf.webp';
import featuredGPTImg from "../img/featuredGolfgpt.webp";

export const preloadImages = () => {
  // add any images to preload above fold here
  const images = [backgroundImg, dhImg, bonobosImg, prettyTicketsImg, golfImg, featuredGPTImg];

  return images.map((image) => {
    const img = new Image();
    img.src = image;
    return img;
  });
};
