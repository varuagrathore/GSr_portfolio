import React from "react";
import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container ">
        {/* left side */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: "0rem", opacity: 1 }} // Change opacity to 1
              transition={{ duration: 2, type: "spring" }}
            >
              Gaurav<br />
              Singh <br /> Rathore
            </motion.h1>
          </div>
          <div className="flexColStart hero-dis">
            <span className="secondaryText">
              Eager B.Tech student at NIT Delhi with good knowledge of Python,
              C++, and C.
            </span>
            <span className="secondaryText">
              Focused on mastering data analytics tools like Microsoft Power BI,
              Excel, and SQL.
            </span>
            <span className="secondaryText">
              Committed to honing skills in data visualization and statistical
              analysis
            </span>
            <span className="secondaryText">
              to drive informed decision-making and innovation in the field.
            </span>
          </div>
          {/* <div className="flexCenter search-bar">
            <HiLocationMarker color="var(--blue" size={25} />
            <input type="text" />
            <button className="button">Search</button>
          </div> */}
        </div>
        {/*right side*/}
        <div className="flexCenter hero-right">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, type: "spring", delay: 0.5 }}
          >
            {" "}
            {/* Increase duration to 2 seconds */}
            <div className="image-container">
              <img src="./c1.jpg" alt="" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
