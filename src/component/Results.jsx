import "../style/results.css";
import arrow from "../image/results-arrow.svg";
import results1 from "../image/result1.png";
import results2 from "../image/result2.png";
import results3 from "../image/result3.png";

function Results() {
  return (
    <section className="results">
      <div className="container">
        <div className="results__wrapper">
          <div className="results__content">
            <h4>The results</h4>
            <h2>From our customers</h2>
            <img src={arrow} alt="" />
          </div>
          <img className="resimg" src={results1} alt="" />
          <img className="resimg" src={results2} alt="" />
          <img className="resimg" src={results3} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Results;
