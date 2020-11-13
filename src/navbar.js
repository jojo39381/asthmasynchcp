import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from './logo.png'
import profile from './profile.jpeg'
import search from './search.png'
import calendar from './calendar.png'
import mail from './mail.png'

const NavBar = () => {
    return (
        <div>
            <Navbar expand="lg"  style={{backgroundColor:"#3169BD"}}>
            <Navbar.Brand href="#home">
      <img
        alt=""
        src={logo}
        width="211"
        height="60"
        className="d-inline-block align-top"
      />
     
    </Navbar.Brand>
    
    <Nav className="ml-auto">
      <img src={profile} style={{width:40,height:40, borderRadius:20, marginRight:"15px"}} ></img>
      <Nav.Link href="#home" style={{color:"white", marginRight:"30px"}}>Dr Josh S Jacobs</Nav.Link>
      <img src={search} width={35} height={35} style={{marginRight:"30px"}}></img>
      <img src={calendar} width={35} height={35} style={{marginRight:"30px"}}></img>
      <img src={mail} width={35} height={35} style={{marginRight:"30px"}}></img>
      
    </Nav>
   

</Navbar>
        </div>
    )
}

export default NavBar
