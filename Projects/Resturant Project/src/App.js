import "./App.css";
import NavBar from "./component/navBar/NavBar";
import About from "./staticPages/About";
import Contact from "./staticPages/Contact";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Terms from "./staticPages/Terms";




function App() {
  return (
    <>
      <Router>
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
