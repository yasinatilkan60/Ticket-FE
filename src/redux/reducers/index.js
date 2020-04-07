import {combineReducers} from "redux";
import journeyListReducer from "./journeyListReducer";
import registerUserReducer from "./registerUserReducer";
import journeyReducer from "./journeyReducer";
import ticketListReducer from './ticketListReducer';


const rootReducer = combineReducers({
    journeyListReducer,
    registerUserReducer,
    journeyReducer,
    ticketListReducer
})

export default rootReducer;