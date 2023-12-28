import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProductsAction } from "../store/actions/productActions";

const PageContentCategory = () => {
  const dispatch = useDispatch();
  const { gender, category } = useParams();
  const categories = useSelector((store) => store.global.categories);
  const products = useSelector((store) => store.product.productList);
  const [selectedCategory, setSelectedCategory] = useState({});
  const [products2, setProducts2] = useState(["a"]);

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
      {products.length !== 0
        ? products
            .filter((product) => product.category_id == selectedCategory?.id)
            .map((product) => (
              <div>
                {product.name}
                <img src={product.images[0].url} />
              </div>
            ))
        : selectedCategory?.title}
    </>
  );
};
export default PageContentCategory;
