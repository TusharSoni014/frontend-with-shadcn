import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import History from "./components/History/History";
import Mountains from "./components/Mountains/Mountains";
import StickyNav from "./components/StickyNav";

function App() {
  return (
    <div className="relative">
      <Header />
      <Hero />
      <StickyNav />
      <History />
      <Mountains />
      <Footer/>
    </div>
  );
}

export default App;
