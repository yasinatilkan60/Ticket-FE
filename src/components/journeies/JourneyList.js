import React, { Component } from "react";
import { Table } from "reactstrap";
//import alertify from "alertifyjs";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Badge,Button } from "reactstrap";
import { bindActionCreators } from "redux";
import JourneySelect from "./JourneySelect";
import alertify from "alertifyjs"
import * as journeyActions from "../../redux/actions/journeyActions";
class JourneyList extends Component {
  addJourney = (journey)=>{
    alertify.success(" Ödeme işlemine geçildi.");
    this.props.actions.addJourney(journey);
  }
  render() {
    return (
      <div>
        <JourneySelect></JourneySelect>
        <h3>
          <Badge color="warning">Gidiş Seferleri</Badge>
        </h3>
        <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Otobüs</th>
            <th>Kalkış</th>
            <th>Varış</th>
            <th>Fiyat</th>
            <th />
          </tr>
        </thead>
        <tbody>
            {this.props.journeies.map(journey => (
              <tr key={journey.id}>
                <th scope="row">{journey.id}</th>
                <td>{journey.busId === 1 ? 'Suit' : "Classic"}</td>
                <td>{journey.station}</td>
                <td>{journey.destination}</td>
                <td>{journey.price}</td>
                <td>
                  <Link to={"/ticket-pay"}>
                  <Button color="success" onClick={()=> this.addJourney(journey)}>
                    Bilet al
                  </Button></Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

function mapStateToProps(state) {
    return {
      journeies: state.journeyListReducer
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      actions: {
        addJourney : bindActionCreators(journeyActions.addJourney, dispatch)
      }
    };
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(JourneyList);