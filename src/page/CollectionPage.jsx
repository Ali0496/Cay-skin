import BestSeller from "../component/BestSeller";
import Hero from "../component/Hero";
import "../style/collection__page.css";

function CollectionPage() {
  return (
    <div className="collection__page">
      <main>
        <Hero
          className="collection__hero"
          title="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum"
          text="Lorem ipsum  "
          reverse={true}
        />
        <BestSeller />
      </main>
    </div>
  );
}

export default CollectionPage;
