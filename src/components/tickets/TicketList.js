import React, { Component } from "react";
import Navi from "../navi/Navi";
import { connect } from "react-redux";
import { Table, Badge,Button } from "reactstrap";
import {Link} from "react-router-dom";

class TicketList extends Component {

  renderEmpty(){
    return(
      <div class="mt-5">
        <h1><Badge color="danger">Bilet bulunamadı.</Badge></h1>
        <Link to="/journey-select"><Button color="info">Geri Dön</Button></Link>
      </div>
    )
  }
    
  renderList(){
    return(
      <div>
        <Navi></Navi>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Otobüs</th>
              <th>Kalkış</th>
              <th>Varış</th>
              <th>Fiyat</th>
            </tr>
          </thead>
          <tbody>
          {this.props.usersTickets.map(ticket => (
              <tr key={ticket.id}>
                <th scope="row">{ticket.id}</th>
                <td>{ticket.busId === 1 ? 'Suit' : "Classic"}</td>
                <td>{ticket.station}</td>
                <td>{ticket.destination}</td>
                <td>{ticket.price}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Link to="/journey-select"><Button color="info">Sefer listele</Button></Link>
      </div>
    );
  }
  render() {
    return (
      <div>
        {this.props.usersTickets.length > 0 ? this.renderList() : this.renderEmpty()}
      </div>
      
    );
  }
}


function mapStateToProps(state) {
  return {
    usersTickets: state.ticketListReducer
  };
}

export default connect(mapStateToProps)(TicketList);
