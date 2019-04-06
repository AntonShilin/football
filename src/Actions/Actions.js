import {  GET_NEWS } from "../Actions/ActionsTypes";



export function fetchDataSuccess(value) {
  return {
    type: GET_NEWS,
    payload: value
  };
}

export function fetchData(url) {
  return dispatch => {
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response;
      })
      .then(response => response.json())
      .then(result => dispatch(fetchDataSuccess(result)))
      .catch(function(err) {
        throw new Error(err);
      });
  };
}
