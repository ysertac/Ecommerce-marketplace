import { productListData } from "../data";

const PageContentProducts = () => {
  return (
    <div>
      {/* First Part */}
      <div className="bg-dimbg">
        <h2 className="w-standart mx-auto flex justify-between py-7 text-2xl font-bold leading-8 text-general">
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
      </div>
      <div className="flex w-standart justify-between mx-auto">
        {productListData.shop.main.map((item) => (
          <div className={item.class}>
            <div>
              <p className="text-base text-center leading-6 text-white font-bold">
                {item.content1}
              </p>
              <p className="text-sm text-center font-normal leading-5 text-white">
                {item.content2}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PageContentProducts;
