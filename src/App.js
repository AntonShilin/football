import React, { Component } from "react";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";
import "./App.scss";
import Allchampionat from "./Components/Allchampionat/Allchampionat";
import England from "./Components/England/England";
import Italy from "./Components/Italy/Italy";
import Spain from "./Components/Spain/Spain";
import Germany from "./Components/Germany/Germany";
import France from "./Components/France/France";
import Netherlands from "./Components/Netherlands/Netherlands";
import ShowMoreThisInfo from "./Components/ShowMoreThisInfo/ShowMoreThisInfo";

class App extends Component {
  render() {
    let day = new Date().toString().match(/\w+\s\d\d\s\d+/);
    return (
      <React.Fragment>
        <div className="container-fluid p-3 m-0 bg-success">
          <h1 className="text-center text-white font-weight-bolder mb-0">Goool</h1>
          <p className="nav-item text-warning mb-0 text-center">
            {day[0]}
          </p>
        </div>
        <nav className="navbar navbar-expand-md bg-dark navbar-dark mb-4 border-top sticky-top">
          {/* Brand */}
          {/* <div className="navbar-nav">
            <span className="nav-item font-weight-bold text-warning">
            </span>
          </div> */}

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
                <NavLink
                  className="nav-link text-uppercase font-weight-bold"
                  exact
                  to="/"
                >
                  See all games
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link text-uppercase font-weight-bold"
                  to="/england"
                >
                  England
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link text-uppercase font-weight-bold"
                  to="/italy"
                >
                  Italy
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link text-uppercase font-weight-bold"
                  to="/spain"
                >
                  Spain
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link text-uppercase font-weight-bold"
                  to="/germany"
                >
                  Germany
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link text-uppercase font-weight-bold"
                  to="/france"
                >
                  France
                </NavLink>
              </li>
              <li className="nav-item text-uppercase font-weight-bold">
                <NavLink className="nav-link" to="/netherlands">
                  Netherlands
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
          <Route path="/spain" render={() => <Spain />} />
          <Route path="/germany" render={() => <Germany />} />
          <Route path="/france" render={() => <France />} />
          <Route path="/netherlands" render={() => <Netherlands />} />
          <Route path="/:name" render={() => <ShowMoreThisInfo />} />

          <Redirect to={"/"} />
        </Switch>
        <footer className="bg-success mt-5">
          <p className="m-0 text-white text-center p-3">Made by Goool</p>
        </footer>
      </React.Fragment>
    );
  }
}

export default App;
