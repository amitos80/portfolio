
import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const SEO = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            image
          }
        }
      }
    `
  );

  const title = site.siteMetadata.title;
  const description = site.siteMetadata.description;
  const author = site.siteMetadata.author;
  const image = site.siteMetadata.image;

  const schema = {
    "@context": "http://schema.org",
    "@type": "Person",
    name: author,
    description: description,
    url: "https://amitos80.github.io/portfolio/",
  };

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
          content: `summary_large_image`,
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
      ]}
    >
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

export default SEO;
