import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import MidContainer from "./components/MidContainer/MidContainer";
import TopContainer from "./components/TopContainer/TopContainer";
import Home from "./components/Home/Home";
import OurModels from "./components/OurModels/OurModels";
import NotFound from "./components/NotFound/NotFound";
import AboutUs from "./components/AboutUs/AboutUs";
import Contact from "./components/Contact/Contact";
import Jobs from "./components/Jobs/Jobs";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/models" component={OurModels} />
        <Route exact path="/about-us" component={AboutUs} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/jobs" component={Jobs} />
        <Route component={NotFound} />
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
