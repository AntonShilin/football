import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { analysisTotal } from "../../Actions/Actions";

class ShowMoreThisInfo extends Component {
  render() {
    console.log("More", this.props.data);
    console.log("More", this.props.url);
    let searchNameGame = this.props.url.match.params.name.match(/^\w+/);
    let searchNameCountry = this.props.url.match.params.name.match(/\w+$/);
    console.log("searchNameGame", searchNameGame);
    console.log("searchNameCountry", searchNameCountry);
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            {Object.keys(this.props.data).map((match, i) =>
              match === searchNameCountry[0]
                ? this.props.data[match].map((nameVSname, i) =>
                    nameVSname.title.match(/^\w+/)[0] === searchNameGame[0] ? (
                      <React.Fragment key={i}>
                        <div className="article mt-3 p-3 rounded bg-success  d-block mx-auto">
                          <div className="text-center">
                            <p className="small text-white">
                              {nameVSname.competition.name}
                            </p>
                            <hr className="border-white" />
                            <h5 className="text-uppercase font-weight-bold">
                              {nameVSname.title}
                            </h5>
                            <h4>
                              <span className="badge badge-pill badge-danger">
                                {this.props.showResult(nameVSname.videos)}
                              </span>
                            </h4>
                            <div>
                              {nameVSname.videos.map((player, i) =>
                                player.title.search(
                                  /Highlights|Alternative|Extended|Official|Title|Celebrations/
                                ) === 0 ? (
                                  ""
                                ) : (
                                  <h5
                                    key={i}
                                    className="mb-2 d-flex justify-content-between pl-3"
                                  >
                                    <span className="font-weight-bold badge badge-pill badge-light">
                                      {player.title}
                                      <i className="fas fa-futbol ml-2" />
                                    </span>
                                  </h5>
                                )
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="videoGoal h-auto d-block mx-auto">
                          {nameVSname.videos.map((elem, i) => (
                            <div
                              key={i}
                              className="rounded-lg bg-success mt-2 p-3"
                            >
                              <div
                                dangerouslySetInnerHTML={{
                                  __html: elem.embed
                                }}
                              />
                              <h5 className="mt-3 text-left  pl-3">
                                <span className="font-weight-bold badge badge-pill badge-light">
                                  {elem.title}
                                </span>
                              </h5>
                            </div>
                          ))}
                        </div>
                      </React.Fragment>
                    ) : (
                      ""
                    )
                  )
                : ""
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
    showResult: value => dispatch(analysisTotal(value))
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ShowMoreThisInfo)
);
