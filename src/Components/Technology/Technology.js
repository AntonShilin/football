import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { fetchDataTechnologyNews,moreInfoTechnology } from "../../Actions/Actions";

class Technology extends Component {
  componentDidMount() {
    this.props.getData(
      "https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=74498e6f023d4358a296a9351a1ea043"
    );
  }

  render() {

    return (
      <div className="container">
        <div className="row">
          <div className="col">
            {this.props.data.technology === null ? (
              <div className="mt-5" style={{'transform':'translate(0px,190px)'}}>
                <div className="d-block mx-auto spinner-grow text-danger" />
                <p className="text-center">Loading ...</p>
              </div>
            ) : (
              this.props.data.technology.articles.map((elem, i) => (
                <div
                onClick={() => this.props.showMoreInfo(this.props.url,elem,i)}
                  className="article border-top border-bottom mt-3 p-3"
                  key={i}
                >
                  <div className="text-center">
                    <h3>{elem.title}</h3>
                  </div>
                  <div className="mb-3 small">
                    <img
                      src={elem.urlToImage ? elem.urlToImage : ""}
                      className="img-fluid mt-3 mb-2"
                      alt={`img ${i}`}
                    />
                    <p className="mb-0">{elem.description}</p>
                  </div>
                  <div className="text-left small blockquote-footer">{`${
                    elem.author ? elem.author : ""
                  } from ${elem.source.name ? elem.source.name : ""}`}</div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state,url) {
  return {
    data: state.alldata,
    url:url
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getData: url => dispatch(fetchDataTechnologyNews(url)),
    showMoreInfo: (value,name,num) => dispatch(moreInfoTechnology(value,name,num))
  };
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Technology));
