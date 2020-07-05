import React from 'react';
import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import Menu from './pages/Menu';
import Normal from './components/Game/Normal';
import TimeTravel from './components/Game/TimeTravel';


function Routes() {
    return (
        <Router>
            <Route exact path="/" component={Menu} />
            <Route path="/normal-game" component={Normal} />
            <Route path="/time-travel-game" component={TimeTravel} />

            <Route path="*" exact render={() => <Redirect to="/" />} />
        </Router>
    )
}

export default Routes;