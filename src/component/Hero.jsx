import "../style/hero.css";

function Hero({ className, text, title, reverse = false }) {
  return (
    <section className={`hero ${className}`}>
      <div className="hero__wrapper">
        {reverse ? (
          <>
            <h2>{title}</h2>
            <h5>{text}</h5>
          </>
        ) : (
          <>
            <h5>{text}</h5>
            <h2>{title}</h2>
          </>
        )}

        <button>SHOP NOW</button>
      </div>
    </section>
  );
}

export default Hero;
