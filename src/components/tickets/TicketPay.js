import React, { Component } from "react";
import { Col, Button, Form, FormGroup, Label, Input, Badge } from "reactstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as ticketActions from "../../redux/actions/ticketActions";
import alertify from "alertifyjs";
import Navi from "../navi/Navi";
import { Link } from "react-router-dom";
class TicketPay extends Component {
  handleClick(event, journey) {
    var payload = {
      journeyId: this.props.journey.id,
      userId: parseInt(localStorage.getItem('userId'))
    };
    this.props.actions.payTicket(payload);
    this.props.actions.addTicketToList(journey);
    alertify.success("Bilet satın alındı.");
  }
  render() {
    return (
      <div>
        <Navi className="mb-3"></Navi>
        <h1>
          <Badge color="info">Bilet Bilgileri</Badge>
        </h1>
        <div>
          <h3>
            <Badge color="light">Kalkış: {this.props.journey.station}</Badge>
          </h3>
          <h3>
            <Badge color="light">Varış: {this.props.journey.destination}</Badge>
          </h3>
          <h3>
            <Badge color="light">Fiyat: {this.props.journey.price}</Badge>
          </h3>
        </div>

        <Form>
          <h1>
            <Badge color="warning">Ödeme Bilgileri</Badge>
          </h1>
          <hr></hr>
          <FormGroup row>
            <Label sm={2}>Kart ismi:</Label>
            <Col sm={10}>
              <Input placeholder="Kart İsmi" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm={2}>Numarası:</Label>
            <Col sm={10}>
              <Input placeholder="Kart Numarası" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm={2}>CVV:</Label>
            <Col sm={10}>
              <Input placeholder="CVV" />
            </Col>
          </FormGroup>
          <Button
            color="success"
            onClick={event => this.handleClick(event, this.props.journey)}
          >
            Ödeme Yap
          </Button>
          <Link to={"/journey-list"}>
            <Button color="danger" className="ml-3">
              Geri Dön
            </Button>
          </Link>
        </Form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    payTicket: state.payTicketReducer,
    journey: state.journeyReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      payTicket: bindActionCreators(ticketActions.payTicket, dispatch),
      addTicketToList: bindActionCreators(
        ticketActions.addTicketUserToList,
        dispatch
      )
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TicketPay);
