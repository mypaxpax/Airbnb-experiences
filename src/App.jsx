import Nav from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import "./index.css";

function App() {
  return (
    <div>
      <Nav />
      <Hero />
      <Card
        image="katie-zaferes.png"
        imageStar="star.png"
        rating="5.0"
        numOfRatings="(6) "
        country="USA"
        title="Life lessons with Katie Zaferes"
        price="$135"
      />
    </div>
  );
}

export default App;
