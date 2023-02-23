import {
    BrowserRouter as Router,
    Switch,
    Route,
    
  } from "react-router-dom";
  
import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Navigation from "./components/Navigation";
import Services from './pages/Services';
import Portfolio from "./pages/Portfolio";
import Careers from './pages/Careers';
import Contact from './components/Contact';
import Career from './components/Career';
import ServiceDetails from './components/ServiceDetails';
import ScrollToTop from "./components/ScrollToTop";
import Scroll from "./components/Scroll";
import Talent from './components/Talent';
import Resume from "./components/Resume";
import Technology from "./components/Technology";
import Toggle from "./components/Toggle";
//import Sliderbar from "./components/Sliderbar";






const App = () => {

    return (
        
           <Router>
                    
                    <Navigation/>
                    <Scroll/>
                <Switch>

                    <Route path="/" component={Home} exact></Route>
                    <Route path="/about" component={About}></Route>
                    <Route path="/Services" exact component={Services}></Route>
                    <Route path="/Careers"component={Careers}></Route>
                    <Route path="/Portfolio"component={Portfolio}></Route>
                    <Route path="/Contact"component={Contact}></Route>
                    <Route path="/Career"component={Career}></Route>
                    <Route path="/ServiceDetails"component={ServiceDetails}></Route>
                    <Route path="/Talent"component={Talent}></Route>
                    {/* <Route path="/Sliderbar"component={Sliderbar}></Route> */}
                    <Route path="/Resume"component={Resume}></Route>
                    <Route path="/Technology"component={Technology}></Route>
                    <Route path="/Toggle"component={Toggle}></Route>
                 
                                        
                </Switch>
                <ScrollToTop />
              
            </Router>
        

    ) 

}

export default App;