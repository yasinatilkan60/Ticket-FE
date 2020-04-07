import React from "react";
import {Link} from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

export default class Navi extends React.Component {
  render(){
  return (
    <div>
      <Navbar color="light" light expand="md">
      <Link to="/">Bilet Sistemi</Link>
        <NavbarToggler/>
        <Collapse navbar>
          <Nav className="ml-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                İşlemler
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem><Link to="/ticket-list">Biletlerim</Link></DropdownItem>
                <DropdownItem><Link to="/">Çıkış yap</Link></DropdownItem>
                <DropdownItem divider />
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
    );
  }
}

