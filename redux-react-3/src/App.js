import "./App.css";
import CompComp from "./components/CompComp";
import LaptopComp from "./components/LaptopComp";
import PhoneComp from "./components/PhoneComp";
import WatchComp from "./components/WatchComp";

function App() {
  return (
    <div className="App">
      <h2>Clarus Shop</h2>
      <LaptopComp />
      <PhoneComp />
      <WatchComp />
      <CompComp />
    </div>
  );
}

export default App;
