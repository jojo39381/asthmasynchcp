import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
const Schedule = () => {
    return (
        <div>
           <Card className="text-left" style={{ width: '25rem' }}>
  <Card.Body>
    <Card.Title>Invitations</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Pending</Card.Subtitle>
    <div style={{marginBottom:0, display:"block"}}>
        <p style={{display:"inline-block"}}>Hello</p>
        <p style={{display:"inline", float:"right"}}>4 hours</p>
    </div>
    <div style={{marginBottom:0, display:"block"}}>
        <p style={{display:"inline-block"}}>Hello</p>
        <p style={{display:"inline", float:"right"}}>4 hours</p>
    </div>
    <div style={{marginBottom:0,display:"block"}}>
        <p style={{display:"inline-block"}}>Hello</p>
        <p style={{display:"inline", float:"right"}}>4 hours</p>
    </div>
    <div style={{marginBottom:0, display:"block"}}>
        <p style={{display:"inline-block"}}>Hello</p>
        <p style={{display:"inline", float:"right"}}>4 hours</p>
    </div>
   
   
    
    





    
        

       
    <Card.Link href="#">View More</Card.Link>
    <Button style={{display:"block", marginTop:"20px", margin:"0 auto" }}>Invite Patients</Button>
  </Card.Body>
</Card>
<div style={{marginTop:50}}>
<iframe src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FLos_Angeles&amp;src=am9zZXBoeWN5ZWhAYmVya2VsZXkuZWR1&amp;src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;color=%23039BE5&amp;color=%2333B679&amp;color=%230B8043&amp;showCalendars=1&amp;mode=AGENDA&amp;showNav=0&amp;showDate=1&amp;showPrint=0&amp;showTz=0&amp;showTabs=0" style={{border:"solid 1px #777", frameborder:"0", scrolling:"no"}} width={350} height={600}></iframe>
</div>
    </div>
    )
}

export default Schedule
