import "./App.css";
import TopBar from "./component/topBar/TopBar";
import About from "./staticPages/About";
import Contact from "./staticPages/Contact";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Terms from "./staticPages/Terms";
import NavBar from "./component/navBar/NavBar";




function App() {
  return (
    <>
      <Router>
        <TopBar />
        <NavBar />
        <Switch>
          <Route path="/about" >
            <About />
          </Route>
          <Route path="/contact" >
            <Contact />
          </Route>
          <Route path="/terms and conditions" >
            <Terms />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
