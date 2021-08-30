import React from "react";
// import Image from "../../assets/images/falconry-blog.png";
import projects from "../../project.json";
// export const projects = [
//     {
//       id: 1,
//       title: "Falconry Blog",
//       subtitle: "JavaScript, Handlebars, CSS",
//       description:
//         "A blog about Falconry",
//       image: "../../assets/images/falconry-blog.png",
//       link: "https://falconry-blog.herokuapp.com/",
//     },
//     {
//       id: 2,
//       title: "Transley Notes",
//       subtitle: "JavaScript, HTML and CSS",
//       description:
//         "Note taker application",
//       image: "../images/transley-notes.png",
//       link: "https://transley-notes.herokuapp.com",
//     },
//   ];

  export default function Project() {
    return (
      <section id="projects">
        <div>
          <div>
            {projects.map((project) => (
              <a
                href={project.link}
                key={project.id}
                >
                <div>
                  <img
                    alt="project-images"
        
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