import { data } from "../data";

const ProductList = () => {
  return (
    <div className="flex w-3/4 mx-auto flex-wrap justify-between content-around h-[84vw]">
      {data.pageContent.products.map((product) => (
        <div className="w-[23%]">
          <img src={product.image} className="w-full" />
          <p className="text-center text-[#252B42] text-base leading-6 font-bold pt-5">
            {product.name}
          </p>
          <div className="text-center pt-5">
            <span className="px-1 font-bold text-base leading-6 text-[#BDBDBD]">
              {product.price.first}
            </span>
            <span className="px-1 font-bold text-base leading-6 text-[#23856D]">
              {product.price.discount}
            </span>
          </div>
          <div className="flex justify-between pt-5 items-center w-[30%] mx-auto">
            {product.colors.map((color) => color.icon)}
          </div>
        </div>
      ))}
    </div>
  );
};
export default ProductList;
