import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { analysisTotal } from "../../Actions/Actions";

class ShowMoreThisInfo extends Component {
  render() {
 
    let searchNameGame = this.props.url.match.params.name.match(/^\w+/);
    let searchNameCountry = this.props.url.match.params.name.match(/\w+$/);
   
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
                                  <p
                                    key={i}
                                    className="mb-2 bg-white text-left pl-2"
                                  >
                                    <span className="font-weight-bold text-break">
                                      {player.title}
                                      <i className="fas fa-futbol ml-2" />
                                    </span>
                                  </p>
                                )
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="videoGoal h-auto d-block mx-auto">
                          {nameVSname.videos.map((elem, i) =>
                            elem.title.search(
                              /Highlights|Alternative|Extended|Official|Title|Celebrations/
                            ) === 0 ? (
                              ""
                            ) : (
                              <div
                                key={i}
                                className="rounded-lg bg-success mt-2 p-3"
                              >
                                <div
                                  dangerouslySetInnerHTML={{
                                    __html: elem.embed
                                  }}
                                />
                                <p className="mt-3 bg-white text-left">
                                  <span className="font-weight-bold text-break pl-2">
                                    {elem.title}{" "}
                                    <i className="fas fa-futbol ml-2" />
                                  </span>
                                </p>
                              </div>
                            )
                          )}
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
