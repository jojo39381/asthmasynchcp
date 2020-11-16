import React from 'react'
import NavBar from './navbar.js'
import PatientsOverview from './PatientsOverview.js'
import Schedule from './Schedule.js'
import {Link} from 'react-router-dom'
const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
          <div style={{width:"90%", margin:"0 auto"}}>
          <div style={{float:"left", margin: 20}}>
            <PatientsOverview></PatientsOverview>
          </div>
          <div style={{float:"right", margin: 20}}>
            <Schedule></Schedule>
          </div>
          </div>
        </div>
    )
}

export default Home
