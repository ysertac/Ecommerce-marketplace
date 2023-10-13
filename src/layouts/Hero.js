import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { data } from "../data";

const Hero = () => {
  return (
    <Carousel autoPlay infiniteLoop showThumbs={false} stopOnHover>
      {data.hero.carousel.map((img) => (
        <div>
          <img src={img} className="h-[85vh]" />
        </div>
      ))}
    </Carousel>
  );
};

export default Hero;
