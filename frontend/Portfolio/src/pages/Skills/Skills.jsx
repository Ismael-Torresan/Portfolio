import React from "react";
import { motion } from "framer-motion";
import { Tooltip } from "react-tooltip";
import html from "../../images/html.png";

import MotionWrapper from "../component/MotionWrapper";
import Wrapper from "../component/Wrapper";
import "./Skills.scss";

const Skills = () => {
  const skills = [
    { name: "Name", icon: html },
    { name: "second name", icon: html },
  ];
  const experiences = [
    {
      works: [
        { name: "Preven", company: "Ztech", description: "description" },
        { name: "amsm", company: "Ztech", description: "another description" },
      ],
      year: "2022",
    },
    {
      works: [
        { name: "Preven", company: "Ztech", description: "description" },
        { name: "amsm", company: "Ztech", description: "another description" },
      ],
      year: "2023",
    },
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
                    <Tooltip
                      id={work.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip"
                    >
                      {work.description}
                    </Tooltip>
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
