import { Home, Navbar, NoMatch, Login, Register, ProtectedRoute, FetchUser } from './components';
import { Switch, Route, }  from 'react-router-dom';
import Container from '@mui/material/Container';

const App = () => (
  <>
    <Navbar />
    <FetchUser>
      <Container fixed>
        <Switch>
          <ProtectedRoute exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route component={NoMatch} />
        </Switch>
      </Container>
    </FetchUser>
  </>
)

export default App;