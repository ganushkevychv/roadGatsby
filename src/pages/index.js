import React from "react";
import { Link } from "gatsby";
import {
  Button,
  Card,
  CardContent,
  Typography,
  Avatar
} from "@material-ui/core";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import "../styles/layout.scss";
import SEO from "../components/seo";
import BackgroundImage from "gatsby-background-image"
import { graphql } from "gatsby"

import logoRoller from "../images/logoRoller.png";

const IndexPage = (props) => (
  <BackgroundImage className="background"
    fluid={props.data.indexImage.childImageSharp.fluid}
    >
  <div className="container">
    <SEO title="Home page" />
   
    <div className="container-logo">
      <Card
        variant="outlined"
        style={{
          borderRightStyle: "none",
          borderLeftStyle: "none",
          backgroundColor: "transparent",
         
        }}
      >
        <Avatar 
          style={{
            width: "200px",
            height: "200px"
          }}
          alt="builder"
          src={logoRoller}
        />
      </Card>
    </div>
    <div className="container-card">
      <Card
        variant="outlined"
        style={{
          backgroundColor: "transparent",
          border: "3px solid grey",
          borderRightStyle: "none",
          borderLeftStyle: "none"
        }}
      >
        <CardContent>
          <div className="company-h1">
            <Typography
              color="textPrimary"
              variant="h1"
              gutterBottom
              component="h1"
              style={{
                fontSize: "2.6rem",
                color: "black"
              }}
            >
              Елисаветдорбуд
            </Typography>
          </div>
          <Typography
            variant="h5"
            component="h2"
            style={{
              color: "white"
            }}
          >
            Ремонт дорог – наше призвание!
          </Typography>
        </CardContent>
      </Card>
    </div>
    <div className="container-button">
      <ButtonGroup
        color="primary"
        aria-label="outlined primary button group"
        style={{
          padding: "10px"
        }}
      >
        <Button
          style={{
            border: "3px solid grey",
            backgroundColor:"rgba(0,0,0,0.4)"
          }}
        >
          <Link
            to="/about/"
            style={{
              textDecoration: "none",
              color: "white"
            }}
          >
            О нас
          </Link>
        </Button>
        <Button
          style={{
            border: "3px solid grey",
            backgroundColor:"rgba(0,0,0,0.4)"
          }}
        >
          <Link
            to="/tech/"
            style={{
              textDecoration: "none",
              color: "white"
            }}
          >
            Техника
          </Link>
        </Button>
        <Button
          style={{
            border: "3px solid grey",
              backgroundColor:"rgba(0,0,0,0.4)"
          }}
        >
          <Link
            to="/contact/"
            style={{
              textDecoration: "none",
              color: "white"
            }}
          >
            Контакты
          </Link>
        </Button>
      </ButtonGroup>
    </div>
  </div>
  </BackgroundImage>
);

export default IndexPage;

export const pageQuery = graphql`
query {
  indexImage: file(relativePath: { eq: "road1.jpg" }){
    childImageSharp {
      fluid(maxWidth: 1900){
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`;
