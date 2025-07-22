import Banner from "../component/Banner";
import Brand from "../component/Brand";
import CollectionSection from "../component/CollectionSection";
import Futured from "../component/Futured";
import Hero from "../component/Hero";
import Nemo from "../component/Nemo";
import Products from "../component/Products";
import Sed from "../component/Sed";
import "../style/home.css";

function HomePage() {
  return (
    <div className="home">
      <main>
        <Hero
          className="home__hero"
          text="At vero eoset"
          title="Lorem ipsum de dolor amet"
          reverse={false}
        />
        <Products />
        <Brand />
        <CollectionSection />
        <Banner />
        <Sed />
        <Nemo />
        <Futured />
      </main>
    </div>
  );
}

export default HomePage;
