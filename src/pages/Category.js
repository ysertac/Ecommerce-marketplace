import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import PageContentCategory from "../layouts/PageContentCategory";

const Category = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <section>
        <PageContentCategory />
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  );
};
export default Category;
