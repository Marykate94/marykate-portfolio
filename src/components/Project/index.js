import React from "react";
// import Image from "../../assets/images/falconry-blog.png";
import projects from "../../project.json";


  export default function Project(props) {
    return (
      <section id="projects">
        <h2 className="top-title">Projects</h2>
        <div>
          <div>
            {projects.map((project) => (
              <a
                href={project.link}
                key={project.id}
                >
                <div>
                  <img
                    alt={project.title}
        
                    src={project.image}
                  />
                  <div>
                    <h2>
                      {project.subtitle}
                    </h2>
                    <h1>
                      {project.title}
                    </h1>
                    <p>{project.github}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    );
  }