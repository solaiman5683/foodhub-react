import { Container } from '@mui/material';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Error from './Components/Error/Error';
import FoodDetails from './Components/FoodDetails/FoodDetails';
import Foods from './Components/Foods/Foods';

function App() {
  return (
    <div>
      <Container maxWidth="xl">
        <Router>
          <Switch>
            <Route exact path='/'>
              <Foods></Foods>
            </Route>
            <Route path='/foods'>
              <Foods></Foods>
            </Route>
            <Route path="/food/:idMeal">
              <FoodDetails></FoodDetails>
            </Route>
            <Route path='*'>
              <Error></Error>
            </Route>
          </Switch>
        </Router>
      </Container>
    </div>
  );
}

export default App;
