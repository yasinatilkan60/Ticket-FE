import * as actionTypes from "./actionTypes";

export function getJourneiesSuccess(journeies) {
  return {
    type: actionTypes.GET_JOURNEY_LIST_BY_JOURNEY_DATE,
    payload: journeies
  };
}

export function addJourney(journey){
  return {type:actionTypes.ADD_JOURNEY,payload:journey}
}

export function getJourneiesByJourneyDate(journeyDate, station, destination) {
  return function(dispatch) {
    let url =
      "https://localhost:**/api/journeies/getlistbyjourneydate?journeyDate=" +
      journeyDate +
      "&station=" +
      station +
      "&destination=" +
      destination;
    return fetch(url, {
      method: "GET",
      headers: {
        'Authorization': `Bearer ${localStorage.getItem("jwtToken")}`
      }
    })
      .then(response => response.json())
      .then(result => dispatch(getJourneiesSuccess(result)));
  };
}

