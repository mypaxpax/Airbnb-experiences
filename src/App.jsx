import Nav from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data.js";
import "./index.css";

function App() {
  const cards = data.map(function (item) {
    return <Card key={item.id} item={item} />;
  });
  return (
    <div>
      <Nav />
      <Hero />
      <section className="card-list">{cards}</section>
    </div>
  );
}

export default App;
