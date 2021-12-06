import * as React from 'react';
import './footer.modules.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

export default function Footer() {
  return (

    <Container fluid>
      <Row>
        <Col xs={6} style={{background: '#fff', borderRadius: '10px', margin: '0 20px 0 0'}}>
          <h5 style={{color: '#33A4D8', fontSize: '24px', fontWeight: '400', margin: '20px'}}>Do you want to get our latest updates?</h5>
          <p style={{margin: '20px', lineHeight: '2'}}>Please subscribe our newsletter for upcoming new videos and latest information about our work. Thank you.</p>
          <div className="newsletter">
            <input type="email" placeholder="Your Email..." />
            <Button variant="primary">Subscribe</Button>
          </div>
        </Col>
        <Col style={{background: '#fff', borderRadius: '10px'}}>
          <h5 style={{color: '#33A4D8', fontSize: '24px', fontWeight: '400', margin: '20px'}}>Quick Links</h5>
          <ul style={{listStyle: 'none'}}>
            <li><a href="www.google.com" target="_blank">Duis bibendum</a></li>
            <li><a href="www.google.com" target="_blank">Duis bibendum</a></li>
            <li><a href="www.google.com" target="_blank">Duis bibendum</a></li>
            <li><a href="www.google.com" target="_blank">Duis bibendum</a></li>
          </ul>
        </Col>
        <Col style={{background: '#fff', borderRadius: '10px', margin: '0 0 0 20px'}}>
          <h5 style={{color: '#33A4D8', fontSize: '24px', fontWeight: '400', margin: '20px'}}>Our Pages</h5>
          <ul style={{listStyle: 'none'}}>
            <li><a href="www.google.com" target="_blank">Duis bibendum</a></li>
            <li><a href="www.google.com" target="_blank">Duis bibendum</a></li>
            <li><a href="www.google.com" target="_blank">Duis bibendum</a></li>
            <li><a href="www.google.com" target="_blank">Duis bibendum</a></li>
          </ul>
        </Col>
      </Row>
    </Container>

    // </div>
  );
}