import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Unsubscribe from '../pages/Unsubscribe';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/unsubscribe" exact component={Unsubscribe} />
  </Switch>
);
export default Routes;
