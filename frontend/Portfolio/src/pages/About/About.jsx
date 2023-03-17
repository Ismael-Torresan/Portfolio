import "./About.scss";
import { motion } from "framer-motion";
import Wrapper from "../component/Wrapper";
import MotionWrapper from "../component/MotionWrapper";
import git3d from "../../images/git3d.jpg";

const abouts = [
  {
    title: "Full Stack Dev",
    description:
      "My career as a developer started in 2022, working with backend at Concordia Labs, mainly with Django, creating apps, models and APIs. In August/2022 I started working with frontend using JS, React, CoreUi Html and Sass. Pip, Poetry, and docker are some of the tools I've been using.",
    imgUrl: git3d,
  },
];

const About = () => {
  return (
    <div id="about">
      <h2 className="head-text">
        <p>Good Code Means Good Business</p>
      </h2>
      <div className="profiles">
        {abouts.map((about) => (
          <motion.div
            className="profile-item"
            key={about.title}
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
          >
            <div className="about-item">
              <img src={about.imgUrl} alt={about.title} />
              <div className="work-content flex ">
                <h4>{about.title}</h4>
              </div>
              <figcaption className="p-text">{about.description}</figcaption>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Wrapper(MotionWrapper(About, "about"), "about", "whitebg");
