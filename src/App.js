import React, { Component } from "react";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";
import Topheadlines from "./Components/Topheadlines/Topheadlines";
import Business from "./Components/Business/Business";
import Entertainment from "./Components/Entertainment/Entertainment";
import Technology from "./Components/Technology/Technology";
import Health from "./Components/Health/Health";
import Science from "./Components/Science/Science";
import Sports from "./Components/Sports/Sports";
import ShowMoreThisInfo from "./Components/ShowMoreThisInfo/ShowMoreThisInfo";

class App extends Component {
  render() {
    let day = new Date().toString().match(/\w\w\w\s\w\w\w\s\d\d\s\d\d\d\d\s/);
    return (
      <React.Fragment>
        <div className="jumbotron rounded-0 pl-3 pr-3 pt-3 pb-0 m-0   bg-dark">
          <h1 className="text-center text-white">Today’s Paper</h1>
          <div className="mt-3 small ">
            <span className="font-weight-bold text-white">{day[0]}</span>
          </div>
        </div>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark mb-4 border-top">
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
            <ul className="navbar-nav ">
              <li className="nav-item">
                <NavLink className="nav-link" exact to="/">
                  Top headlines
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/businessnews">
                  Business
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/entertainment">
                  Entertainment
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
          <Route path="/" exact render={() => <Topheadlines />} />
          <Route path="/businessnews" render={() => <Business />} />
          <Route path="/entertainment" render={() => <Entertainment />} />
          <Route path="/technology" render={() => <Technology />} />
          <Route path="/health" render={() => <Health />} />
          <Route path="/science" render={() => <Science />} />
          <Route path="/sport" render={() => <Sports />} />

          <Route path="/:name" render={() => <ShowMoreThisInfo />} />

          <Route
            path="/404"
            render={() => (
              <div className="container">
                <div className="row">
                  <div className="col">
                    <h1 className="text-center">404 Page is not found</h1>
                  </div>
                </div>
              </div>
            )}
          />
          <Redirect to={"/404"} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
