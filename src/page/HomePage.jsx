import Brand from "../component/Brand";
import Hero from "../component/Hero";
import NavBar from "../component/NavBar";
import Products from "../component/Products";

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
      </main>
    </div>
  );
}

export default HomePage;
