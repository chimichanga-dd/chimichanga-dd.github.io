import React from "react";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

class About extends React.Component {
  constructor(props) {
    super(props);

    this._isMounted = false;

    this.state = {
      showOccupation: false
    };
    this.updateState = this.updateState.bind(this);
    this.sleepyUpdate = this.sleepyUpdate.bind(this);
  }

  componentDidMount() {
    this._isMounted = true;
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  updateState(bool) {
    if (this._isMounted) {
      this.setState({ showOccupation: bool });
    }
  }

  sleepyUpdate() {
    setTimeout(() => this.updateState(false), 2500);
  }

  showOccupation() {
    if (this.state.showOccupation) {
      return `["Software Engineer"]`;
    }
    return null;
  }

  render() {
    return (
      <div className="about-container">
        <div className="console-top">
          <div className="red-button fake-icon"></div>
          <div className="yellow-button fake-icon"></div>
          <div className="green-button fake-icon"></div>
        </div>
        <ul className="console-bottom">
          <li
            className="resume"
            key={"resume"}
          >
            <div className="resume input">
              <span className="arrow">></span>David.resume
            </div>
            <div className="resume output">
              ["<Link to="/resume">Resume</Link>"]
            </div>
          </li>

          <li
            className="education"
            key={"education"}
          >
            <div className="education input">
              <span className="arrow">></span>David.education
            </div>
            <div className="education output">
              [" B.A. Geography - University of California Los Angeles", "Self
              Study - App Academy Full Stack Bootcamp"]
            </div>
          </li>

          <li
            className="tech"
            key={"tech"}
          >
            <div className="tech input">
              <span className="arrow">></span>David.techStack
            </div>
            <div className="tech output">
              ["HTML", "CSS", "Javascript", "React", "Redux", "Node",
              "PostgreSQL", "Python", "Rails", "Ruby", "GIS"]
            </div>
          </li>

          <li
            className="interests"
            key={"interests"}
          >
            <div className="interests input">
              <span className="arrow">></span>David.interests
            </div>
            <div className="interests output">
              ["Skateboarding", "Rock Climbing", "League of Legends", "Apparel"]
            </div>
          </li>

          <li className="contact-info">
            <div className="contact-info input">
              <span className="arrow">></span>David.contactInfo
            </div>
            <div className="contact-info output">
              ["
              <a
                href="mailto:me@daviddixon.io"
                target="_blank"
                alt="email address"
                rel="noopener"
              >
                me@daviddixon.io
              </a>
              ", "
              <a
                href="https://www.linkedin.com/in/david-d-b36589190/"
                target="_blank"
                alt="linkedin link"
                rel="noopener"
              >
                LinkedIn
              </a>
              ", "
              <a
                href="https://github.com/chimichanga-dd"
                target="_blank"
                alt="github link"
                rel="noopener"
              >
                GitHub
              </a>
              "]
            </div>
          </li>

          <li
            className="occupation"
            key={"occupation"}
          >
            <div className="occupation input">
              <span className="arrow">></span>
              <TypeAnimation
                sequence={[
                  () => {
                    this.updateState(false);
                  },
                  "David.Occupation",
                  0,
                  () => {
                    this.updateState(true);
                  },
                  "David.Occupation",
                  3700,
                  () => {
                    this.updateState(false);
                  },
                  "",
                  0
                ]}
                repeat={Infinity}
                deletionSpeed={99}
              />
            </div>
            <div className="occupation output">{this.showOccupation()}</div>
          </li>
        </ul>
      </div>
    );
  }
}

export default About;
