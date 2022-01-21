import "./App.css";
import Header from "./Header.js";
import Home from "./Home.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Checkout from "./Checkout";

function App() {
  return (
    <Router>
      <div className="App">
        {/* Header */}
        <Header />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <div>
                {/* Home */}
                <Home />
              </div>
            }
          />
          <Route
            exact
            path="/checkout"
            element={
              <div>
                <Checkout />
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
