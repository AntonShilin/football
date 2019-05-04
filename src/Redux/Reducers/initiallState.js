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
} from "../../Actions/ActionsTypes";

export const alldata = {
  allchampionat: null,
  england: null,
  italy: null,
  spain: null,
  germany: null,
  france: null,
  netherlands: null
};

export default function reducerForQuestion(state = alldata, action) {
  switch (action.type) {
    case GET_ALLCHAMPIONAT:
      return {
        ...state,
        allchampionat: action.payload
      };
    case GET_ENGLAND_NEWS:
      return {
        ...state,
        england: action.payload
      };
    case GET_ITALY_NEWS:
      return {
        ...state,
        italy: action.payload
      };
    case GET_SPAIN_NEWS:
      return {
        ...state,
        spain: action.payload
      };
    case GET_GERMANY_NEWS:
      return {
        ...state,
        germany: action.payload
      };

    case GET_FRANCE_NEWS:
      return {
        ...state,
        france: action.payload
      };

    case GET_NETHERLANDS_NEWS:
      return {
        ...state,
        netherlands: action.payload
      };

    case GET_MORE_ALLMATCHES:
      let allgames = action.payload.parentNode.parentNode.parentNode.getAttribute(
        "data-match"
      );
      let country = action.wichcountry.parentNode.parentNode.parentNode.getAttribute(
        "data-country"
      );
      action.url.history.push("/" + allgames + ` ` + country);
      return {
        ...state
      };

    case GET_MORE_ENGLAND:
      let engmatchname = action.payload.parentNode.parentNode.parentNode.getAttribute(
        "data-match"
      );
      let engnamecountry = action.wichcountry.parentNode.parentNode.parentNode.getAttribute(
        "data-country"
      );
      action.url.history.push("/" + engmatchname + ` ` + engnamecountry);
      return {
        ...state
      };

    case GET_MORE_ITALY:
      let itamatchname = action.payload.parentNode.parentNode.parentNode.getAttribute(
        "data-match"
      );
      let itanamecountry = action.wichcountry.parentNode.parentNode.parentNode.getAttribute(
        "data-country"
      );
      action.url.history.push("/" + itamatchname + ` ` + itanamecountry);
      return {
        ...state
      };

    case GET_MORE_SPAIN:
      let spainmatchname = action.payload.parentNode.parentNode.parentNode.getAttribute(
        "data-match"
      );
      let spainnamecountry = action.wichcountry.parentNode.parentNode.parentNode.getAttribute(
        "data-country"
      );
      action.url.history.push("/" + spainmatchname + ` ` + spainnamecountry);
      return {
        ...state
      };

    case GET_MORE_GERMANY:
      let germmatchname = action.payload.parentNode.parentNode.parentNode.getAttribute(
        "data-match"
      );
      let germnamecountry = action.wichcountry.parentNode.parentNode.parentNode.getAttribute(
        "data-country"
      );
      action.url.history.push("/" + germmatchname + ` ` + germnamecountry);
      return {
        ...state
      };

    case GET_MORE_FRANCE:
    let frmatchname = action.payload.parentNode.parentNode.parentNode.getAttribute(
      "data-match"
    );
    let frnamecountry = action.wichcountry.parentNode.parentNode.parentNode.getAttribute(
      "data-country"
    );
    action.url.history.push("/" + frmatchname + ` ` + frnamecountry);
      return {
        ...state
      };

    case GET_MORE_NETHERLANDS:
    let netmatchname = action.payload.parentNode.parentNode.parentNode.getAttribute(
      "data-match"
    );
    let netnamecountry = action.wichcountry.parentNode.parentNode.parentNode.getAttribute(
      "data-country"
    );
    action.url.history.push("/" + netmatchname + ` ` + netnamecountry);
      return {
        ...state
      };

    default:
      return state;
  }
}
