
import './App.css';
import NavBar from './navbar.js'
import PatientsOverview from './PatientsOverview.js'
import Schedule from './Schedule.js'
import Home from './Home.js'
import PatientDetails from './PatientDetails.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/page2" component={PatientDetails} />
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
