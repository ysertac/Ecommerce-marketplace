import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProductsAction } from "../store/actions/productActions";
import { Link } from "react-router-dom";

const PageContentCategory = () => {
  const dispatch = useDispatch();
  const { gender, category } = useParams();
  const categories = useSelector((store) => store.global.categories);
  const products = useSelector((store) => store.product.productList);
  const [selectedCategory, setSelectedCategory] = useState({});

  useEffect(() => {
    dispatch(fetchProductsAction());
  }, []);

  useEffect(() => {
    setSelectedCategory(
      categories
        .filter((item) => item.code[0] == gender[0])
        .find((item) => item.code.substring(2) === category)
    );
  });
  console.log(products);
  console.log(selectedCategory);
  return (
    <>
      <div className="flex w-3/4 max-sm:flex-col max-sm:w-11/12 py-16 justify-between mx-auto sm:flex-wrap sm:content-between">
        {products.length !== 0
          ? products
              .filter((product) => product.category_id == selectedCategory?.id)
              .map((product) => (
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
                          {product.price}
                          {"₺"}
                        </span>
                        <span className="block font-bold text-base text-[#23856d]">
                          {"Stok durumu: " + product.stock}
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
              ))
          : "Loading"}
      </div>
    </>
  );
};
export default PageContentCategory;
