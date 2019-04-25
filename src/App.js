import React, { Component } from "react";
import { Route, NavLink, Switch } from "react-router-dom";
import "./App.scss";
import Allchampionat from "./Components/Allchampionat/Allchampionat";
import England from "./Components/England/England";
import Italy from "./Components/Italy/Italy";
import Technology from "./Components/Technology/Technology";
import Health from "./Components/Health/Health";
import Science from "./Components/Science/Science";
import Sports from "./Components/Sports/Sports";
import ShowMoreThisInfo from "./Components/ShowMoreThisInfo/ShowMoreThisInfo";

class App extends Component {
  render() {
    let day = new Date().toString().match(/\w\w\w\s\d\d\s\d\d\d\d\s/);
    return (
      <React.Fragment>
        <div className="container-fluid p-3 m-0 bg-success">
          <h1 className="text-center text-white">Goool</h1>
        </div>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark mb-4 border-top sticky-top">
          {/* Brand */}
          <div className="navbar-nav">
            <span className="nav-item font-weight-bold text-warning">{day[0]}</span>
          </div>

          {/*  <!-- Toggler/collapsibe Button --> */}
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon" />
          </button>

          {/*  -- Navbar links -- */}
          <div
            className="collapse navbar-collapse justify-content-center"
            id="collapsibleNavbar"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" exact to="/">
                Results
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/england">
                England
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/italy">
                Italy
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/technology">
                  Technology
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/health">
                  Health
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/science">
                  Science
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/sport">
                  Sports
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>

      

        {/* Rounting */}

        <Switch>
          <Route path="/" exact render={() => <Allchampionat />} />
          <Route path="/england" render={() => <England />} />
          <Route path="/italy" render={() => <Italy />} />
          <Route path="/technology" render={() => <Technology />} />
          <Route path="/health" render={() => <Health />} />
          <Route path="/science" render={() => <Science />} />
          <Route path="/sport" render={() => <Sports />} />
          <Route path="/:name" render={() => <ShowMoreThisInfo />} />

          {/* <Redirect to={"/"} /> */}
          
          
        </Switch>
        <footer className="bg-success mt-5">
          <p className="m-0 text-white text-center p-3">Made by Goool</p>
      </footer>
      </React.Fragment>
    );
  }
}

export default App;
