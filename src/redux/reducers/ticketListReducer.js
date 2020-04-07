import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState";

export default function ticketListReducer(state=initialState.usersTickets,action){
    switch (action.type) {
        case actionTypes.ADD_TICKET_TO_USER_LIST:
            return [...state,{...action.payload}]
        default:
            return state;
    }
}