import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Card, CardDeck, CardGroup } from 'react-bootstrap';
import { Button } from '@material-ui/core';
import loader from "../images/loader.jpg"
import bulldozer from "../images/bulldozer.jpg"
import excavator from "../images/excavator.jpg"
import maz from "../images/maz.jpg"
import mini from "../images/mini.jpg"
import reno from "../images/reno.jpg"
import trailer from "../images/trailer.jpg"


import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/tech.scss"
const SecondPage = () => (
  
  <Layout>
    <SEO title="Page two" />
    <h1 className="header">Наша техника</h1>
    <CardDeck>
  <Card style={{ width: '18rem' }} >
    <Card.Img variant="top" src={loader} style={{width:"100%"}} />
    <Card.Body>
      <Card.Title>Погрузчик</Card.Title>
      <Card.Text>
      ZTS UN-053
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={bulldozer} style={{width:"100%"}} />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={excavator} style={{width:"100%"}} />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardDeck>
<Button style={{
    border:"3px solid grey",
  }}><Link to="/"  
  style={{
    textDecoration:"none",
    color:"white"
    }}>Назад</Link></Button>
  </Layout>
)

export default SecondPage
