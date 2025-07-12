import React, { useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import Heading from "../components/Heading";
import { FaSignLanguage } from "../components/Icons";
import * as styles from "./Languages.module.css";

const Languages = () => {
  const data = useStaticQuery(graphql`
    {
      allLanguagesJson {
        edges {
          node {
            id
            text
            translation
            language
          }
        }
      }
    }
  `);

  return (
    <section id="languages">
      <Heading icon={FaSignLanguage} title="Languages" />

      <div className="h-48 md:h-40 lg:h-32 wow fadeIn">
        {data.allLanguagesJson.edges.length > 0 && (
          <div>
            <h2 className="text-4xl pb-2">
              {data.allLanguagesJson.edges[0].node.text}
            </h2>
            <span className="italic w-3">
              {data.allLanguagesJson.edges[0].node.translation}
            </span>
          </div>
        )}
      </div>

      <div className="mt-12 flex flex-wrap">
        {data.allLanguagesJson.edges.map(({ node }) => {
          return (
            <div key={node.id} className={styles.language}>
              <span>{node.language}</span>
              <span className={styles.divider}>/</span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Languages;
