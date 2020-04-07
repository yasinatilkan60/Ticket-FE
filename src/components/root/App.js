import React from 'react';
import { Container } from "reactstrap";
import { Route, Switch } from "react-router-dom";
import NotFound from "../common/NotFound";
import Auth from "../user/Auth";
import JourneyList from '../journeies/JourneyList';
import JourneySelect from '../journeies/JourneySelect';
import TicketPay from '../tickets/TicketPay';
import TicketList from '../tickets/TicketList';

function App() {
  return (
    <Container>
      <Switch>
        <Route path="/" exact component={Auth} />
        <Route path="/auth" component={Auth} />
        <Route path="/journey-select" component={JourneySelect} />
        <Route path="/journey-list" component={JourneyList} />
        <Route path="/ticket-pay" component={TicketPay} />
        <Route path="/ticket-list" component={TicketList} />
        <Route path="/notfound"component={NotFound} />
        <Route component={NotFound} />
      </Switch>
     
    </Container>
  );
}

export default App;
