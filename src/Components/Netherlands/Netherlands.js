import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  fetchDataNetherlands,
  moreInfoNetherlands,
  analysisTotal
} from "../../Actions/Actions";

class Netherlands extends Component {
  componentDidMount() {
    this.props.getData("https://www.scorebat.com/video-api/v1/");
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            {this.props.data.netherlands === null ? (
              <div
                style={{ transform: "translate(0px,190px)" }}
                className="mt-5"
              >
                <div className="spinner-border text-success d-block mx-auto" />
                <p className="text-center uppercase mt-2 text-uppercase">
                  Find matches ...
                </p>
              </div>
            ) : (
              this.props.data.netherlands.map((elem, i) =>
                elem.competition.name.search(/NETHERLANDS/) === 0 ? (
                  <div
                  className="article border mt-3 p-3 rounded bg-success"
                  key={i}
                >
                  <div className="text-center">
                    <p className="small text-white">
                      {elem.competition.name}
                    </p>
                    <hr className="border-white" />
                    <h4 className="">
                      <span className="text-uppercase font-weight-bold text-break">
                        {elem.title}
                      </span>
                    </h4>
                    <h4>
                      <span className="badge badge-pill badge-danger">
                        {this.props.showResult(elem.videos)}
                      </span>
                    </h4>
                    <div
                      className="result_block"
                      data-league={elem.competition.name}
                      data-match={elem.title}
                      data-country='netherlands'
                    >
                      {elem.videos.map((player, i) =>
                        player.title.search(
                          /Highlights|Alternative|Extended|Official|Title|Celebrations/
                        ) === 0  ? (
                          ""
                        ) : (
                          <p
                            key={i}
                            className="mb-2 d-flex justify-content-between pl-3 bg-white"
                          >
                            <span className="font-weight-bold text-break">
                              {player.title}
                              <i className="fas fa-futbol ml-2" />
                            </span>
                            <span
                              className="mr-3"
                              data-toggle="tooltip"
                              data-placement="right"
                              title="Watch goal"
                            >
                              <i
                                style={{ fontSize: "1.2rem" }}
                                className="far fa-play-circle text-primary"
                                onClick={event =>
                                  this.props.showVideo(
                                    event.target,
                                    this.props.url
                                  )
                                }
                              />
                            </span>
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

function mapStateToProps(state, url) {
  return {
    data: state.alldata,
    url: url
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getData: url => dispatch(fetchDataNetherlands(url)),
    showVideo: (value, url) => dispatch(moreInfoNetherlands(value, url)),
    showResult: value => dispatch(analysisTotal(value))
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Netherlands)
);
