import "./App.css";
import BreakfastList from "./components/BreakfastList";

function App() {
  const name = "Cheetahs";

  return (
    <div>
      <h1>{name} Breakfast App</h1>
      <BreakfastList />
    </div>
  );
}

export default App;
