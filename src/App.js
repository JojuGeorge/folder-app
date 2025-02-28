import "./App.css";
import FileExplorer from "./components/FileExplorer";
import { explorer } from "./data/FileStructure";

function App() {
  return (
    <div className="App">
      <FileExplorer explorer={explorer} />
    </div>
  );
}

export default App;
