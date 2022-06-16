import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Card from './Components/Card';
import data from './data';

function App() {
  const cards = data.map((card) => {
    return (
      <Card 
        img={require(`../public/images/${card.coverImg}`)}
        rating={card.stats.rating}
        reviewCount={card.stats.reviewCount}
        country={card.location}
        title={card.title}
        price={card.price}
      />
    )
  })
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <ul>{cards}</ul>
    </div>
  );
}

export default App;
