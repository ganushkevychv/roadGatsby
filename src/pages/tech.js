import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Card, CardDeck, CardGroup } from 'react-bootstrap';
import { Button } from '@material-ui/core';
import roller from "../images/roller.jpg"
import 'bootstrap/dist/css/bootstrap.min.css';
const SecondPage = () => (
  
  <Layout>
    <SEO title="Page two" />
    <h1>Наша техника</h1>
    <CardDeck>
  <Card style={{ width: '18rem' }} >
    <Card.Img variant="top" src={roller} style={{width:"100%"}} />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={roller} style={{width:"100%"}} />
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
    <Card.Img variant="top" src={roller} style={{width:"100%"}} />
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
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
