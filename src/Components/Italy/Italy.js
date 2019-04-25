import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  fetchDataEntertainmentNews,
  moreInfoEntertainment
} from "../../Actions/Actions";

class Italy extends Component {
  componentDidMount() {
    this.props.getData(
      "https://www.scorebat.com/video-api/v1/"
    );
  }

  render() {

    return (
      <div className="container">
        <div className="row">
          <div className="col">
            {this.props.data.italy === null ? (
              <div
                style={{ transform: "translate(0px,190px)" }}
                className="mt-5"
              >
                <div className="spinner-border text-success d-block mx-auto" />
                <p className="text-center uppercase mt-2 text-uppercase">
                  Loading ...
                </p>
              </div>
            ) : (
              this.props.data.italy.map((elem, i) =>
                elem.competition.name.search(/ITALY/) === 0 ? (
                  <div
                    onClick={() =>
                      this.props.showMoreInfo(this.props.url, elem, i)
                    }
                    className="article border mt-3 p-3 bg-success"
                    key={i}
                  >
                    <div className="text-center">
                      <h5 className='text-white'>{elem.competition.name}</h5>
                      <hr className="border-white" />
                      <h3>{elem.title}</h3>
                      <h4>
                        {elem.videos[1] ? (
                          <span className="badge badge-danger">
                            {elem.videos[1].title.match(/\d-\d/)}
                          </span>
                        ) : (
                          <span className="badge badge-danger">0 - 0</span>
                        )}
                      </h4>
                      <div>
                        {elem.videos.map((player, i) =>
                          player.title === "Highlights" ? (
                            ""
                          ) : (
                            <p key={i} className="mb-1 text-left bg-warning text-dark pl-3">
                              <span className='font-weight-bold'>{player.title}</span>
                            </p>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )
              )
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
    getData: url => dispatch(fetchDataEntertainmentNews(url)),
    showMoreInfo: (value,name,num) => dispatch(moreInfoEntertainment(value,name,num))
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Italy)
);
