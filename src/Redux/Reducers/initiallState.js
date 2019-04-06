import {GET_NEWS } from "../../Actions/ActionsTypes";

export const alldata = [{ allnews: null, isLoading: false }];

export default function reducerForQuestion(state = alldata, action) {
  switch (action.type) {


    case GET_NEWS:
      state[0].isLoading = true;
      state[0].allnews = action.payload;

      return state;

    default:
      return state;
  }
}
