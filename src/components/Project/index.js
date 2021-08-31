import React from "react";
// import Image from "../../assets/images/falconry-blog.png";
import projects from "../../project.json";
import { Card, Button } from 'react-bootstrap';


  export default function Project(props) {
    return (
      <section id="projects">
        <h2 className="top-title">Projects</h2>
        <div>
          <div>
            {projects.map((project) => (
          <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={project.image} alt={project.title} />
           <Card.Body>
             <Card.Title>{project.title}</Card.Title>
              <Card.Text>
                {project.subtitle}
             </Card.Text>
           <Button variant="primary" href={project.link}>Visit Site</Button>
           <Button variant="secondary" href={project.github}>Github</Button>
          </Card.Body>
        </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }
