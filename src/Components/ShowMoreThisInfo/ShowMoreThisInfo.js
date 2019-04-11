import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class ShowMoreThisInfo extends Component {
  render() {
    console.log("ShowMoreThisInfo", this.props.url);
    console.log("ShowMoreThisInfo", this.props.data);
    let index = null;
    index = this.props.url.match.params.name.match(/\d/)[0];
    let section = null;
    section = this.props.url.match.params.name.match(/\s\w+/)[0];
    console.log("Index", index);
    console.log("RegExp", section);
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            {Object.keys(this.props.data).map((elem, i) =>
             // console.log(elem.trim()===section.trim())
            
              this.props.data[elem] !== null && elem.trim()===section.trim() ? (
                <div
                  className="article border-top border-bottom mt-3 p-3"
                  key={i}
                >
                  <div className="text-center">
                    <h3>{this.props.data[elem].articles[index].title}</h3>
                  </div>
                </div>
              ) : " 1 "
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
