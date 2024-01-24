import "./App.css";
import ArrowApp from "./containers/arrowApp/ArrowApp";
import CounterApp from "./containers/counterApp/CounterApp";
import SimpleCalculator from "./containers/counterApp/simpleCalculator/SimpleCalculator";

function App() {
  return (
    <div className="App">
      {/* <CounterApp /> */}
      <SimpleCalculator />
    </div>
  );
}

export default App;
