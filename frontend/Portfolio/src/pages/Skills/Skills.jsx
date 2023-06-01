import React from "react";
import { motion } from "framer-motion";
import python from "../../images/python.png";
import django from "../../images/django.png";
import javascript from "../../images/javascript.png";
import react from "../../images/react.png";
import html from "../../images/html.png";
import sass from "../../images/sass.png";
import git from "../../images/git.png";
import jira from "../../images/jira.svg";
import slack from "../../images/slack.png";
import nextjs from "../../images/nextjs.png";

import MotionWrapper from "../component/MotionWrapper";
import Wrapper from "../component/Wrapper";
import "./Skills.scss";

const Skills = () => {
  const skills = [
    { name: "Python", icon: python },
    { name: "Django", icon: django },
    { name: "JavaScript", icon: javascript },
    { name: "React", icon: react },
    { name: "NextJs", icon: nextjs },
    { name: "Html5", icon: html },
    { name: "Sass", icon: sass },
    { name: "GitHub", icon: git },
    { name: "Jira", icon: jira },
    { name: "Slack", icon: slack },
  ];
  const experiences = [
    {
      works: [
        {
          name: "PrevenX",
          company: "Concordia Labs",
          description:
            "PrevenX is a CMMS software for asset management and maintenance. Modern management for your maintenance, all information in the cloud and centralized on a single Web and Mobile platform.",
        },
        {
          name: "Amsm",
          company: "Concordia Labs",
          description: "another description",
        },
      ],
      year: "2022/2023",
    },
  ];
  return (
    <>
      <h2 className="head-text">Skills, Tools & Experiences</h2>

      <div className="skills-container">
        <motion.div className="skills-list">
          {skills?.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="skills-item flex"
              key={skill.name}
            >
              <div className="flex primarybg">
                <img width={"100  px"} src={skill.icon} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="skills-exp">
          {experiences?.map((experience, index) => (
            <motion.div className="skills-exp-item" key={index}>
              <div className="skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="skills-exp-works">
                {experience?.works?.map((work, index) => (
                  <div className="work-separator" key={index}>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="skills-exp-work"
                      data-tip
                      data-for={work.name}
                    >
                      <h4 className="bold-text">Name: {work.name}</h4>
                      <p className="p-text">Company: {work.company}</p>
                    </motion.div>
                    <div id={work.name}>{work.description}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Wrapper(MotionWrapper(Skills, "skills"), "skills", "whitebg");
