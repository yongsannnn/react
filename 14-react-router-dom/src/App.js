import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import ThankYou from "./pages/ThankYou"

function App() {
    return (
        <Router>
            <nav className="navbar navbar-light bg-light">
                <div className="navbar-nav">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/about-us" className="nav-link">About</Link>
                    <Link to="/contact" className="nav-link">Contact Us</Link>
                </div>
            </nav>
            <Switch>
                <div className="container">
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/about-us">
                        <About />
                    </Route>
                    <Route exact path="/contact">
                        <Contact />
                    </Route>
                    <Route exact path="/thank-you">
                        <ThankYou />
                    </Route>
                </div>
            </Switch>
        </Router>
    );
}

export default App;
