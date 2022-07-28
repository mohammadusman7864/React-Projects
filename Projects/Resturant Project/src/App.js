import "./App.css";
import NavBar from "./component/navBar/NavBar";
import About from "./staticPages/About";
import {BrowserRouter as Router, Switch,
  Route,} from "react-router-dom";
  


function App() {
  return (
   <>
  <Router>
   <NavBar/>
   
   </Router>
   </>
  );
}

export default App;
