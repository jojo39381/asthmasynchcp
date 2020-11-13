import React from 'react'
import { PieChart, Label} from 'react-minimal-pie-chart';
import profile from './profile.jpeg'
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
                data={[{ value: 1/612*100, color: 'red', total:612 }, { value: 12/612*100, color: 'blue', total:612 }, { value: 599/612*100, color: 'black', total:612 }]}
                totalValue={100}
                lineWidth={20}
      
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
            <div>
                <div style={{backgroundColor:"red", width:20, height:20}}>
                
                </div>
                <p style={{float:"left"}}>1 Patient</p>
            </div>
            <div style={{marginTop:"50px"}}>
                <h3 style={{textAlign:"left"}}>1 Patient requires immediate attention</h3>
                <div style={{textAlign:"left", marginLeft:"20px"}}>
                   <img src={profile} style={{width:50,height:50, borderRadius:25}}></img>
                   <p style={{display:"inline", marginLeft:"20px", fontWeight:"bold", fontSize:"20px" }}>Lindsay Chen</p>

                </div>
                <h3 style={{textAlign:"left"}}>12 Patient have heightened symptoms</h3>
                <div style={{textAlign:"left", marginLeft:"20px"}}>
                   <img src={profile} style={{width:50,height:50, borderRadius:25}}></img>
                   <p style={{display:"inline", marginLeft:"20px", fontWeight:"bold", fontSize:"20px" }}>Lindsay Chen</p>
                </div>
            </div>
           
        </div>
    )
}

export default PatientsOverview
