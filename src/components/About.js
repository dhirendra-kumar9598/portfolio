import React from "react";
import Skills from "./Skills";
import Education from "./Education";
import Experience from "./Experience";

const FOCUS = [
  {
    label: "Frontend",
    items: [
      "React · React Native",
      "Angular",
      "TypeScript",
      "Tailwind · MUI",
    ],
  },
  {
    label: "Backend",
    items: [
      "Node.js · Fastify · Express",
      "PostgreSQL · Prisma",
      "Redis · BullMQ",
      "Multi-tenant SaaS",
    ],
  },
  {
    label: "Generative AI",
    items: [
      "Agents & workflows",
      "OpenAI · OpenRouter",
      "RAG · vector search",
      "Voice — Twilio · ElevenLabs",
    ],
  },
];

const About = () => {
  return (
    <div id="about">
      <div className="gh-section-head gh-reveal" data-num="01">
        <span className="gh-label">About</span>
        <h1 className="boldHeading">My Story</h1>
      </div>

      <div className="about-grid">
        <figure className="about-story gh-reveal gh-reveal-d1">
          <blockquote className="blockquote">
            <p>
              I'm Dhirendra Kumar, a senior full-stack engineer
              specializing in generative AI.
            </p>
            <p>
              I take products from idea to production. On the front end I
              build for web and mobile with React, React Native, and
              Angular; on the back end, Node.js and TypeScript services
              over PostgreSQL and Redis, designed multi-tenant from the
              start.
            </p>
            <p>
              My work now centres on applied AI, designing autonomous
              agents and multi-step workflows on OpenAI, OpenRouter, and
              other model providers. I've shipped retrieval-augmented
              generation with hybrid vector search and reranking, structured
              tool use, and real-time voice agents on Twilio and ElevenLabs.
            </p>
            <p style={{ marginBottom: 0 }}>
              I care about the fundamentals: clean architecture, deliberate
              trade-offs, and code that stays a pleasure to maintain.
            </p>
          </blockquote>
        </figure>

        <aside className="about-focus gh-reveal gh-reveal-d2" aria-label="What I work with">
          {FOCUS.map((group) => (
            <div className="focus-group" key={group.label}>
              <h4 className="focus-label">{group.label}</h4>
              <ul className="focus-list">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </aside>
      </div>

      <div className="career-grid">
        <Experience />
        <Education />
      </div>

      <Skills />
    </div>
  );
};

export default About;
