import logo1 from './images/EssentialBrandsLogo.png';
import logo2 from './images/ForbiddenGardenLogo.png';
import logo3 from './images/PureOrganticLogo.png';
import logo4 from './images/highProfile.png';
import logo5 from './images/terpenexpress/vector/default-monochrome.svg'
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
import Terpenes from './components/Terpenes';
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
              <img className="TerpeneXpressLogo" src={logo5} alt='Terpene Xpress Logo' />
            </div>
          </div>
          {/* TODO: ADD DROP DOWN MENUS: PRODUCTS-> FG, PO, HP, TX, LEARN -> CBD, TERPENES, ABOUT -> WHO WE ARE */}
          <div className="navbar">
            <Link to="/"><button className="nav-button">HOME</button></Link>
            <Link to="/products" className="link"><button className="nav-button">PRODUCTS</button>
              <div className="dropdown-content">
                <Link to="/products/forbiddengarden">Forbidden Gardens</Link>
                <Link to="/products/pureorgantic">Pure Organtic</Link>
                <Link to="/products/pawsitive">Pawsitive</Link>
              </div></Link>
              <Link to="/terpenes"><button className="nav-button">TERPENES</button></Link>
            <Link to="/about"><button className="nav-button">ABOUT</button></Link>
            <Link to="/learn"><button className="nav-button">LEARN</button></Link>
            <Link to="/contact"><button className="nav-button">CONTACT</button></Link>
            <Link to="/invest"><button className="nav-button">INVEST</button></Link>
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
            <Route path="/terpenes">
              <Terpenes></Terpenes>
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
