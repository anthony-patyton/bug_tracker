import { Home, Navbar, NoMatch, Login, Register, IssueTracker} from './components';
import { Switch, Route, ProtectedRoute } from 'react-router-dom';
import Container from '@mui/material/Container';
import React from 'react';

const App = () => (
    <>
        <Navbar />
        <Container fixed>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <ProtectedRoute exact path="/issue_tracker" component={IssueTracker} />
                <Route component={NoMatch} />
            </Switch>
        </Container>
    </>
)

export default App;