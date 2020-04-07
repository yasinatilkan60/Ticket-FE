import React, { Component } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Form,
  FormGroup,
  Button,
  Badge
} from "reactstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as journeyActions from "../../redux/actions/journeyActions";
import { Link } from "react-router-dom";
import Navi from "../navi/Navi";

class JourneySelect extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggle2 = this.toggle2.bind(this);
    this.changeValue = this.changeValue.bind(this);
    this.changeValue2 = this.changeValue2.bind(this);
    this.state = {
      actions: [],
      dropDownValue: "İstanbul",
      dropDownValue2: "Ankara",
      dropdownOpen: false,
      dropdownOpen2: false,
      startDate: new Date()
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(date) {
    this.setState({
      startDate: date
    });
  }
  toggle(event) {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }
  toggle2(event) {
    this.setState({
      dropdownOpen2: !this.state.dropdownOpen2
    });
  }

  changeValue(e) {
    this.setState({ dropDownValue: e.currentTarget.textContent });
    let id = e.currentTarget.getAttribute("id");
    console.log(id);
  }

  changeValue2(e) {
    this.setState({ dropDownValue2: e.currentTarget.textContent });
    let id = e.currentTarget.getAttribute("id");
    console.log(id);
  }
  getJourneies() {
    let station = this.state.dropDownValue;
    let destination = this.state.dropDownValue2;
    let date = this.state.startDate;
    date =
      date.getFullYear().toString() +
      "-" +
      (date.getMonth() + 1).toString() +
      "-" +
      date.getDate().toString();
    this.props.actions.getJourneies(date, station, destination);
  }
  render() {
    return (
      <div>
      <Navi></Navi>
      <Form className="mt-5 mr-auto ml-auto w-50">
        <h1>
          <Badge color="warning">Online Bilet</Badge>
        </h1>
        <hr></hr>
        <FormGroup>
        
          <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <h3><Badge color="light">Nereden</Badge></h3>
            <DropdownToggle caret>{this.state.dropDownValue}</DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>Nereden</DropdownItem>
              <DropdownItem divider />
              <DropdownItem onClick={this.changeValue}>İstanbul</DropdownItem>
              <DropdownItem onClick={this.changeValue}>İzmir</DropdownItem>
              <DropdownItem onClick={this.changeValue}>Ankara</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </FormGroup>
        <FormGroup>
          <Dropdown
            className="mt-2"
            isOpen={this.state.dropdownOpen2}
            toggle={this.toggle2}
          >
            <h3><Badge color="light">Nereye</Badge></h3>
            <DropdownToggle caret>{this.state.dropDownValue2}</DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>Nereye</DropdownItem>
              <DropdownItem divider />
              <DropdownItem onClick={this.changeValue2}>İstanbul</DropdownItem>
              <DropdownItem onClick={this.changeValue2}>İzmir</DropdownItem>
              <DropdownItem onClick={this.changeValue2}>Ankara</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </FormGroup>
        <FormGroup className="mt-2">
        <h3><Badge color="light">Gidiş Tarihi</Badge></h3>
          <DatePicker
            selected={this.state.startDate}
            onChange={this.handleChange}
          />
        </FormGroup>

        <Link to={"journey-list"}>
          <Button
            color="info"
            className="mt-2"
            onClick={() => this.getJourneies()}
          >
            Listele
          </Button>
        </Link>
      </Form>
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
      getJourneies: bindActionCreators(
        journeyActions.getJourneiesByJourneyDate,
        dispatch
      )
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(JourneySelect);
