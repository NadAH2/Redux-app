import "./App.css";

import Add from "./components/Add";
import "./App.css";
import List from "./components/List";
import Edit from "./components/Edit";
function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div
            className="col-md-6 offset-md-3  text-dark mt-5 p-3 shadow"
            style={{ backgroundColor: "Purple" }}
          >
            <h1 className="text-center mb-3" style={{ color: "white" }}>
              TODO List
            </h1>
            <div>
              <Add />
              <List />

              <Edit />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
/**/
