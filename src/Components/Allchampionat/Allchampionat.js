import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { fetchDataTopNews,moreInfo } from "../../Actions/Actions";
import "../Allchampionat/Allchampionat.scss";

class Allchampionat extends Component {
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
            {this.props.data.allchampionat === null ? (
              <div
                style={{ transform: "translate(0px,190px)" }}
                className="mt-5"
              >
                <div className="d-block mx-auto spinner-grow text-danger" />
                <p className="text-center">Loading ...</p>
              </div>
            ) : (
              this.props.data.allchampionat.map((elem, i) => (
                <div
                  onClick={() =>
                    this.props.showMoreInfo(this.props.url, elem, i)
                  }
                  className="article border mt-3 p-3"
                  key={i}
                >
                  <div className="text-center">
                    <h5>{elem.competition.name}</h5>
                    <hr></hr>
                    <h5>{elem.title}</h5>
                    <h5>
                      {elem.videos[1]
                        ? elem.videos[1].title.match(/\d-\d/)
                        : "0 - 0"}
                    </h5>
                    <div>
                      {elem.videos.map((player, i) =>
                        player.title === "Highlights" ? (
                          ""
                        ) : (
                          <p key={i} className='mb-1 text-left'>{player.title}</p>
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

function mapStateToProps(state,url) {
  return {
    data: state.alldata,
    url: url
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getData: url => dispatch(fetchDataTopNews(url)),
    showMoreInfo: (value, name,num) => dispatch(moreInfo(value,name,num))

  };
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Allchampionat));
