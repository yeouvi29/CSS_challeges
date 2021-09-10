import Textarea from "./components/Textarea";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h3>
        Enter all of the choices divided by a comma (",") <br />
        Press enter when you're done
      </h3>
      <Textarea />
    </div>
  );
}

export default App;
