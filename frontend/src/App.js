import logo1 from './images/EssentialBrandsLogo.png';
import logo2 from './images/ForbiddenGardenLogo.png';
import logo3 from './images/PureOrganticLogo.png';
import logo4 from './images/highProfile.png';
import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Home from "./components/Home";
import About from './components/About';
import Products from './components/Products';
import Learn from './components/Learn';
import Contact from './components/ContactUs';
function App() {
  return (
    <Router>
      <div className="App">
        <div className="Header">
          <div className="Logos">
            <Link to="/">
              <img className="EssentialBrandsLogo" src={logo1} alt='Essential Brands Logo'/>
            </Link>
            <div className="OtherLogos">
              <img className="ForbiddenGardenLogo" src={logo2} alt='Forbidden Garden Logo'/>
              <img className="PureOrganticLogo" src={logo3} alt='Pure Organtic Logo'/>
              <img className="HighProfileLogo" src={logo4} alt='High Profile Logo' />
            </div>
          </div>
          <div className="navbar">
            <Link to="/"><button className="nav-button">HOME</button></Link>
            <Link to="/products"><button className="nav-button">PRODUCTS</button></Link>
            <Link to="/about"><button className="nav-button">ABOUT</button></Link>
            <Link to="/learn"><button className="nav-button">LEARN</button></Link>
            <Link to="/contact"><button className="nav-button">CONTACT</button></Link>
          </div>
        </div>
        <div className="content">
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/products">
              <Products />
            </Route>
            <Route path="/learn">
              <Learn />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
