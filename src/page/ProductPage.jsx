import Cream from "../component/Cream";
import Ingredients from "../component/Ingredients";
import LikeTop from "../component/LikeTop";
import Results from "../component/Results";

function ProductPage() {
  return (
    <div>
      {/* <NavBar /> */}
      <Cream />
      <Ingredients />
      <LikeTop />
      <Results />
    </div>
  );
}

export default ProductPage;
