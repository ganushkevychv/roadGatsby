import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import { Button } from '@material-ui/core';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/contacts.scss"
import tel from "../images/tel.png"
import gmail from "../images/gmail.png"
import ListGroup from 'react-bootstrap/ListGroup'

const Contact = () => (
  <div className="container">
    <SEO title="contact" />
    <div className="contacts-h1">
    <h1>Контакты</h1>
    </div>
    <div className="contact-card">
    <ListGroup style={{
      backgroundColor:"transparent"
    }}>
  <ListGroup.Item style={{backgroundColor:"transparent"}}><p className="text"><a className="link-text" href="tel:+380992983816"><img className="tel" src={tel} alt="tel"/> +380992983816</a></p></ListGroup.Item>
  <ListGroup.Item style={{backgroundColor:"transparent"}}><p className="text"><a className="link-text" href="tel:+380974055785"><img className="tel" src={tel} alt="tel"/> +380974055785</a></p></ListGroup.Item>
  <ListGroup.Item style={{backgroundColor:"transparent"}}><p className="text"><a className="link-text" href="mailto:kirichkov2016@gmail.com"><img className="gmail" src={gmail} alt="gmail"/> kirichkov2016@gmail.com</a></p></ListGroup.Item>
</ListGroup>
    </div>
    <div className="button-back">
    <Button style={{
    border:"3px solid grey",
  }}><Link to="/"  
  style={{
    textDecoration:"none",
    color:"white"
    }}>Назад</Link></Button>
    </div>
  </div>
)

export default Contact
