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
  topheadline: null,
  businessnews: null,
  entertainment: null,
  technology: null,
  health: null,
  science: null,
  sport: null
};

export default function reducerForQuestion(state = alldata, action) {
  switch (action.type) {
    case GET_NEWS:
      return {
        ...state,
        topheadline: action.payload
      };
    case GET_BUSINESS_NEWS:
      return {
        ...state,
        businessnews: action.payload
      };
    case GET_ENTERTAINMENT_NEWS:
      return {
        ...state,
        entertainment: action.payload
      };
    case GET_TECHNOLOGY_NEWS:
      return {
        ...state,
        technology: action.payload
      };
    case GET_HEALTH_NEWS:
      return {
        ...state,
        health: action.payload
      };

    case GET_SCIENCE_NEWS:
      return {
        ...state,
        science: action.payload
      };

    case GET_SPORT_NEWS:
      return {
        ...state,
        sport: action.payload
      };

    case GET_MORE_NEWS:
      action.payload.history.push(
        "/" + action.index + " topheadline " + action.namearticle.title
      );
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
