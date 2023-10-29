import { useParams } from "react-router-dom";
import { productListData, teamData } from "../data";

const PageContentProduct = () => {
  const { id } = useParams();
  const item = productListData.secondPart.content.find((item) => item.id == id);

  console.log(id);
  return (
    <div>
      <div className="bg-dimbg py-10">
        <p className="w-3/4 mx-auto">
          <span className="text-general text-sm leading-6 font-bold">
            {productListData.shop.header.right.first + " "}
          </span>
          <span className="text-[#bdbdbd]">{teamData.bannerTop[2]}</span>
          <span className="text-secondaryColor text-sm leading-6 font-bold">
            {" " + productListData.shop.header.right.second}
          </span>
        </p>
      </div>
      <div className="bg-dimbg">
        <div className="w-3/4 mx-auto flex justify-between">
          <img src={item.img} className="w-2/5 h-[30vw]" />
          <div className="w-2/5 h-[30vw] flex flex-col justify-between">
            <p className="text-xl font-normal text-general">{item.header}</p>
            <p className="text-xl font-normal text-general">{item.header2}</p>
            <p className="font-bold text-2xl text-general">
              {item.price.full} / {item.price.discount}
            </p>
            <p className="text-secondaryColor font-bold text-sm leading-6">
              Availability :{" "}
              {item.stock == "in stock" ? (
                <span className="text-primaryColor">In Stock</span>
              ) : (
                <span className="text-red-700">Out of Stock</span>
              )}
            </p>
            <p className="text-[#858585] font-normal text-sm">
              {item.definition}
            </p>
            <div className="flex w-36 h-6 justify-between">
              {item.colors.blue}
              {item.colors.darkish}
              {item.colors.orange}
              {item.colors.green}
            </div>
            <div className="flex w-80 justify-between">
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
    </div>
  );
};

export default PageContentProduct;
