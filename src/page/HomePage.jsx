import Banner from "../component/Banner";
import Brand from "../component/Brand";
import CollectionSection from "../component/CollectionSection";
import Footer from "../component/Footer";
import Futured from "../component/Futured";
import Hero from "../component/Hero";
import NavBar from "../component/NavBar";
import Nemo from "../component/Nemo";
import Products from "../component/Products";
import Sed from "../component/Sed";

function HomePage() {
  return (
    <div className="home">
      <header>
        <NavBar />
      </header>
      <main>
        <Hero />
        <Products />
        <Brand />
        <CollectionSection />
        <Banner />
        <Sed />
        <Nemo />
        <Futured />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default HomePage;
