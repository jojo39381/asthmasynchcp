
import './App.css';
import NavBar from './navbar.js'
import PatientsOverview from './PatientsOverview.js'
import Schedule from './Schedule.js'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <div style={{float:"left", margin: 100}}>
        <PatientsOverview></PatientsOverview>
      </div>
      <div style={{float:"right", margin: 100}}>
        <Schedule></Schedule>
      </div>
    </div>
  );
}

export default App;
