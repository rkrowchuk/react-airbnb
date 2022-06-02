import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Card from './Components/Card';
import katie from './images/katie-zaferes.png';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Card 
        img={katie}
        rating="5.0"
        reviewCount="6"
        country="USA"
        title="Life Lessons with Katie Zaferes"
        price="136"
      />
    </div>
  );
}

export default App;
