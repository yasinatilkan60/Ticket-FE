import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState";

export default function journeyListReducer(state=initialState.journeies,action){
    switch (action.type) {
        case actionTypes.GET_JOURNEY_LIST_BY_JOURNEY_DATE:
            return action.payload;
        case actionTypes.GET_CURRENT_JOURNEIES:
            return state;
        default:
            return state;
    }
}