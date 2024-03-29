import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { data } from "../data";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsAction } from "../store/actions/productActions";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect } from "react";
const lsKey = "searchParam";

const PageContent = () => {
  const dispatch = useDispatch();
  const products = useSelector((store) => store.product.productList);
  useEffect(() => dispatch(fetchProductsAction(0, "")), []);
  return (
    <div className="mb-24">
      {/* Editors Pick Section */}
      <div>
        <h2 className="text-center text-2xl font-bold leading-8 p-16">
          {data.pageContent.header1}
        </h2>
        <div className="flex max-sm:flex-col w-3/4 max-sm:w-11/12 mx-auto justify-between max-sm:h-[390vw]">
          <div className="bg-[url('./assets/pg11.png')] bg-no-repeat bg-cover bg-center w-[48%] max-sm:w-full h-[30vw] max-sm:h-[125vw] relative">
            <a
              href="#"
              className="bg-white py-3 px-10 text-base font-bold absolute left-7 bottom-7"
            >
              {data.pageContent.links[0]}
            </a>
          </div>
          <div className="bg-[url('./assets/pg12.png')] bg-no-repeat bg-cover bg-center w-[24%] max-sm:w-full h-[30vw] max-sm:h-[125vw] relative">
            <a
              href="#"
              className="bg-white py-3 px-10 text-base font-bold absolute left-7 bottom-7"
            >
              {data.pageContent.links[1]}
            </a>
          </div>
          <div className="flex flex-col justify-between w-[24%] max-sm:w-full max-sm:h-[125vw]">
            <div className="bg-[url('./assets/pg13.png')] bg-no-repeat bg-cover bg-center w-full h-[14.2vw] max-sm:h-[60vw] relative">
              <a
                href="#"
                className="bg-white py-3 px-10 text-base font-bold absolute left-7 bottom-7"
              >
                {data.pageContent.links[2]}
              </a>
            </div>
            <div className="bg-[url('./assets/pg14.png')] bg-no-repeat bg-cover bg-center w-full h-[14.2vw] max-sm:h-[60vw] relative">
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
        <div className="flex w-3/4 max-sm:w-11/12 mx-auto flex-wrap justify-between content-arounds sm:h-[84vw]">
          {products.splice(0, 8).map((product) => (
            <Link to={`/shop/product/${product.id}`}>
              <div className="flex flex-col max-sm:w-full items-center mt-5">
                <img
                  className="w-80 max-sm:w-full"
                  src={product.images[0].url}
                />
                <div>
                  <h2 className="text-center font-bold text-base text-general pt-3">
                    {product.name}
                  </h2>
                  <h2 className="text-center font-bold text-sm leading-6 text-secondaryColor pt-3">
                    {product.description.substring(0, 26)}...
                  </h2>
                  <p className="text-center pt-3">
                    <span className="block font-bold text-base text-[#bdbdbd]">
                      {product.price}₺
                    </span>
                    <span className="block font-bold text-base text-[#23856d]">
                      Stock: {product.stock}
                    </span>
                  </p>
                  <div className="flex w-24 h-7 justify-between mx-auto pt-3">
                    <div className="bg-primaryColor w-4 h-4 rounded-full"></div>
                    <div className="bg-[#23856D] w-4 h-4 rounded-full"></div>
                    <div className="bg-[#E77C40] w-4 h-4 rounded-full"></div>
                    <div className="bg-[#252B42] w-4 h-4 rounded-full"></div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      {/* Banner Bottom Section */}
      <div className="mt-10">
        <Carousel
          className="max-sm:hidden"
          autoPlay
          infiniteLoop
          showThumbs={false}
          stopOnHover={false}
        >
          <div className="bg-[url('./assets/pccar1.png')] sm:h-[41.5vw] h-[100vh] bg-no-repeat max-sm:bg-center bg-cover w-full"></div>
          <div className="bg-[url('./assets/pccar2.png')] sm:h-[41.5vw] h-[100vh] bg-no-repeat max-sm:bg-center bg-cover w-full"></div>
        </Carousel>
        <Carousel
          className="sm:hidden"
          autoPlay
          infiniteLoop
          showThumbs={false}
          stopOnHover={false}
        >
          <div className="bg-[url('./assets/pccarres.jpg')] sm:h-[41.5vw] h-[100vh] bg-no-repeat max-sm:bg-center bg-cover w-full"></div>
          <div className="bg-[url('./assets/pccar2.png')] sm:h-[41.5vw] h-[100vh] bg-no-repeat max-sm:bg-center bg-cover w-full"></div>
        </Carousel>
      </div>
      {/* Page Content 4 section */}
      <div className="flex max-sm:flex-col-reverse w-3/4 max-sm:w-11/12 mx-auto justify-between items-center max-sm:h-[220vw]">
        <img src={data.pageContent.pageContent4.img} />
        <div className="max-sm:text-center max-sm:w-full max-sm:mt-14">
          <p className="text-base font-bold leading-6 text-[#BDBDBD]">
            {data.pageContent.pageContent4.text1}
          </p>
          <h2 className="text-[40px] font-bold leading-[50px] text-[#252B42] sm:w-96 pt-7">
            {data.pageContent.pageContent4.header}
          </h2>
          <p className="text-xl font-normal leading-7 text-[#737373] sm:w-96 pt-7">
            {data.pageContent.pageContent4.text2}
          </p>
          <div className="pt-7 max-sm:flex max-sm:flex-col max-sm:justify-between max-sm:w-full">
            <a
              href="#"
              className="py-3 px-7 sm:mr-5 max-sm:mb-5 bg-[#2dc071] text-white rounded-md"
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
        <h2 className="text-center text-[40px] leading-[50px] font-bold text-general py-16">
          {data.pageContent.pageContent5.header}
        </h2>
        <div className="flex w-3/4 max-sm:w-11/12 flex-wrap justify-between mx-auto">
          {data.pageContent.pageContent5.items.map((item) => (
            <div className="border-2 w-[32%] max-sm:w-full mb-5">
              <img className="w-full" src={item.img} />
              <div className="w-60 flex justify-between text-secondaryColor my-3 ml-5">
                {item.topText.map((text) => (
                  <a>{text}</a>
                ))}
              </div>
              <h2 className="text-xl max-sm:text-lg text-general font-normal sm:w-80 ml-5">
                {item.name}
              </h2>
              <p className="w-80 text-secondaryColor font-normal text-sm my-2 ml-5 pt-2">
                {item.bottomText}
              </p>
              <div className="flex max-sm:flex-col justify-between sm:w-96 pt-5 ml-5">
                <span>
                  {item.date.icon} {item.date.value}
                </span>
                <span className="max-sm:mt-4">
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
