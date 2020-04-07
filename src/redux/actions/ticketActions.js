import * as actionTypes from "./actionTypes";


export function addTicketUserToList(ticket){
  return { type: actionTypes.ADD_TICKET_TO_USER_LIST, payload: ticket}
}

export function saveTicketApi(ticket) {
  return fetch("https://localhost:**/api/tickets/pay", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${localStorage.getItem("jwtToken")}`
    },
    body: JSON.stringify(ticket)
  })
    .then(handleResponse)
    .catch(handleError);
}

export function payTicket(ticket) {
  return function(dispatch) {
    return saveTicketApi(ticket)
      .catch(error => {
        throw error;
      });
  };
}

export async function handleResponse(response) {
  if (response.ok) {
    return response.json();
  }

  const error = await response.text();
  throw new Error(error);
}

export function handleError(error) {
  console.error("Bir hata oluştu");
  throw error;
}