import { useParams } from "react-router-dom";
import { aboutUsData, productData, productListData, teamData } from "../data";

const PageContentProduct = () => {
  const { id } = useParams();
  const item = productListData.secondPart.content.find((item) => item.id == id);

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
          <img src={item.img} className="w-2/5 max-sm:w-full sm:h-[30vw]" />
          <div className="w-2/5 max-sm:w-full sm:h-[30vw] flex flex-col justify-between">
            <p className="text-xl font-normal text-general max-sm:mt-5">
              {item.header}
            </p>
            <p className="text-xl font-normal text-general max-sm:mt-5">
              {item.header2}
            </p>
            <p className="font-bold text-2xl text-general max-sm:mt-5">
              {item.price.full} / {item.price.discount}
            </p>
            <p className="text-secondaryColor font-bold text-sm leading-6 max-sm:mt-5">
              Availability :{" "}
              {item.stock == "in stock" ? (
                <span className="text-primaryColor">In Stock</span>
              ) : (
                <span className="text-red-700">Out of Stock</span>
              )}
            </p>
            <p className="text-[#858585] font-normal text-sm max-sm:mt-5 max-sm:pb-5 border-b border-[#bdbdbd]">
              {item.definition}
            </p>
            <div className="flex w-36 h-6 justify-between max-sm:mt-5">
              {item.colors.blue}
              {item.colors.darkish}
              {item.colors.orange}
              {item.colors.green}
            </div>
            <div className="flex w-80 justify-between max-sm:mt-5">
              <button className="text-white bg-primaryColor py-3 px-5 rounded-md font-bold text-sm leading-6">
                {item.buttons[0]}
              </button>
              <button className="border bordere-[#e8e8e8] rounded-full w-10 h-10">
                {item.buttons[1]}
              </button>
              <button className="border bordere-[#e8e8e8] rounded-full w-10 h-10">
                {item.buttons[2]}
              </button>
              <button className="border bordere-[#e8e8e8] rounded-full w-10 h-10">
                {item.buttons[3]}
              </button>
            </div>
          </div>
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
          <div className="flex sm:flex-wrap max-sm:flex-col justify-between sm:h-[63vw] py-7 content-between">
            {productData.options.bestSeller.products.map((product) => (
              <div className="sm:w-[21%] bg-white max-sm:my-5">
                <img className="w-full" src={product.img} />
                <div className="sm:h-[11vw] flex flex-col justify-evenly pl-7">
                  <h2 className="text-general font-bold text-base max-sm:mt-5">
                    {product.name}
                  </h2>
                  <p className="text-secondaryColor font-bold text-sm leading-6 max-sm:mt-5">
                    {product.def}
                  </p>
                  <p className="max-sm:py-5">
                    <span className="text-[#bdbdbd] font-bold text-base">
                      {product.price[0]}
                    </span>{" "}
                    <span className="text-[#23856d] font-bold text-base">
                      {product.price[1]}
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Companies */}
      <div className="bg-dimbg">
        <div className="flex mx-auto w-3/4 max-sm:w-11/12 max-sm:flex-col justify-between py-10">
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
