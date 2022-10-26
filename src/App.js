import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Mint from "./components/Mint";
import Mission from "./components/Mission";
import TopSeller from "./components/Top-Seller";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/mint">
            <Mint />
          </Route>
          <Route exact path="/mission">
            <Mission />
          </Route>
          <Route exact path="/top-seller">
            <TopSeller />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
