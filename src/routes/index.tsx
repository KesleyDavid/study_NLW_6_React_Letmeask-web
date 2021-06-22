import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from "../pages/Home";
import NewRoom from "../pages/NewRoom";

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/rooms/new" exact component={NewRoom} />
    </Switch>
  </Router>
);

export default Routes;
