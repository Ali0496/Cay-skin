import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./component/Footer";
import NavBar from "./component/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
