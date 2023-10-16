import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import PageContentProducts from "../layouts/PageContentProducts";

const Products = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <section>
        <PageContentProducts />
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Products;
