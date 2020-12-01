import React from 'react'
import { PieChart, Label} from 'react-minimal-pie-chart';
import profile from './profile.jpeg'
import NavBar from './navbar.js'
import {Link} from 'react-router-dom'
const PatientsOverview = () => {
    let data = [
        {
            "value": 10, // number out of 100
            "stroke": "blue",
            "offset": 0
        }
    ]
    return (
        <div>
            <h2>Patients Overview: Asthma Action Plan</h2>
            <div style={{height:300, width:300, margin:"0 auto"}}>
            <PieChart
                data={[{ value: 1/612*100, color: '#D2222C', total:612 }, { value: 12/612*100, color: '#FFBF00', total:612 }, { value: 599/612*100, color: '#7EAA54', total:612 }]}
                totalValue={100}
                lineWidth={30}
      
                label={({ dataEntry }) => dataEntry.total + '\nPatients'}
                labelStyle={{
                fontSize: '10px',
                fontFamily: 'sans-serif',
                fill: '#E38627',
                }}
                labelPosition={0}
                startAngle={270}
                />
            </div>
            <div style={{backgroundColor:"blue", marginTop:"30px"}}>
                <div style={{margin:"0 auto", backgroundColor:"black"}}>
                <div style={{float:"left", margin: "30px"}}>
                    <div style={{backgroundColor:'#D3222C', width:30, height:30, display:"inline-block", float:"left", marginRight:"20px"}}>
    
                    </div>
                    <p style={{display:"inline-block", fontSize:20, float:"left"}}>1 Patient</p>
                </div>
                <div style={{float:"left", margin: "30px"}}>
                    <div style={{backgroundColor:'#FFBF00', width:30, height:30, display:"inline-block", float:"left", marginRight:"20px"}}>
  
                    </div>
                    <p style={{display:"inline-block", fontSize:20, float:"left"}}>1 Patient</p>
                </div>
                <div style={{float:"left", margin: "30px"}}>
                    <div style={{backgroundColor:'#70AD47', width:30, height:30, display:"inline-block", float:"left", marginRight:"20px"}}>
  
                    </div>
                    <p style={{display:"inline-block", fontSize:20, float:"left"}}>1 Patient</p>
                </div>
                </div>
               

            </div>
            <div style={{marginTop:"100px"}}>
                <h3 style={{textAlign:"left"}}><span style={{color:"#D3222C"}}>1 patient</span> requires immediate attention</h3>
                <div style={{textAlign:"left", marginLeft:"20px"}}>
                    <Link to="/page2">
                   <img src={profile} style={{width:50,height:50, borderRadius:25}}></img>
                   <p style={{display:"inline", marginLeft:"20px", fontWeight:"bold", fontSize:"20px" }}>Lindsay Chen</p>
                   </Link>

                </div>
                <h3 style={{textAlign:"left"}}><span style={{color:"#FFBF00", }}>1 patient</span> have heightened symptoms</h3>
                <div style={{textAlign:"left", marginLeft:"20px"}}>
                    <Link to="/page2">
                   <img src={profile} style={{width:50,height:50, borderRadius:25}}></img>
                   <p style={{display:"inline", marginLeft:"20px", fontWeight:"bold", fontSize:"20px" }}>Lindsay Chen</p>
                   </Link>
                </div>
            </div>
           
        </div>
    )
}

export default PatientsOverview
