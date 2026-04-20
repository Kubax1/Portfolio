import React from "react";
import Typewriter from "typewriter-effect";
import { SiReact } from "react-icons/si";
import { FaLaravel } from "react-icons/fa6";
import { FaRegFaceLaughBeam } from "react-icons/fa6";
import { FaUserTie } from "react-icons/fa";
import classes from "./ArticlesCardsGrid.module.css";
import { FaPhp } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import { TbSql } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
function About() {
  return (
    <>
      <h1>
        <Typewriter
          options={{
            strings: ["Hi, I am Jacob!"],
            autoStart: true,
            loop: true,
          }}
        />
      </h1>
      <br></br> <br></br> <br></br>
      <div className={classes.aboutBlock}>
        I'm a Computer Science student 👨‍🎓 at the University of Silesia who turns
        ideas into real projects.
        <br></br>My projects include landing pages, e-commerce apps, and
        learning platforms.
        <br></br>
        <br></br>
        So that's what I have learned over this time 😎
        <div className={classes.flexList}>
          <div>
            <FaGithub /> Git
          </div>
          <div>
            <RiJavascriptFill /> Javascript
          </div>
          <div>
            <FaReact /> React
          </div>
          <div>
            <FaHtml5 /> HTML
          </div>
          <div>
            <FaCss3Alt /> CSS
          </div>
          <div>
            <TbSql /> SQL
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
