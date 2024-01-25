import { useParams } from "react-router-dom";
import { aboutUsData, productData, productListData, teamData } from "../data";
import { useSelector } from "react-redux";

const PageContentProduct = () => {
  const { id } = useParams();
  const products = useSelector((store) => store.product.productList);
  const activePage = useSelector((store) => store.product.activePage);

  console.log(id);
  return (
    <div>
      <div className="bg-dimbg py-10">
        <p className="w-3/4 max-sm:text-center mx-auto">
          <span className="text-general text-sm leading-6 font-bold">
            {productListData.shop.header.right.first + " "}
          </span>
          <span className="text-[#bdbdbd]">{teamData.bannerTop[2]}</span>
          <span className="text-secondaryColor text-sm leading-6 font-bold">
            {" " + productListData.shop.header.right.second}
          </span>
        </p>
      </div>
      <div className="bg-dimbg pb-12">
        <div className="w-3/4 max-sm:w-11/12 mx-auto flex max-sm:flex-col justify-between">
          {products.length !== 0 ? (
            <>
              <img
                src={products[id - 2 - activePage * 24].images[0].url}
                className="w-2/5 max-sm:w-full sm:h-[30vw]"
              />
              <div className="w-2/5 max-sm:w-full sm:h-[30vw] flex flex-col justify-between">
                <p className="text-xl font-normal text-general max-sm:mt-5">
                  {products[id - 2 - activePage * 24].name}
                </p>
                <p className="text-xl font-normal text-general max-sm:mt-5">
                  {products[id - 2 - activePage * 24].description}
                </p>
                <p className="font-bold text-2xl text-general max-sm:mt-5">
                  {products[id - 2 - activePage * 24].price}₺
                </p>
                <p className="text-secondaryColor font-bold text-sm leading-6 max-sm:mt-5">
                  Stock :{" "}
                  {products[id - 2 - activePage * 24].stock > 0 ? (
                    <span className="text-primaryColor">
                      {products[id - 2 - activePage * 24].stock}
                    </span>
                  ) : (
                    <span className="text-red-700">
                      {products[id - 2 - activePage * 24].stock}
                    </span>
                  )}
                </p>
                <div className="flex w-36 h-6 justify-between max-sm:mt-5">
                  <div className="bg-primaryColor w-6 h-6 rounded-full"></div>
                  <div className="bg-[#23856D] w-6 h-6 rounded-full"></div>
                  <div className="bg-[#E77C40] w-6 h-6 rounded-full"></div>
                  <div className="bg-[#252B42] w-6 h-6 rounded-full"></div>
                </div>
                <div className="flex w-80 justify-between max-sm:mt-5">
                  <button className="capitalize text-white bg-primaryColor py-3 px-5 rounded-md font-bold text-sm leading-6">
                    select options
                  </button>
                  <button className="border bordere-[#e8e8e8] rounded-full w-10 h-10">
                    <i class="fa-regular fa-heart"></i>
                  </button>
                  <button className="border bordere-[#e8e8e8] rounded-full w-10 h-10">
                    <i class="fa-solid fa-cart-shopping"></i>
                  </button>
                  <button className="border bordere-[#e8e8e8] rounded-full w-10 h-10">
                    <i class="fa-regular fa-eye"></i>
                  </button>
                </div>
              </div>
            </>
          ) : (
            "loading"
          )}
        </div>
      </div>
      {/* Details */}
      <div className="w-3/4 max-sm:w-11/12 mx-auto text-center flex justify-evenly max-sm:justify-between items-center py-5 border-b border-[#ececec]">
        <span className="text-sm text-secondaryColor font-semibold leading-6">
          {productData.options.headers[0]}
        </span>
        <span className="text-sm text-secondaryColor font-semibold leading-6">
          {productData.options.headers[1]}
        </span>
        <span className="text-sm text-secondaryColor font-semibold leading-6">
          {productData.options.headers[2].name}{" "}
          <span className="text-[#23856d] font-bold">
            ({productData.options.headers[2].number})
          </span>
        </span>
      </div>
      <div className="flex w-3/4 max-sm:w-11/12 mx-auto max-sm:flex-col justify-between py-10">
        <img
          className="shadow-2xl w-1/4 max-sm:w-full"
          src={productData.options.details.img}
        />
        <div className="w-1/4 sm:h-[22vw] flex flex-col justify-between items-start max-sm:w-full max-sm:mt-20">
          <h2 className="text-general text-2xl font-bold max-sm:mb-5">
            {productData.options.details.secondCol.header}
          </h2>
          {productData.options.details.secondCol.content.map((paragraph) => (
            <p className="text-secondaryColor font-normal text-sm max-sm:py-2">
              {paragraph}
            </p>
          ))}
        </div>
        <div className="w-1/4 max-sm:w-full sm:h-[22vw] flex flex-col justify-between items-start max-sm:mt-10">
          <h2 className="text-general text-2xl font-bold max-sm:mb-5">
            {productData.options.details.thirdCol.header}
          </h2>
          {productData.options.details.thirdCol.content1.map((line) => (
            <p className="text-secondaryColor font-bold text-sm max-sm:my-2">
              {line.icon} {line.sentence}
            </p>
          ))}

          <h2 className="text-general text-2xl font-bold max-sm:my-5">
            {productData.options.details.thirdCol.header}
          </h2>
          {productData.options.details.thirdCol.content2.map((line) => (
            <p className="text-secondaryColor font-bold text-sm max-sm:py-2">
              {line.icon} {line.sentence}
            </p>
          ))}
        </div>
      </div>
      {/* BestSeller Part */}
      <div className="bg-dimbg">
        <div className="w-3/4 max-sm:w-11/12 mx-auto">
          <h2 className="text-general font-bold text-2xl border-b py-8 border-[#ececec]">
            {productData.options.bestSeller.header}
          </h2>
          <div className="flex sm:flex-wrap max-sm:flex-col justify-between sm:h-[68vw] py-7 content-between">
            {products.length !== 0
              ? products.splice(0, 8).map((product) => (
                  <div className="sm:w-[21%] bg-white max-sm:my-5">
                    <img className="w-full" src={product.images[0].url} />
                    <div className="sm:h-[8vw] flex flex-col justify-evenly pl-7">
                      <h2 className="text-general text-center font-bold text-base max-sm:mt-5">
                        {product.name}
                      </h2>
                      <p className="text-secondaryColor text-center font-bold text-sm leading-6 max-sm:mt-5">
                        {product.description.substring(0, 26)}...
                      </p>
                      <p className="max-sm:py-5">
                        <span className="block text-center text-[#bdbdbd] font-bold text-base">
                          {product.price}₺
                        </span>{" "}
                        <span className="block text-center text-[#23856d] font-bold text-base">
                          Stock: {product.stock}
                        </span>
                      </p>
                    </div>
                  </div>
                ))
              : "loading"}
          </div>
        </div>
      </div>
      {/* Companies */}
      <div className="bg-dimbg">
        <div className="flex mx-auto w-3/4 max-sm:w-11/12 max-sm:flex-col justify-between py-16">
          {aboutUsData.companies.img.map((img) => (
            <img
              className="max-sm:w-1/3 max-sm:mx-auto max-sm:py-10"
              src={img}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PageContentProduct;
