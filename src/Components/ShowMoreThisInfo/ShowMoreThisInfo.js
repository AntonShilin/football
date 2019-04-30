import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { fetchDataTopNews, analysisTotal } from "../../Actions/Actions";

class ShowMoreThisInfo extends Component {
  render() {
    console.log(this.props.data);
    console.log(this.props.url);
    let searchNameGame = this.props.url.match.params.name;

    return (
      <div className="container">
        <div className="row">
          <div className="col">
            {Object.keys(this.props.data).map((match, i) =>
              this.props.data[match] !== null
                ? this.props.data[match].map((nameVSname, i) =>
                    nameVSname.title === searchNameGame ? (
                      <div
                        className="article border mt-3 p-3 rounded bg-success w-75 d-block mx-auto"
                        key={i}
                      >
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
                        </div>
                      </div>
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
    getData: url => dispatch(fetchDataTopNews(url)),
    showResult: value => dispatch(analysisTotal(value))
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ShowMoreThisInfo)
);
