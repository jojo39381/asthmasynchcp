import React from 'react'
import NavBar from './navbar.js'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import PatientsOverview from './PatientsOverview.js'
import profile from './profile.jpeg'
import {LineChart, XAxis, Tooltip, CartesianGrid, Line} from 'recharts'
const PatientDetails = () => {
    const data = [
        {
          name: '8/24', uv: 4000, pv: 2400, amt: 2400,
        },
        {
          name: '8/25', uv: 3000, pv: 1398, amt: 2210,
        },
        {
          name: '8/26', uv: 2000, pv: 9800, amt: 2290,
        },
        {
          name: '8/27', uv: 2780, pv: 3908, amt: 2000,
        },
        {
          name: '8/28', uv: 1890, pv: 4800, amt: 2181,
        },
        {
          name: '8/29', uv: 2390, pv: 3800, amt: 2500,
        },
        {
          name: '8/30', uv: 3490, pv: 4300, amt: 2100,
        },
      ];
    return (
        <div>
            <NavBar></NavBar>
            
            <div style={{display:"inline-block", margin:"30px", borderWidth:"1px", borderStyle:"solid", background: "white", padding:"20px", borderRadius:"7px", boxShadow:"0 2px 5px #ccc"}}>

                <h1>Time Spent</h1>
                <h5>1 hour</h5>
            </div>
            <div style={{display:"inline-block", margin:"30px", borderWidth:"1px", borderStyle:"solid", background: "white", padding:"20px", borderRadius:"7px", boxShadow:"0 2px 5px #ccc"}}>
                <h1>Time To Next</h1>
                <h5>2 days</h5>
            </div>
            <div style={{display:"inline-block", margin:"30px", borderWidth:"1px", borderStyle:"solid", background: "white", padding:"20px", borderRadius:"7px", boxShadow:"0 2px 5px #ccc"}}>
                <h1>Total Time Spent</h1>
                <h5>5 hours</h5>
            </div>
            <div style={{width: "90%", margin:"0 auto"}}>
                <img src={profile} style={{borderRadius:100, width:200, height:200, float:"left", verticalAlign:"middle"}}></img>
                <div style={{float:"left", textAlign:"left", margin:20}}>
                <h2>Zachary Smith, 17</h2>
                <p>Birthday: 4/23/2003</p>
                <p>Patient since 5/23/2017</p>
                <p>Last seen on 8/21/2020</p>
                </div>
                <div style={{float:"left", textAlign:"left", margin:20}}>
                <Card className="text-left" style={{width: '18rem' }}>
                    <Card.Body>
                    <Card.Title>RPM Actions</Card.Title>
                    <Button variant="primary" style={{marginBottom:"10px"}}>Assign To Another HCP</Button>
                    <Button variant="primary">Submit RPM</Button>
                    
                    </Card.Body>
                </Card>
                </div>

            </div>

            <div style={{width:"90%", backgroundColor:"white", margin:"0 auto", marginTop:"250px"}}>
                <div style={{backgroundColor:"white", width:"70%", margin:"0 auto", borderStyle:"solid", borderWidth:1, borderColor:"gray"}}>
                    <div style={{display:"inline-block", margin: 20}}>
                        <div style={{display:"flex", justifyContent:"center", alignItems:"center", backgroundColor:"#84B400", width:100, height:100, borderRadius:50, margin:"0 auto", marginBottom:"10px"}}>
                            <h1 style={{color:"white"}}>19</h1>
                        </div>
                        <h5>Feno</h5>
                        <p>Updated 2 days ago</p>
                    </div>
                    <div style={{display:"inline-block", margin: 20}}>
                        <div style={{display:"flex", justifyContent:"center", alignItems:"center", backgroundColor:"#84B400", width:100, height:100, borderRadius:50, margin:"0 auto", marginBottom:"10px"}}>
                            <h1 style={{color:"white"}}>95</h1>
                        </div>
                        <h5>Asthma Health Score</h5>
                        <p>Updated 2 days ago</p>
                    </div>
                    <div style={{display:"inline-block", margin: 20}}>
                        <div style={{display:"flex", justifyContent:"center", alignItems:"center", backgroundColor:"#FFBE05", width:100, height:100, borderRadius:50, margin:"0 auto", marginBottom:"10px"}}>
                            <h1 style={{color:"white"}}>79%</h1>
                        </div>
                        <h5>Med. Adherence</h5>
                        <p>Updated 2 days ago</p>
                    </div>
                    
                    
                    
                </div>
            </div>
            <div style={{width:"90%", backgroundColor:"white", margin:"0 auto", marginTop:"100px"}}>
                <div style={{display:"inline-block", }}>
                    <h5 style={{textAlign:"left"}}>Asthma Health Score</h5>
                    <LineChart
                        width={400}
                        height={300}
                        data={data}
                        margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
                        >
                        <XAxis dataKey="name" />
                        <Tooltip />
                        <CartesianGrid stroke="#f5f5f5" />
                        <Line type="monotone" dataKey="uv" stroke="#ff7300" yAxisId={0} />
                        
                    </LineChart>
                </div>
                <div style={{display:"inline-block", }}>
                    <h5 style={{textAlign:"left"}}>Symptom Tracker</h5>
                    <LineChart
                        width={400}
                        height={300}
                        data={data}
                        margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
                        >
                        <XAxis dataKey="name" />
                        <Tooltip />
                        <CartesianGrid stroke="#f5f5f5" />
                        <Line type="monotone" dataKey="uv" stroke="#ff7300" yAxisId={0} />
                        
                    </LineChart>
                </div>
                <div style={{display:"inline-block", }}>
                    <h5 style={{textAlign:"left"}}>Biometrics</h5>
                    <LineChart
                        width={400}
                        height={300}
                        data={data}
                        margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
                        >
                        <XAxis dataKey="name" />
                        <Tooltip />
                        <CartesianGrid stroke="#f5f5f5" />
                        <Line type="monotone" dataKey="uv" stroke="#ff7300" yAxisId={0} />
                        
                    </LineChart>
                </div>
                <div style={{display:"inline-block", }}>
                    <h5 style={{textAlign:"left"}}>Environmental</h5>
                    <LineChart
                        width={400}
                        height={300}
                        data={data}
                        margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
                        >
                        <XAxis dataKey="name" />
                        <Tooltip />
                        <CartesianGrid stroke="#f5f5f5" />
                        <Line type="monotone" dataKey="uv" stroke="#ff7300" yAxisId={0} />
                        
                    </LineChart>
                </div>
                

            </div>
            <div style={{width:"90%", backgroundColor:"white", margin:"0 auto", marginTop:"100px"}}>
                <div style={{textAlign:"left"}}>
                    <h2>Patient Log</h2>
                    <div style={{marginTop:30}}>
                        <Button style={{marginRight:30}}>Appointments</Button>
                        <Button style={{marginRight:30}}>Biometrics</Button>
                        <Button style={{marginRight:30}}>Asthma Action Plan</Button>
                    </div>
                    <div style={{marginTop:30}}>
                        <ul className="list-group">
                            <li className="list-group-item">Office Visit<span style={{float:'right'}}>08/21/2020</span></li>
                            <li className="list-group-item">Yello to Green (Asthma Action Plan)<span style={{float:'right'}}>08/21/2020</span></li>
                            <li className="list-group-item">Recorded FeNO-19<span style={{float:'right'}}>08/21/2020</span></li>
                        </ul>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default PatientDetails
