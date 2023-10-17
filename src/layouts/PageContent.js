import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { data } from "../data";
import ProductList from "../components/ProductList";

const PageContent = () => {
  return (
    <div className="mb-24">
      {/* Editors Pick Section */}
      <div>
        <h2 className="text-center text-2xl font-bold leading-8 p-16">
          {data.pageContent.header1}
        </h2>
        <div className="flex w-[73%] mx-auto justify-between">
          <div className="bg-[url('./assets/pg11.png')] bg-no-repeat bg-cover h-[650px] w-[650px] relative">
            <a
              href="#"
              className="bg-white py-3 px-10 text-base font-bold absolute left-7 bottom-7"
            >
              {data.pageContent.links[0]}
            </a>
          </div>
          <div className="bg-[url('./assets/pg12.png')] bg-no-repeat bg-cover h-[650px] w-[25%] relative">
            <a
              href="#"
              className="bg-white py-3 px-10 text-base font-bold absolute left-7 bottom-7"
            >
              {data.pageContent.links[1]}
            </a>
          </div>
          <div className="flex flex-col justify-between">
            <div className="bg-[url('./assets/pg13.png')] bg-no-repeat bg-cover h-[310px] w-[320px] relative">
              <a
                href="#"
                className="bg-white py-3 px-10 text-base font-bold absolute left-7 bottom-7"
              >
                {data.pageContent.links[2]}
              </a>
            </div>
            <div className="bg-[url('./assets/pg14.png')] bg-no-repeat bg-cover h-[310px] w-[320px] relative">
              <a
                href="#"
                className="bg-white py-3 px-10 text-base font-bold absolute left-7 bottom-7"
              >
                {data.pageContent.links[3]}
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Product List Section */}
      <div>
        <h2 className="text-center text-2xl font-bold leading-8 p-16">
          <p className="font-normal text-xl text-[#737373] leading-8">
            {data.pageContent.header2.text}
          </p>
          {data.pageContent.header2.header}
        </h2>
        <ProductList />
      </div>
      {/* Banner Bottom Section */}
      <div className="mt-10">
        <Carousel autoPlay infiniteLoop showThumbs={false} stopOnHover>
          {data.pageContent.carousel.map((slider) => (
            <div>
              <img src={slider} />
            </div>
          ))}
        </Carousel>
      </div>
      {/* Page Content 4 section */}
      <div className="flex w-[73%] mx-auto justify-between items-center">
        <img src={data.pageContent.pageContent4.img} />
        <div>
          <p className="text-base font-bold leading-6 text-[#BDBDBD]">
            {data.pageContent.pageContent4.text1}
          </p>
          <h2 className="text-[40px] font-bold leading-[50px] text-[#252B42] w-96 pt-7">
            {data.pageContent.pageContent4.header}
          </h2>
          <p className="text-xl font-normal leading-7 text-[#737373] w-96 pt-7">
            {data.pageContent.pageContent4.text2}
          </p>
          <div className="pt-7">
            <a
              href="#"
              className="py-3 px-7 mr-5 bg-[#2dc071] text-white rounded-md"
            >
              {data.pageContent.pageContent4.buttons[0]}
            </a>
            <a
              href="#"
              className="py-[10px] px-[26px] bg-white text-[#2dc071] border-[#2dc071] border-2 rounded-md"
            >
              {data.pageContent.pageContent4.buttons[1]}
            </a>
          </div>
        </div>
      </div>
      {/* Page Content 5 section */}
      <div>
        <h2 className="text-center text-[40px] leading-[50px] font-bold text-[#252B42] py-16">
          {data.pageContent.pageContent5.header}
        </h2>
        <div className="flex w-[73%] justify-between mx-auto">
          {data.pageContent.pageContent5.items.map((item) => (
            <div className="border-2">
              <img className="w-[450px]" src={item.img} />
              <div className="w-60 flex justify-between text-[#737373] my-3 ml-5">
                {item.topText.map((text) => (
                  <a>{text}</a>
                ))}
              </div>
              <h2 className="text-xl text-general font-normal w-80 ml-5">
                {item.name}
              </h2>
              <p className="w-80 text-[#737373] font-normal text-sm my-2 ml-5 pt-2">
                {item.bottomText}
              </p>
              <div className="flex justify-between w-96 pt-5 ml-5">
                <span>
                  {item.date.icon} {item.date.value}
                </span>
                <span>
                  {item.comment.icon} {item.comment.number} {item.comment.text}
                </span>
              </div>
              <div className="text-sm leading-6 font-bold py-7 ml-5">
                {item.learnMore.text} {item.learnMore.icon}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PageContent;
