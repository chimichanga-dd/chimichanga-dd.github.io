import React from "react";
import demo_lotg from "../images/demo/lotg_demo.png";
import demo_1024 from "../images/demo/1024_demo.png";
import demo_emoji from "../images/demo/emoji_demo.png";
import demo_gpx from "../images/demo/gpx_merge_n_plot.png";

const projectList = [
  {
    name: "GPX Merge n Plot",
    description: `It is a set of scripts that merges, overlays, and animates 
                    "unlimited" GPX activities. The result is an .MP4 showing 
                    efforts over time. I wanted to visualize 2 years of running 
                    in San Francisco, but was unable to find a tool that would do 
                    this. Other tools exist to handle "replays", but none work with 
                    more then a single GPX file. Built around the Strava bulk 
                    export, this script can ingest multiple files and multiple file 
                    types (.gpx, .fit, .tcx). A web app version is in the works.
    `,
    tech: ["Python3", "MatPlotLib", ".gpx/.fit/.tcx"],
    links: {
      live: "https://youtu.be/9nAHQXX2guE",
      source: "https://github.com/chimichanga-dd/gpx_animation"
    },
    demo: demo_gpx
  },
  {
    name: "Roll Emoji",
    description: `Roll Emoji is a web application featuring a rollable die and chat room. The application was created
                    to answer the question, "Who should handle deployment tasks?" The lowest roll "wins" the job. Teams no
                    longer need to switch between screen sharing, as the die will broadcast its result live. Reactions 
                    are shared by clicking on the various emojis, or by typing in the chat.`,
    tech: ["HTML5", "CSS (SCSS)", "Javascript (ES6)", "React", "Socket.io"],
    links: {
      live: "https://roll-emoji.daviddixon.io/",
      source: "https://github.com/chimichanga-dd/roll-emoji"
    },
    demo: demo_emoji
  },
  {
    name: "Lord of the Gram",
    description: `Lord of the Gram is a clone of the popular social media app - InstaGram. 
                      It features accounts and posts made by fictional characters from the Lord
                      of the Rings book. Post your own content, follow other users, scroll through
                      your feed and like the posts you like!`,
    tech: [
      "Ruby",
      "Rails",
      "HTML5",
      "CSS (SASS)",
      "Javascript (ES6)",
      "React",
      "Redux",
      "PostgreSQL"
    ],
    links: {
      live: "https://lotg.daviddixon.io/",
      source: "https://github.com/chimichanga-dd/LordOfTheGram"
    },
    demo: demo_lotg
  },
  {
    name: "1024",
    description: `1024 is a clone of a clone (2048) of a clone (1024) of a game (threes).
                      A player slides tiles using arrow keys, combining those that have the same value.
                      Create a "1024" and win the game before running out of space.`,
    tech: ["HTML5", "CSS3", "Javascript (ES6)", "React"],
    links: {
      live: "https://1024.daviddixon.io/",
      source: "https://github.com/chimichanga-dd/1024"
    },
    demo: demo_1024
  }
];

const Projects = () => {
  return (
    <div
      id="Projects"
      className="projects-container"
    >
      <h2 className="section-header">Projects</h2>
      <div className="line-break"></div>
      {projectList.map((proj) => {
        return (
          <div
            className={`proj`}
            key={proj.name}
          >
            <div className="proj-pic">
              <img
                src={proj.demo}
                alt={`demo for ${proj.name}`}
                className="proj-demo"
              />
            </div>
            <h3 className={"proj-name"}>{proj.name}</h3>
            <div className={"proj-description"}>{proj.description}</div>
            <ul className={"proj-tech"}>
              {proj.tech.map((tech, idx) => {
                return (
                  <li
                    className="tech-buttons"
                    key={`tech-${idx}`}
                  >
                    {tech}
                  </li>
                );
              })}
            </ul>
            <div className="proj-links">
              <a
                href={proj.links.live}
                target="_blank"
                className="live-link"
              >
                Demo
              </a>
              <a
                href={proj.links.source}
                target="_blank"
                className="source-link"
              >
                Source
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
