import React, { useEffect, useState } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

import MotionWrapper from "../component/MotionWrapper";
import Wrapper from "../component/Wrapper";
import "./Works.scss";
import reactlogo from "../../images/react-logo.svg";
import portfolio from "../../images/portfolio.png";
import preven from "../../images/preven.png";
import hall from "../../images/hall.png";

const Works = () => {
  const works = [
    {
      name: "Portfolio",
      title: "My portfolio",
      description: "My Portfolio build with React JS and Scss",
      img: portfolio,
      codeLink: "https://github.com/Ismael-Torresan/Portfolio",
      tags: ["React JS", "Web"],
    },
    {
      name: "Preven",
      title: "Maintenance App",
      description:
        " PrevenX is a CMMS software for asset management and maintenance.",
      img: preven,
      projectLink: "https://landing.prevenx.com/",
      codeLink: "",
      tags: ["React JS", "Django"],
    },
    {
      name: "Hall",
      title: "Sport Club App",
      description:
        " Management SaaS for sport clubs, gyms, and personal trainers.",
      img: hall,
      projectLink: "",
      codeLink: "",
      tags: ["React JS", "Django"],
    },
  ];

  useEffect(
    () => {
      setFilterWork(works);
    },
    // eslint-disable-next-line
    []
  );

  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    // console.log(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);
      setFilterWork(works);

      if (!item || item === "All") {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };
  // console.log(filterWork);

  return (
    <div id="work">
      <h2 className="head-text">Projects i have been involved</h2>

      <div className="work-filter">
        {["Web", "Django", "React JS", "All"].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`work-filter-item flex p-text ${
              activeFilter === item ? "item-active" : ""
            }`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="work-portfolio"
      >
        {(filterWork || []).map((work, index) => (
          <div className="work-item flex" key={index}>
            <div className="work-img flex">
              <img
                style={{ background: "#edf2f8" }}
                src={work.img}
                alt={work.name}
              />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.4,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className="work-hover flex"
              >
                {work.projectLink && (
                  <a href={work.projectLink} target="_blank" rel="noreferrer">
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.4 }}
                      className="flex"
                    >
                      <AiFillEye />
                    </motion.div>
                  </a>
                )}
                {work.codeLink && (
                  <a href={work.codeLink} target="_blank" rel="noreferrer">
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.4 }}
                      className="flex"
                    >
                      <AiFillGithub />
                    </motion.div>
                  </a>
                )}
              </motion.div>
            </div>

            <div className="work-content flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>
                {work.description}
              </p>

              <div className="work-tag flex">
                <p className="p-text">
                  {work?.tags === 1 ? work.tags : work.tags.join(" - ")}
                </p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Wrapper(MotionWrapper(Works, "works"), "works", "primarybg");
