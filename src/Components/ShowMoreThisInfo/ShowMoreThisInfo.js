import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class ShowMoreThisInfo extends Component {
  render() {
    let index = null;
    let section = null;

    if (window.location.pathname.search(/\d[%]\d\d\w+/) === 1) {
      index = this.props.url.match.params.name.match(/\d/)[0];
      section = this.props.url.match.params.name.match(/\s\w+/)[0];
    } else {
      index = 0;
      section = "topheadline";
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col">
            {Object.keys(this.props.data).map((elem, i) =>
              // console.log(elem.trim()===section.trim())

              this.props.data[elem] !== null &&
              elem.trim() === section.trim() ? (
                <div
                  className="article border-top border-bottom mt-3 mb-3 p-3"
                  key={i}
                >
                  <div className="text-left">
                    <h3>{this.props.data[elem].articles[index].title}</h3>
                  </div>
                  <div className="mb-3 small">
                    <img
                      src={
                        this.props.data[elem].articles[index].urlToImage
                          ? this.props.data[elem].articles[index].urlToImage
                          : ""
                      }
                      className="img-fluid mt-3 mb-2"
                      alt={`img ${i}`}
                    />
                    <p className="mb-0 small text-center">
                      "{this.props.data[elem].articles[index].description}"
                    </p>
                  </div>
                  <p className="mt-3 text-break" style={{ textIndent: "2em" }}>
                    {this.props.data[elem].articles[index].content}
                    {` `}
                    <a
                      href={this.props.data[elem].articles[index].url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-danger"
                    >{` Read more ...`}</a>
                  </p>
                </div>
              ) : null
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

export default withRouter(connect(mapStateToProps)(ShowMoreThisInfo));
