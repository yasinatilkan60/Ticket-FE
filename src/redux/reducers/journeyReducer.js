import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState";

export default function journeyReducer(state=initialState.currentJourney,action){
    switch (action.type) {
        case actionTypes.ADD_JOURNEY:
            return Object.assign(action.payload);
        default:
            return state;
    }
}