import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import Heading from "../components/Heading";
import { MdSchool } from "../components/Icons";

const Education = ({ data, dark }) => {
  return (
    <section id="education">
      

      <div className="flex">
        <div className="w-1 bg-gray-500 rounded-full md:ml-6 opacity-25" />
        <div className="-ml-2">
          {data.allEducationJson.edges.map(({ node }, index) => {
            return (
              <div
                key={node.id}
                className="py-4 flex"
              >
                <div
                  className={`relative mt-3 w-3 h-3 rounded-full shadow-lg opacity-75 z-2 ${
                    dark ? "bg-white" : "bg-primary-500"
                  } duration-200`}
                  data-tip={`(${node.period})`}
                  data-place="left"
                />
                <div className="ml-8">
                  <GatsbyImage
                    image={node.icon.childImageSharp.gatsbyImageData}
                    className="w-8 h-8"
                  />
                  <h6 className="mt-3 font-semibold">{node.title}</h6>
                  <h6 className="text-sm">{node.subtitle}</h6>
                  <h6 className="mt-2 text-xs">({node.period})</h6>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;
