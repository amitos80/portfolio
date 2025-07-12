import SEO from "../components/SEO";
import React, { useContext } from "react";
import { graphql } from "gatsby";
import Wrapper from "../components/Wrapper";
import AboutMe from "../sections/AboutMe";
import Education from "../sections/Education";
import Footer from "../sections/Footer";
import Hero from "../sections/Hero";
import Languages from "../sections/Languages";
import Projects from "../sections/Projects";
import Resume from "../sections/Resume";
import Skills from "../sections/Skills";
import Work from "../sections/Work";
import { ThemeContext } from "../context/ThemeContext";
import * as styles from "./index.module.css";

const IndexPage = ({ data }) => {
  const { dark } = useContext(ThemeContext);

  return (
    <Wrapper>
      <SEO />
      <div className={`container ${styles.layout}`}>
        <Hero />
        <AboutMe />
        <Projects />
        <div className={styles.workEducation}>
          <Work />
          <Education data={data} dark={dark} />
        </div>
        <Skills />
        <Resume />
        <Languages />
        <Footer />
      </div>
    </Wrapper>
  );
};

export default IndexPage;

export const query = graphql`
  query {
    allEducationJson {
      edges {
        node {
          id
          title
          subtitle
          period
          icon {
            childImageSharp {
              gatsbyImageData(width: 32, height: 32, layout: FIXED)
            }
          }
        }
      }
    }
  }
`;
