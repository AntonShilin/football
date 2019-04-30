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
    case GET_NEWS:
      return {
        ...state,
        allchampionat: action.payload
      };
    case GET_BUSINESS_NEWS:
      return {
        ...state,
        england: action.payload
      };
    case GET_ENTERTAINMENT_NEWS:
      return {
        ...state,
        italy: action.payload
      };
    case GET_TECHNOLOGY_NEWS:
      return {
        ...state,
        spain: action.payload
      };
    case GET_HEALTH_NEWS:
      return {
        ...state,
        germany: action.payload
      };

    case GET_SCIENCE_NEWS:
      return {
        ...state,
        france: action.payload
      };

    case GET_SPORT_NEWS:
      return {
        ...state,
        netherlands: action.payload
      };

    case GET_MORE_NEWS:
      console.log(
        action.payload.parentNode.parentNode.parentNode.getAttribute(
          "data-match"
        )
      );
      let adress = action.payload.parentNode.parentNode.parentNode.getAttribute(
        "data-match"
      );
      action.url.history.push("/" + adress);
      return {
        ...state
      };

    case GET_MORE_BUSINESS_NEWS:
      action.payload.history.push(
        action.index + " businessnews " + action.namearticle.title
      );
      return {
        ...state
      };

    case GET_MORE_ENTERTAINMENT_NEWS:
      action.payload.history.push(
        action.index + " entertainment " + action.namearticle.title
      );
      return {
        ...state
      };

    case GET_MORE_TECHNOLOGY_NEWS:
      action.payload.history.push(
        action.index + " technology " + action.namearticle.title
      );
      return {
        ...state
      };

    case GET_MORE_HEALTH_NEWS:
      action.payload.history.push(
        action.index + " health " + action.namearticle.title
      );
      return {
        ...state
      };

    case GET_MORE_SCIENCE_NEWS:
      action.payload.history.push(
        action.index + " science " + action.namearticle.title
      );
      return {
        ...state
      };

    case GET_MORE_SPORT_NEWS:
      action.payload.history.push(
        action.index + " sport " + action.namearticle.title
      );
      return {
        ...state
      };

    default:
      return state;
  }
}
