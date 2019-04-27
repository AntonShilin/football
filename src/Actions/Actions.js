import {
  GET_NEWS,
  GET_BUSINESS_NEWS,
  GET_ENTERTAINMENT_NEWS,
  GET_TECHNOLOGY_NEWS,
  GET_HEALTH_NEWS,
  GET_SCIENCE_NEWS,
  GET_SPORT_NEWS,
  GET_MORE_NEWS,
  GET_MORE_BUSINESS_NEWS,
  GET_MORE_ENTERTAINMENT_NEWS,
  GET_MORE_TECHNOLOGY_NEWS,
  GET_MORE_HEALTH_NEWS,
  GET_MORE_SCIENCE_NEWS,
  GET_MORE_SPORT_NEWS
} from "../Actions/ActionsTypes";

export function fetchDataTopNews(url) {
  return dispatch => {
    setTimeout(() => {
      fetch(url)
        .then(response => {
          if (!response.ok) {
            throw new Error(response.statusText);
          }
          return response;
        })
        .then(response => response.json())
        .then(result => dispatch({ type: GET_NEWS, payload: result }))
        .catch(function(err) {
          throw new Error(err);
        });
    }, 2000);
  };
}

export function fetchDataBusinessNews(url) {
  return dispatch => {
    setTimeout(() => {
      fetch(url)
        .then(response => {
          if (!response.ok) {
            throw new Error(response.statusText);
          }
          return response;
        })
        .then(response => response.json())
        .then(result => dispatch({ type: GET_BUSINESS_NEWS, payload: result }))
        .catch(function(err) {
          throw new Error(err);
        });
    }, 2000);
  };
}

export function fetchDataEntertainmentNews(url) {
  return dispatch => {
    setTimeout(() => {
      fetch(url)
        .then(response => {
          if (!response.ok) {
            throw new Error(response.statusText);
          }
          return response;
        })
        .then(response => response.json())
        .then(result =>
          dispatch({ type: GET_ENTERTAINMENT_NEWS, payload: result })
        )
        .catch(function(err) {
          throw new Error(err);
        });
    }, 2000);
  };
}

export function fetchDataTechnologyNews(url) {
  return dispatch => {
    setTimeout(() => {
      fetch(url)
        .then(response => {
          if (!response.ok) {
            throw new Error(response.statusText);
          }
          return response;
        })
        .then(response => response.json())
        .then(result =>
          dispatch({ type: GET_TECHNOLOGY_NEWS, payload: result })
        )
        .catch(function(err) {
          throw new Error(err);
        });
    }, 2000);
  };
}

export function fetchDataHealthNews(url) {
  return dispatch => {
    setTimeout(() => {
      fetch(url)
        .then(response => {
          if (!response.ok) {
            throw new Error(response.statusText);
          }
          return response;
        })
        .then(response => response.json())
        .then(result => dispatch({ type: GET_HEALTH_NEWS, payload: result }))
        .catch(function(err) {
          throw new Error(err);
        });
    }, 2000);
  };
}

export function fetchDataScienceNews(url) {
  return dispatch => {
    setTimeout(() => {
      fetch(url)
        .then(response => {
          if (!response.ok) {
            throw new Error(response.statusText);
          }
          return response;
        })
        .then(response => response.json())
        .then(result => dispatch({ type: GET_SCIENCE_NEWS, payload: result }))
        .catch(function(err) {
          throw new Error(err);
        });
    }, 2000);
  };
}

export function fetchDataSportNews(url) {
  return dispatch => {
    setTimeout(() => {
      fetch(url)
        .then(response => {
          if (!response.ok) {
            throw new Error(response.statusText);
          }
          return response;
        })
        .then(response => response.json())
        .then(result => dispatch({ type: GET_SPORT_NEWS, payload: result }))
        .catch(function(err) {
          throw new Error(err);
        });
    }, 2000);
  };
}

export function moreInfo(value, name, num) {
  return { type: GET_MORE_NEWS, payload: value, namearticle: name, index: num };
}

export function moreInfoBusiness(value, name, num) {
  return {
    type: GET_MORE_BUSINESS_NEWS,
    payload: value,
    namearticle: name,
    index: num
  };
}

export function moreInfoEntertainment(value, name, num) {
  return {
    type: GET_MORE_ENTERTAINMENT_NEWS,
    payload: value,
    namearticle: name,
    index: num
  };
}

export function moreInfoTechnology(value, name, num) {
  return {
    type: GET_MORE_TECHNOLOGY_NEWS,
    payload: value,
    namearticle: name,
    index: num
  };
}

export function moreInfoHealth(value, name, num) {
  return {
    type: GET_MORE_HEALTH_NEWS,
    payload: value,
    namearticle: name,
    index: num
  };
}

export function moreInfoScience(value, name, num) {
  return {
    type: GET_MORE_SCIENCE_NEWS,
    payload: value,
    namearticle: name,
    index: num
  };
}

export function moreInfoSport(value, name, num) {
  return {
    type: GET_MORE_SPORT_NEWS,
    payload: value,
    namearticle: name,
    index: num
  };
}

/* обработка результата матча */
export function analysisTotal(elem) {
  return dispatch => {
    if (elem[0].title.search(/\d-\d/) === -1) {
      if ((elem[1] === undefined) === false) {
        return elem[1].title.match(/\d-\d/)[0];
      } else {
        return "0-0";
      }
    } else {
      return elem[0].title.match(/\d-\d/)[0];
    }
  };
}
