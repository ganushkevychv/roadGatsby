import React from "react"
import { Link } from "gatsby"
import { Button, Card, CardContent, Typography, CardMedia,CardActionArea, Avatar } from '@material-ui/core';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Layout from "../components/layout"
import "../styles/layout.scss"
import SEO from "../components/seo"
import Footer from "../components/footer"
import logoRoad from "../images/logoRoad.png"
 
const IndexPage = () => (
  <Layout>
    <SEO title="Home page" />
    <Card variant="outlined" style={{borderRightStyle: "none",
    display:"flex",
    justifyContent:"center",
      borderLeftStyle: "none",
      backgroundColor: "transparent",
   
      }}>
      
     <Avatar style={{
width:"200px",
height:"200px"
     }}
              alt="builder"
              src={logoRoad}
            />
     
    </Card>
    <div className="container-card">
    <Card variant="outlined" 
    style={{
      backgroundColor: "transparent",
      border:"3px solid grey",
      borderRightStyle: "none",
      borderLeftStyle: "none",
      }}>
      <CardContent>
        <Typography  color="textSecondary" gutterBottom>
        Елисаветдорбуд
        </Typography>
        <Typography variant="h5" component="h2">
        Ремонт дорог – наше призвание!
        </Typography>
        <Typography  color="textSecondary">
          adjective
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
        </Typography>
      </CardContent>
    </Card>
    </div>
    <div className="container-button">
    <ButtonGroup color="primary" aria-label="outlined primary button group" 
    style={{
      display: "flex",
      justifyContent: "center",
      padding:"10px"
      }} >
  <Button style={{
    border:"3px solid grey",
  }}><Link to="/about/"  
  style={{
    textDecoration:"none",
    color:"black"
    }}>О нас</Link></Button>
  <Button style={{
    border:"3px solid grey",
  }} ><Link to="/tech/"  
  style={{
    textDecoration:"none",
    color:"black"
    }}>Техника</Link></Button>
  <Button style={{
    border:"3px solid grey",
  }}><Link to="/contact/"  
  style={{
    textDecoration:"none",
    color:"black"
    }}>Контакты</Link></Button>
</ButtonGroup>
</div>
    
  </Layout>
  
)

export default IndexPage
