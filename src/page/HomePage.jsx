import Hero from "../component/Hero";
import NavBar from "../component/NavBar";

function HomePage() {
  return (
    <div className="home">
      <header>
        <NavBar />
      </header>
      <main>
        <Hero />
      </main>
    </div>
  );
}

export default HomePage;
