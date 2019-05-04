import {
  GET_ALLCHAMPIONAT,
  GET_ENGLAND_NEWS,
  GET_ITALY_NEWS,
  GET_SPAIN_NEWS,
  GET_GERMANY_NEWS,
  GET_FRANCE_NEWS,
  GET_NETHERLANDS_NEWS,
  GET_MORE_ALLMATCHES,
  GET_MORE_ENGLAND,
  GET_MORE_ITALY,
  GET_MORE_SPAIN,
  GET_MORE_GERMANY,
  GET_MORE_FRANCE,
  GET_MORE_NETHERLANDS
} from "../Actions/ActionsTypes";

export function fetchDataAll(url) {
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
        .then(result => dispatch({ type: GET_ALLCHAMPIONAT, payload: result }))
        .catch(function(err) {
          throw new Error(err);
        });
    }, 2000);
  };
}

export function fetchDataEngland(url) {
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
        .then(result => dispatch({ type: GET_ENGLAND_NEWS, payload: result }))
        .catch(function(err) {
          throw new Error(err);
        });
    }, 2000);
  };
}

export function fetchDataItaly(url) {
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
          dispatch({ type: GET_ITALY_NEWS, payload: result })
        )
        .catch(function(err) {
          throw new Error(err);
        });
    }, 2000);
  };
}

export function fetchDataSpain(url) {
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
          dispatch({ type: GET_SPAIN_NEWS, payload: result })
        )
        .catch(function(err) {
          throw new Error(err);
        });
    }, 2000);
  };
}

export function fetchDataGermany(url) {
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
        .then(result => dispatch({ type: GET_GERMANY_NEWS, payload: result }))
        .catch(function(err) {
          throw new Error(err);
        });
    }, 2000);
  };
}

export function fetchDataFrance(url) {
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
        .then(result => dispatch({ type: GET_FRANCE_NEWS, payload: result }))
        .catch(function(err) {
          throw new Error(err);
        });
    }, 2000);
  };
}

export function fetchDataNetherlands(url) {
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
        .then(result => dispatch({ type: GET_NETHERLANDS_NEWS, payload: result }))
        .catch(function(err) {
          throw new Error(err);
        });
    }, 2000);
  };
}

export function moreInfo(value, url) {
  return { type: GET_MORE_ALLMATCHES, payload: value, wichcountry: value, url: url };
}

export function moreInfoEngland(value, url) {
  return {
    type: GET_MORE_ENGLAND,
    payload: value,
    wichcountry: value,
    url: url
  };
}

export function moreInfoItaly(value, url) {
  return {
    type: GET_MORE_ITALY,
    payload: value,
    wichcountry: value,
    url: url
  };
}

export function moreInfoSpain(value, url) {
  return {
    type: GET_MORE_SPAIN,
    payload: value,
    wichcountry: value,
    url: url
  };
}

export function moreInfoGermany(value, url) {
  return {
    type: GET_MORE_GERMANY,
    payload: value,
    wichcountry: value,
    url: url
  };
}

export function moreInfoFrance(value, url) {
  return {
    type: GET_MORE_FRANCE,
    payload: value,
    wichcountry: value,
    url: url
  };
}

export function moreInfoNetherlands(value, url) {
  return {
    type: GET_MORE_NETHERLANDS,
    payload: value,
    wichcountry: value,
    url: url
  };
}

/* обработка результата матча */
export function analysisTotal(elem) {
  return dispatch => {
    if (elem[0].title.search(/\d-\d/) === -1) {
      if (elem[1] === undefined) {
        return "0-0";
      } else {
        let x = elem[1].title.match(/\d-\d/);
        return x;
      }
    } else {
      let y = elem[0].title.match(/\d-\d/);
      return y;
    }
  };
}
