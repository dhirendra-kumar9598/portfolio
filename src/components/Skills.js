import React from "react";
import HtmlLan from "../components/images/Languages/html-5.png";
import Css from "../components/images/Languages/css-3.png";
import JS from "../components/images/Languages/js.png";
import JAVA from "../components/images/Languages/java.png";
import C from "../components/images/Languages/c-.png";
import TS from "../components/images/Languages/typescript1.png";
import Node from "../components/images/Tech/node-js-icon.webp";
import Express from "../components/images/Tech/express-js-icon.webp";
import Reacts from "../components/images/Tech/react-js-icon.webp";
import Mongo from "../components/images/Tech/mongodb-icon.webp";
import Mysql from "./images/Tech/pngwing.com.png";
import Next from "../components/images/Tech/nextjs-icon.webp";
import React_Native from "../components/images/Tech/react-native.webp";
import Bootstrap from "../components/images/Tech/boostrap.jpeg";
import Git from "../components/images/Tech/git.png";
import Npm from "../components/images/Tech/npm.png";
import MUI from "../components/images/Tech/mui.png";
import Angular from "../components/images/Tech/angular.png";

const LANGUAGES = [
  { name: "HTML",       picture: HtmlLan },
  { name: "CSS",        picture: Css },
  { name: "JavaScript", picture: JS },
  { name: "TypeScript", picture: TS },
  { name: "Java",       picture: JAVA },
  { name: "C / C++",   picture: C },
];

const TECHNOLOGIES = [
  { name: "React",        picture: Reacts },
  { name: "Node.js",      picture: Node },
  { name: "Express",      picture: Express },
  { name: "React Native", picture: React_Native },
  { name: "Next.js",      picture: Next },
  { name: "Angular",      picture: Angular },
  { name: "MUI",          picture: MUI },
  { name: "Bootstrap",    picture: Bootstrap },
  { name: "Git",          picture: Git },
  { name: "npm",          picture: Npm },
];

const DATABASES = [
  { name: "MySQL",   picture: Mysql },
  { name: "MongoDB", picture: Mongo },
];

const SkillGrid = ({ items }) => (
  <div className="skill-grid gh-reveal">
    {items.map((item, i) => (
      <div
        className="skillBox"
        key={i}
        style={{ transitionDelay: `${i * 0.04}s` }}
      >
        <img loading="lazy" src={item.picture} className="skillItem" alt={item.name} />
        <h5 style={{ fontSize: "0.72rem", color: "var(--gh-text-muted)", textAlign: "center", margin: 0 }}>
          {item.name}
        </h5>
      </div>
    ))}
  </div>
);

const Skills = () => (
  <div className="skills-section">
    <div className="gh-section-head gh-reveal">
      <span className="gh-label">Skills</span>
      <h1 className="boldHeading">Skills</h1>
    </div>

    <p className="skill-category-label">Languages</p>
    <SkillGrid items={LANGUAGES} />

    <p className="skill-category-label" style={{ marginTop: "32px" }}>Frameworks & Tools</p>
    <SkillGrid items={TECHNOLOGIES} />

    <p className="skill-category-label" style={{ marginTop: "32px" }}>Databases</p>
    <SkillGrid items={DATABASES} />
  </div>
);

export default Skills;
