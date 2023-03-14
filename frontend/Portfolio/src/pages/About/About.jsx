import "./About.scss";
import { motion } from "framer-motion";
import git from "../../images/git.png";
import Wrapper from "../component/Wrapper";

const abouts = [
  {
    title: "web Developer",
    description: "I am a good Developer.",
    imgUrl: git,
  },
  { title: "Backend", description: "I am a good Developer.", imgUrl: git },
  { title: "Frontend", description: "I am a good Developer.", imgUrl: git },
  {
    title: "Manager",
    description: "I am a good Developer.",
    imgUrl: git,
  },
];

const About = () => {
  return (
    <>
      <h2 id="about" className="head-text">
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
    </>
  );
};

export default Wrapper(About, "whitebg");
