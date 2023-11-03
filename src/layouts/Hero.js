import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { data } from "../data";

const Hero = () => {
  return (
    <>
      <Carousel
        className="max-sm:hidden"
        autoPlay
        infiniteLoop
        showThumbs={false}
        stopOnHover={false}
      >
        <div className="bg-[url('./assets/b11.jpg')] w-full sm:h-[41.5vw] h-[100vh] bg-no-repeat max-sm:bg-center bg-cover"></div>
        <div className="bg-[url('./assets/b12.jpg')] w-full sm:h-[41.5vw] h-[100vh] bg-no-repeat max-sm:bg-center bg-cover"></div>
        <div className="bg-[url('./assets/b13.jpg')] w-full sm:h-[41.5vw] h-[100vh] bg-no-repeat max-sm:bg-center bg-cover"></div>
      </Carousel>
      <Carousel
        className="sm:hidden"
        autoPlay
        infiniteLoop
        showThumbs={false}
        stopOnHover={false}
      >
        <div className="bg-[url('./assets/bres1.jpg')] w-full sm:h-[41.5vw] h-[100vh] bg-no-repeat max-sm:bg-center bg-cover"></div>
        <div className="bg-[url('./assets/bres3.jpg')] w-full sm:h-[41.5vw] h-[100vh] bg-no-repeat max-sm:bg-center bg-cover"></div>
        <div className="bg-[url('./assets/bres2.jpg')] w-full sm:h-[41.5vw] h-[100vh] bg-no-repeat max-sm:bg-center bg-cover"></div>
      </Carousel>
    </>
  );
};

export default Hero;
