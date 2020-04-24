import { graphql, useStaticQuery } from "gatsby";
import React from "react";



const AboutMe = () => {
  const data = useStaticQuery(graphql`
    {
      markdownRemark(frontmatter: { id: { eq: "about-me" } }) {
        html
      }
    }
  `);

  return (
    <section id="about-me">


      <div className="grid lg:grid-cols-6 gap-12 items-center">
        <div
          className="text-justify md:col-span-4 lg:col-span-6 wow fadeIn"
          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
        />
      </div>
    </section>
  );
};

export default AboutMe;
