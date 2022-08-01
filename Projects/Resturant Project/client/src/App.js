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
import HomeScreen from "./screens/homeScreen/HomeScreen";




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
          <Route path="/" >
            <HomeScreen />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
