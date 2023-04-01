import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import consumiendo from "../assets/img/consumiendo.jpeg";
import axie from "../assets/img/a.gif";
import dex from "../assets/img/dex.jpeg";
import pokedex from "../assets/img/pokedex.jpeg";
import portfolio from "../assets/img/portfolio.gif";
import cerchio from "../assets/img/cerchio.jpeg";
import pokeJs from "../assets/img/pokeJs.gif";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import './main.css'
import TrackVisibility from 'react-on-screen';
import { useLayoutEffect, useRef, useState } from "react";

export const Projects = () => {
  const ref = useRef(null);

  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    setWidth(ref.current.offsetWidth);
  }, []);


  const projectsHtml = [
    {
      title: "Consumiendo Infernos",
      description: "ReactJs & FireBase",
      imgUrl: consumiendo,
      link: 'https://oyhamburo.github.io/ConsumiendoInfiernos/'
    },
    {
      title: "Axie Infinity",
      description: "HTML & CSS/SASS",
      imgUrl: axie,
      link: 'https://oyhamburo.github.io/Axie/'
    },
    {
      title: "DEFI Pokemon",
      description: "HTML & CSS/SASS",
      imgUrl: dex,
      link: 'https://oyhamburo.github.io/PokeDEX-Proyecto-CoderHouse-/'
    },
    {
      title: "Pokedex",
      description: "Javascript Vanila",
      imgUrl: pokedex,
      link: 'https://oyhamburo.github.io/CoderJsPokedex/'
    },
    {
      title: "Antiguo Portfolio",
      description: "HTML & CSS/SASS",
      imgUrl: portfolio,
      link: 'https://oyhamburo.github.io/PortfolioOld/'
    }
  ]
  const projectsNode = [
    {
      title: "Cerchio Resto",
      description: "ReactJs & NodeJs",
      imgUrl: cerchio,
      link: 'https://www.cerchioresto.com'
    },
    {
      title: "Pokemon Javascript",
      description: "Javascript & NodeJs",
      imgUrl: pokeJs,
      link: 'https://pokejs-production.up.railway.app'
    }
  ]




  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>Una pequeña galería con los proyectos que he realizado, esperando poder expandirlo muy pronto.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab" ref={ref}>
                      <Nav.Item>
                        <Nav.Link eventKey="first" className="navBtn" >{width > 900 ? 'HTML / CSS / Javascript' : 'Html/Css'}</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second" className="navBtn" >NodeJs</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third" className="navBtn" >PHP</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row className="html" >
                          {
                            projectsHtml.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row className="node" >
                          {
                            projectsNode.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row className="php" >
                          In Process
                          {/* {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          } */}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
