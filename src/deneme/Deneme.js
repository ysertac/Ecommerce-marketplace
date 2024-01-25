import { useEffect, useState } from "react";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import axios from "axios";

const Deneme = () => {
  const [categories, setCategories] = useState([]);
  const [formValue, setFormValue] = useState({
    title: null,
    img: null,
    rating: null,
    gender: null,
  });

  useEffect(() => {
    axios
      .get("http://localhost:8080/ecommerce/category")
      .then((res) => setCategories(res.data));
  }, []);
  const changeHandler = (e) => {
    let { name, value } = e.target;
    e.preventDefault();

    setFormValue({ ...formValue, [name]: value });
  };
  const submitHandler = () => {
    axios
      .post("http://localhost:8080/ecommerce/category", formValue)
      .then((res) => console.log(res.data));
  };
  return (
    <>
      <header>
        <Header />
      </header>
      <section>
        {categories.map((category) => (
          <div className="flex flex-col max-sm:w-full items-center mt-5">
            <img className="w-60 max-sm:w-full" src={category.img} />
            <div>
              <h2 className="text-center font-bold text-base text-general pt-3">
                {category.title}
              </h2>
              <p className="text-center pt-3">
                <span className="block font-bold text-base text-[#bdbdbd]">
                  {category.rating}
                </span>
                <span className="block font-bold text-base text-[#23856d]">
                  Cinsiyet: {category.gender == "e" ? "Erkek" : "Kadın"}
                </span>
              </p>
            </div>
          </div>
        ))}
      </section>
      <section>
        <div>
          <form
            onSubmit={submitHandler}
            className="my-10 flex flex-col justify-center items-center mx-auto"
          >
            <label>
              Category title:{" "}
              <input
                type="text"
                className="border-2 border-primaryColor rounded-md my-4"
                name="title"
                onChange={changeHandler}
              />
            </label>
            <label>
              Category image:{" "}
              <input
                type="file"
                className="border-2 border-primaryColor rounded-md my-4"
                name="img"
                onChange={changeHandler}
              />
            </label>
            <label>
              Rating:{" "}
              <input
                type="text"
                className="border-2 border-primaryColor rounded-md my-4"
                name="rating"
                onChange={changeHandler}
              />
            </label>
            Gender:{" "}
            <label>
              <input
                type="radio"
                name="gender"
                className="border-2 border-primaryColor rounded-md my-4"
                value={"e"}
                onChange={changeHandler}
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                className="border-2 border-primaryColor rounded-md my-4"
                value={"k"}
                onChange={changeHandler}
              />
              Female
            </label>
            <input
              type="submit"
              value={"submit"}
              className="bg-primaryColor py-2 px-4 rounded-md"
            />
          </form>
        </div>
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Deneme;
