import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import MidContainer from "./components/MidContainer/MidContainer";
import TopContainer from "./components/TopContainer/TopContainer";
import Home from "./components/Home/Home";
import OurModels from "./components/OurModels/OurModels";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/models" component={OurModels} />
        {/* <Route exact path="/" component={PatientDischarge} /> */}
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
