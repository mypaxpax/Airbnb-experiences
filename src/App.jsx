import Nav from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data.js";
import "./index.css";

function App() {
  const cards = data.map(function (item) {
    return (
      <Card
        key={item.id}
        image={item.coverImg}
        rating={item.stats.rating}
        numOfRatings={item.stats.reviewCount}
        location={item.location}
        title={item.title}
        price={item.price}
      />
    );
  });
  return (
    <div>
      <Nav />
      <Hero />
      {cards}
    </div>
  );
}

export default App;
