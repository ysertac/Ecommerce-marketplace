import Header from "../components/Header";
import Hero from "../components/Hero";
import PageContent from "../components/PageContent";

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
