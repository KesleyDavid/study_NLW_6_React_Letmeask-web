import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from "../pages/Home";
import Room from "../pages/Room";
import NewRoom from "../pages/NewRoom";

const Routes = () => (
  <Router>
    <Switch>
      {/* Switch => não permite chamar mais de uma rota ao mesmo tempo, se uma der certo ele para de procurar */}
      <Route path="/" exact component={Home} />
      <Route path="/rooms/new" exact component={NewRoom} />
      <Route path="/rooms/:id" exact component={Room} />
    </Switch>
  </Router>
);

export default Routes;
