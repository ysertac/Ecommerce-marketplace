import Pagination from "../components/Pagination";
import { productListData } from "../data";

const PageContentProducts = () => {
  return (
    <div>
      {/* First Part */}
      <div className="bg-dimbg  py-14">
        <h2 className="w-3/4 mx-auto flex justify-between text-2xl font-bold leading-8 pb-10 text-general">
          {productListData.shop.header.left}
          <span>
            <span className="text-sm font-bold">
              {productListData.shop.header.right.first}
            </span>
            <span className="text-[#BDBDBD] text-sm font-bold">
              {">" + productListData.shop.header.right.second}
            </span>
          </span>
        </h2>
        <div className="flex w-3/4 justify-between mx-auto">
          {productListData.shop.main.map((item) => (
            <div className={item.class}>
              <div>
                <p className="text-base text-center leading-6 text-white font-bold">
                  {item.content1}
                </p>
                <p className="text-sm text-center font-normal leading-5 text-white pt-3">
                  {item.content2}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Second Part */}
      <div>
        <div className="flex w-3/4 justify-between items-center mx-auto py-16">
          <p className="text-secondaryColor text-sm leading-6 font-bold">
            {productListData.secondPart.header.left.text}
          </p>
          <div className="w-44 flex justify-between items-center">
            <span className="text-secondaryColor text-sm leading-6 font-bold">
              {productListData.secondPart.header.views.text}
            </span>
            {productListData.secondPart.header.views.options.map((option) => (
              <span className="border-2 p-3">{option}</span>
            ))}
          </div>
          <div className="w-64 flex justify-between">
            <span className="text-sm leading-7 font-normal text-secondaryColor bg-[#f9f9f9] border border-[#dddddd] rounded-md py-4 px-8">
              {productListData.secondPart.header.buttons[0].text}{" "}
              {productListData.secondPart.header.buttons[0].icon}
            </span>
            <span className="text-sm leading-7 font-bold text-white bg-primaryColor border border-[#dddddd] rounded-md py-4 px-8">
              {productListData.secondPart.header.buttons[1]}
            </span>
          </div>
        </div>
        <div className="flex w-3/4 justify-between mx-auto flex-wrap content-between h-[1800px]">
          {productListData.secondPart.content.map((item) => (
            <div className="flex flex-col items-center">
              <img className="w-80" src={item.img} />
              <div>
                <h2 className="text-center font-bold text-base text-general pt-3">
                  {item.header}
                </h2>
                <h2 className="text-center font-bold text-sm leading-6 text-secondaryColor pt-3">
                  {item.header2}
                </h2>
                <p className="text-center pt-3">
                  <span className="font-bold text-base text-[#bdbdbd]">
                    {item.price.full}{" "}
                  </span>
                  <span className="font-bold text-base text-[#23856d]">
                    {item.price.discount}
                  </span>
                </p>
                <div className="flex w-20 justify-between mx-auto pt-3">
                  {item.colors.blue}
                  {item.colors.darkish}
                  {item.colors.orange}
                  {item.colors.green}
                </div>
              </div>
            </div>
          ))}
        </div>
        <Pagination />
      </div>

      {/* Logo Part */}
      <div className="bg-dimbg p-10 mt-12">
        <div className="w-3/4 flex justify-between mx-auto">
          {productListData.logoPart.map((logo) => (
            <img src={logo} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PageContentProducts;
