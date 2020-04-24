import { graphql, useStaticQuery } from "gatsby";
import GatsbyImage from "gatsby-image";
import Parallax from "parallax-js";
import React, { useRef, useState, useEffect } from "react";
import ReactTooltip from "react-tooltip";
import Social from "../components/Social";
import Subtitle from "../components/Subtitle";

const Hero = () => {
  const parallaxRef = useRef(null);
  const [parallax, setParallax] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [showSocial, setShowSocial] = useState(false);
  const data = useStaticQuery(graphql`
    {
      photo: file(relativePath: { eq: "photo.png" }) {
        childImageSharp {
          fixed(width: 200, height: 200) {
            ...GatsbyImageSharpFixed
          }
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

  useEffect(() => {
    if (!isMobile) {
      setParallax(
        new Parallax(parallaxRef.current, {
          invertX: false,
          invertY: false,
        }),
      );
    }

    return () => {
      parallax && parallax.destroy();
    };
  }, [parallaxRef]);

  return (
    <section style={{ minHeight: '50vh' }} id="hero" className="min-h-screen flex items-center container">
      <div className="w-full grid grid-cols-1 lg:grid-cols-5 row-gap-8 lg:gap-16 justify-center lg:justify-start items-center mt-8 md:mt-12 lg:mt-0">
        <div ref={parallaxRef} className="col-span-2">
          <div style={{ width: '200px' }} className="mx-auto" data-depth="0.4">
            <GatsbyImage loading="lazy" {...data.photo.childImageSharp} />
              <div style={{ width: '138px' }} className="mx-auto h-6 my-6">
                  {showSocial && <Social />}
              </div>
          </div>
        </div>
        <div className="col-span-3">


          <h1 className="sr-only">
            Amit Friedberg<br />
            Software development enthusiastic with passion for web development and the js echo-system.
            Developer/Instructor/Maker/Guitar Player
          </h1>

          <div className="text-center lg:text-left flex flex-col items-center lg:ml-4 lg:items-start">
            <Subtitle
              onDone={() => {
                setShowSocial(true);
                ReactTooltip.rebuild();
              }}
            />


          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
