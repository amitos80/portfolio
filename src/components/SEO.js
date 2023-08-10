
import React from "react";
import { Helmet } from "react-helmet";

const SEO = () => {

    const site = {
        siteMetadata: {
            title: 'Amit Friedberg - Full Stack Web Developer',
            description: 'Welcome to my portfolio website! As a dynamic and innovative full-stack web developer, I am dedicated to providing top-notch web product development services to ambitious startup companies in the software industry. With a passion for crafting cutting-edge digital experiences, I strive to transform ideas into reality through seamless code and intuitive user interfaces. Explore my diverse projects and discover how my technical expertise and creative flair can elevate your business to new heights. Let\'s collaborate and build the future together!',
            author: 'Amit Friedberg',
            image: 'https://amitos80.github.io/static/aec40c5d062faba36e6e805e0c1a7dd6/b3a76/photo.png'
        }
    }
  const title = site.siteMetadata.title;
  const description = site.siteMetadata.description;
  const author = site.siteMetadata.author;
  const image = site.siteMetadata.image;

  return (
    <Helmet
      htmlAttributes={{ lang: "en" }}
      defer={true}
      title={title}
      meta={[
        {
          name: `description`,
          content: description,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: "og:image",
          content: image,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: description,
        },
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
      ]}
    />
  );
};

export default SEO;
