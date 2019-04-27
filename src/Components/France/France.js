import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  fetchDataScienceNews,
  moreInfoScience,
  analysisTotal
} from "../../Actions/Actions";

class France extends Component {
  componentDidMount() {
    this.props.getData("https://www.scorebat.com/video-api/v1/");
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            {this.props.data.france === null ? (
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
              this.props.data.france.map((elem, i) =>
                elem.competition.name.search(/FRANCE/) === 0 ? (
                  <div
                    onClick={() =>
                      this.props.showMoreInfo(this.props.url, elem, i)
                    }
                    className="article border mt-3 p-3 bg-success rounded"
                    key={i}
                  >
                    <div className="text-center">
                      <p className="small text-white">
                        {elem.competition.name}
                      </p>
                      <hr className="border-white" />
                      <h5 className="text-uppercase font-weight-bold">{elem.title}</h5>
                      <h4>
                        <span className="badge badge-pill badge-danger">
                          {this.props.showResult(elem.videos)}
                        </span>
                      </h4>
                      <div className="result_block">
                        {elem.videos.map((player, i) =>
                          player.title === "Highlights" ? (
                            ""
                          ) : (
                            <h5 key={i} className="mb-1 text-left  pl-3">
                              <span className="font-weight-bold badge badge-pill badge-light">
                                {player.title}
                              </span>
                            </h5>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                ) : (
                  " "
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
    getData: url => dispatch(fetchDataScienceNews(url)),
    showMoreInfo: (value, name, num) =>
      dispatch(moreInfoScience(value, name, num)),
    showResult: value => dispatch(analysisTotal(value))
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(France)
);
