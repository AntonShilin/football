import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {
  fetchDataTopNews,
  moreInfo,
  analysisTotal
} from "../../Actions/Actions";
import "../Allchampionat/Allchampionat.scss";

class Allchampionat extends Component {
  componentDidMount() {
    this.props.getData("https://www.scorebat.com/video-api/v1/");
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            {this.props.data.allchampionat === null ? (
              <div
                style={{ transform: "translate(0px,190px)" }}
                className="mt-5"
              >
                <div className="spinner-border text-success d-block mx-auto" />
                <p className="text-center mt-2 text-uppercase">
                  Find games ...
                </p>
              </div>
            ) : (
              this.props.data.allchampionat.map((elem, i) => (
                <div
                  className="article border mt-3 p-3 rounded bg-success w-75 d-block mx-auto"
                  key={i}
                >
                  <div className="text-center">
                    <p className="small text-white">{elem.competition.name}</p>
                    <hr className="border-white" />
                    <h5 className="text-uppercase font-weight-bold">
                      {elem.title}
                    </h5>
                    <h4>
                      <span className="badge badge-pill badge-danger">
                        {this.props.showResult(elem.videos)}
                      </span>
                    </h4>
                    <div
                      className="result_block"
                      data-league={elem.competition.name}
                      data-match={elem.title}
                    >
                      {elem.videos.map((player, i) =>
                        player.title === "Highlights" ? (
                          ""
                        ) : (
                          <h5 key={i} className="mb-1 text-left  pl-3">
                            <span className="font-weight-bold badge badge-pill badge-light">
                              {player.title}
                            </span>
                            <span
                              className="ml-3"
                              data-toggle="tooltip"
                              data-placement="right"
                              title="Watch goal"
                            >
                              <i
                                className="far fa-play-circle"
                                onClick={event =>
                                  this.props.showVideo(event.target, this.props.url)
                                }
                              />
                            </span>
                          </h5>
                        )
                      )}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, url) {
  return {
    data: state.alldata,
    url: url
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getData: url => dispatch(fetchDataTopNews(url)),
    showVideo: (value,url) => dispatch(moreInfo(value,url)),
    showResult: value => dispatch(analysisTotal(value))
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Allchampionat)
);
