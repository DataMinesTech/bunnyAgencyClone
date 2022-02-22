import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import OurModels from "./components/OurModels/OurModels";
import NotFound from "./components/NotFound/NotFound";
import AboutUs from "./components/AboutUs/AboutUs";
import Jobs from "./components/Jobs/Jobs";
import AccountManager from "./components/Jobs/AccountManager";
import NSFWChatterOnlyFans from "./components/Jobs/NSFWChatterOnlyFans";
import RedditMarketer from "./components/Jobs/RedditMarketer";
import NSFWRedditManager from "./components/Jobs/NSFWRedditManager";
import TinderAssistant from "./components/Jobs/TinderAssistant";
import Apply from "./components/Apply/Apply";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/models" component={OurModels} />
        <Route exact path="/about-us" component={AboutUs} />
        <Route exact path="/apply-now" component={Apply} />
        <Route exact path="/jobs" component={Jobs} />
        <Route exact path="/job/accountmanager" component={AccountManager} />
        <Route
          exact
          path="/job/chatter-only-fans"
          component={NSFWChatterOnlyFans}
        />
        <Route exact path="/job/reddit-manager" component={NSFWRedditManager} />
        <Route exact path="/job/tinder-assistant" component={TinderAssistant} />
        <Route exact path="/job/reddit-marketer" component={RedditMarketer} />
        <Route component={NotFound} />
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
