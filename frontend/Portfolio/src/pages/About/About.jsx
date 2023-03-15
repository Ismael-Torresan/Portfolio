import "./About.scss";
import { motion } from "framer-motion";
import git from "../../images/git.png";
import Wrapper from "../component/Wrapper";
import MotionWrapper from "../component/MotionWrapper";

const abouts = [
  {
    title: "web Developer",
    description:
      "I use HTML, CSS, and JavaScript to produce responsive websites and web apps",
    imgUrl: git,
  },
  {
    title: "Backend",
    description:
      "I've been working with backend for about an year, most with django, creating apps, models, components and APIs",
    imgUrl: git,
  },
  {
    title: "Frontend",
    description:
      "I've been working with React since august/2022 creating components ",
    imgUrl: git,
  },
];

const About = () => {
  return (
    <div id="about" style={{ height: "100vh" }}>
      <h2 className="head-text">
        <span>Good Deign is not my best</span>
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
            <picture>
              <img src={about.imgUrl} alt={about.title} />
              <figcaption className="bold-text ">
                <b>{about.title}</b>
              </figcaption>
              <figcaption className="p-text">{about.description}</figcaption>
            </picture>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Wrapper(MotionWrapper(About, "about"), "about", "whitebg");
