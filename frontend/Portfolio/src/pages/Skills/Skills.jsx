import React from "react";
import { motion } from "framer-motion";
import { Tooltip } from "react-tooltip";
import python from "../../images/python.png";
import django from "../../images/django.png";
import javascript from "../../images/javascript.png";
import react from "../../images/react.png";
import html from "../../images/html.png";
import sass from "../../images/sass.png";

import MotionWrapper from "../component/MotionWrapper";
import Wrapper from "../component/Wrapper";
import "./Skills.scss";

const Skills = () => {
  const skills = [
    { name: "Python", icon: python },
    { name: "Django", icon: django },
    { name: "JavaScript", icon: javascript },
    { name: "React", icon: react },
    { name: "Html5", icon: html },
    { name: "Sass", icon: sass },
  ];
  const experiences = [
    {
      works: [
        {
          name: "PrevenX",
          company: "ConcordiaLabs",
          description:
            "PrevenX is a CMMS software for asset management and maintenance. Modern management for your maintenance, all information in the cloud and centralized on a single Web and Mobile platform.",
        },
        {
          name: "amsm",
          company: "ConcordiaLabs",
          description: "another description",
        },
      ],
      year: "2022/2023",
    },
    // {
    //   works: [
    //     { name: "Preven", company: "Ztech", description: "description" },
    //     { name: "amsm", company: "Ztech", description: "another description" },
    //   ],
    //   year: "2023",
    // },
  ];
  return (
    <>
      <h2 className="head-text">Skills & Experiences</h2>

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
                <img src={skill.icon} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="skills-exp">
          {experiences?.map((experience) => (
            <motion.div className="skills-exp-item" key={`${experience.year}`}>
              <div className="skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="skills-exp-works">
                {experience?.works?.map((work) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="skills-exp-work"
                      data-tip
                      data-for={work.name}
                      key={work.name}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                    </motion.div>
<<<<<<< HEAD
                    <div
                      id={work.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip"
                    >
                      {work.description}
                    </div>
=======
                    <div id={work.name}>{work.description}</div>
>>>>>>> 16074555d73048656fa2aaa14404dd0df1302227
                  </>
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
