import Header from "../layouts/Header";
import Hero from "../layouts/Hero";
import PageContent from "../layouts/PageContent";

const Home = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <section>
        <Hero />
      </section>
      <section>
        <PageContent />
      </section>
    </>
  );
};

export default Home;
