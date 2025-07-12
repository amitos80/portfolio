import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import sections from "../data/sections";
import { IoIosColorPalette, MdMenu } from "./Icons";
import * as styles from "./Navigation.module.css";

const Navigation = () => {
  const [isMobile, setIsMobile] = useState(false);
  const { toggleDark } = useContext(ThemeContext);
  const data = useStaticQuery(graphql`
    query {
      icon: file(relativePath: { eq: "icon.png" }) {
        childImageSharp {
          gatsbyImageData(width: 32, height: 32, layout: FIXED)
        }
      }
    }
  `);

  useEffect(() => {
    if (typeof window !== `undefined`) {
      const { isMobile } = require("../utils");
      setIsMobile(isMobile);
    }
  }, []);

  const SectionLink = x => {
    const Icon = x.icon;

    return (
      <a
        style={{ color: x.color }}
        key={x.id}
        data-tip={x.title}
        data-place="right"
        href={`#${x.id}`}
      >
        <Icon />
      </a>
    );
  };

  return (
    <div
      className={`${styles.container} animated ${
        isMobile ? "fadeInDown" : "fadeInLeft"
      }`}
    >
      <a
        className="flex-center cursor-pointer"
        href="#"
        data-tip="Go to Top"
        data-place="right"
      >
        <GatsbyImage
          image={data.icon.childImageSharp.gatsbyImageData}
          className="grayscale"
        />
      </a>
      <div className="hidden md:flex flex-col justify-center items-center">
        <div className={styles.menu}>
          <MdMenu />
        </div>
        <div className={styles.sectionLinks}>{sections.map(SectionLink)}</div>
      </div>
      <div
        className="flex-center cursor-pointer hover:text-primary-500"
        onClick={toggleDark}
        data-tip="Toggle Dark Mode"
        data-place="right"
      >
      <IoIosColorPalette />
      </div>
    </div>
  );
};

export default Navigation;
