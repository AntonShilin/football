import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchData } from "./Actions/Actions";

class App extends Component {
  componentWillMount() {
    this.props.getData(
      "https://newsapi.org/v2/everything?domains=wsj.com,nytimes.com&apiKey=74498e6f023d4358a296a9351a1ea043"
    );
  }

  render() {
    console.log("Components", this.props.data[0]);
    return (
      <React.Fragment>
        <div className="jumbotron">
          <h1>Everyday News</h1>
        </div>
        <div className="container">
          <div className="row">
            <div className="col">Сюда буду выводить полученные данные</div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.alldata
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getData: url => dispatch(fetchData(url))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
