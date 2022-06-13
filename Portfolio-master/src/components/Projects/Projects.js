import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.jpeg";
import orbitz from "../../Assets/Projects/orbitz.JPG";
import sephora from "../../Assets/Projects/sephora.JPG";
import suicide from "../../Assets/Projects/suicide.png";
import mytheresa from "../../Assets/Projects/mytheresa.JPG";

function Projects() {
  return (
    <Container fluid className = "project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          A showcase of some of my recent projects.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sephora}
              isBlog={false}
              title="Sephora.com"
              description="Sephora.com is a cosmetic website. My project is a clone of the original website. It has a signup page, a login page and a completely functional payment page. Technology used is HTML, CSS & Javascript."
              link="https://github.com/Sephora-Clone/Sephora-Online-Beauty-Products"
              live_link="https://papaya-medovik-778f4e.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mytheresa}
              isBlog={false}
              title="Mytheresa.com"
              description="MyTheresa.com is a complete fashion, wardrobe and attire speacialist website. It has a signup page, a login page and a completely functional payment page. Technology used is HTML, CSS & Javascript. Data fetching is also used."
              link="https://github.com/abhishekskmr44/my-theresa"
              live_link="https://glittering-cocada-d76c60.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={orbitz}
              isBlog={false}
              title="Orbitz.com"
              description="Orbitz.com is a an amazing travel website. Also list of hotels, cities and destinations It has a signup page, a login page and a completely functional payment page. Technology used is React JS."
              link="https://github.com/KalashThakur/Orbitz"
              live_link="https://bucolic-muffin-8abf9f.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;