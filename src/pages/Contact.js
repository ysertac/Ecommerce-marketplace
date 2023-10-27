import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import PageContentContact from "../layouts/PageContentContact";

const Contact = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <section>
        <PageContentContact />
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Contact;
