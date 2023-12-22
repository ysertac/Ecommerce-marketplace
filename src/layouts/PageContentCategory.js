import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const PageContentCategory = () => {
  const { gender, category } = useParams();
  const categories = useSelector((store) => store.global.categories);
  const [selectedCategory, setSelectedCategory] = useState({});

  useEffect(() =>
    setSelectedCategory(
      categories
        .filter((item) => item.code[0] == gender[0])
        .find((item) => item.code.substring(2) === category)
    )
  );

  return <>{selectedCategory?.title}</>;
};
export default PageContentCategory;
