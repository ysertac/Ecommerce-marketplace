import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import PageContentAbout from "../layouts/PageContentAbout";

const About = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <section>
        <PageContentAbout />
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default About;
