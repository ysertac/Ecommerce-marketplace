import { Link } from "react-router-dom";
import Pagination from "../components/Pagination";
import { productListData, teamData } from "../data";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProductsAction,
  paginateProductsAction,
} from "../store/actions/productActions";
import { useEffect, useState } from "react";

import {
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";

const PageContentProducts = () => {
  const [loading, setLoading] = useState(false);
  const { pageno } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const categories = useSelector((store) => store.global.categories);
  const products = useSelector((store) => store.product.productList);
  const activePage = useSelector((store) => store.product.activePage);
  const pageCount = useSelector((store) => store.product.pageCount);
  const lsKey = "searchParam";
  const paginationNumbers = [];
  for (let i = 1; i <= Math.ceil(pageCount); i++) {
    paginationNumbers.push(i);
  }
  useEffect(() => {
    dispatch(paginateProductsAction("", localStorage.getItem(lsKey)));
  }, [localStorage.getItem(lsKey)]);

  useEffect(
    () =>
      localStorage.getItem(lsKey) == null
        ? dispatch(fetchProductsAction(pageno - 1, ""))
        : dispatch(
            fetchProductsAction(pageno - 1, localStorage.getItem(lsKey))
          ),
    [activePage]
  );
  console.log(products);

  return (
    <div>
      {/* First Part */}
      <div className="bg-dimbg  py-14">
        <h2 className="w-3/4 max-sm:w-11/12 mx-auto flex max-sm:flex-col max-sm:items-center max-sm:h-36 justify-between text-2xl font-bold leading-8 pb-10 text-general">
          {productListData.shop.header.left}
          <p className="inline-block">
            <span className="text-sm font-bold">
              {productListData.shop.header.right.first + " "}
            </span>
            <span className="text-[#BDBDBD] text-sm font-bold">
              {teamData.bannerTop[2]}
            </span>
            <span className="text-secondaryColor text-sm font-bold">
              {" " + productListData.shop.header.right.second}
            </span>
          </p>
        </h2>
        <div className="flex w-3/4 max-sm:w-11/12 max-sm:flex-col justify-between mx-auto">
          {categories
            .filter((category) => category.rating >= 4.1 && category.id !== 9)
            .map((category) => (
              <div
                onClick={() => (
                  dispatch(fetchProductsAction(pageno - 1, category.id)),
                  localStorage.setItem(lsKey, category.id),
                  history.push(
                    `/shop/${category.gender}/${category.title.toLowerCase()}`
                  )
                )}
                className="w-[18.75%] max-sm:w-full h-[20vw] max-sm:h-[100vw] flex flex-col justify-between items-center cursor-pointer"
              >
                <div
                  style={{ backgroundImage: `url(${category.img})` }}
                  className={
                    "bg-cover w-full h-[15.5vw] max-sm:h-[75vw] max-sm:mt-5 bg-no-repeat flex justify-center items-center max-sm:w-full"
                  }
                ></div>
                <div className="text-sm leading-6 font-bold text-center">
                  <p className="text-secondaryColor">
                    {category.code[0] == "e" ? "erkek" : "kadın"}
                  </p>
                  <p className="text-general">{category.title}</p>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Second Part */}
      <div>
        <div className="flex w-3/4 max-sm:w-11/12 max-sm:flex-col max-sm:h-80 justify-between items-center mx-auto py-16">
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
            <span className="text-sm leading-7 font-normal text-secondaryColor bg-[#f9f9f9] border border-[#dddddd] rounded-md py-4 max-sm:py-2 px-8 max-sm:px-4">
              {productListData.secondPart.header.buttons[0].text}{" "}
              {productListData.secondPart.header.buttons[0].icon}
            </span>
            <span className="text-sm leading-7 font-bold text-white bg-primaryColor border border-[#dddddd] rounded-md py-4 max-sm:py-2 px-8 max-sm:px-6">
              {productListData.secondPart.header.buttons[1]}
            </span>
          </div>
        </div>

        <div className="flex w-3/4 max-sm:flex-col max-sm:w-11/12 justify-between mx-auto sm:flex-wrap sm:content-between">
          {products.map((product) => (
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
        <Pagination paginationNumbers={paginationNumbers} />
      </div>

      {/* Logo Part */}
      <div className="bg-dimbg p-10 max-sm:py-20 mt-12">
        <div className="w-3/4 max-sm:w-11/12 max-sm:flex-col flex justify-between mx-auto">
          {productListData.logoPart.map((logo) => (
            <img
              className="max-sm:my-10 max-sm:w-1/3 max-sm:mx-auto"
              src={logo}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PageContentProducts;
