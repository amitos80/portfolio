const path = require(`path`);
const tailwindConfig = require("./tailwind.config.js");

module.exports = {
    pathPrefix: "/portfolio",
    siteMetadata: {
        title: `Amit Friedberg - Senior Full-Stack Web Developer`,
        description: `Senior Full-Stack Web Developer with over a decade of experience in building modern, responsive, and scalable web applications. Proficient in JavaScript, React, Node.js, Python, AI/ML, UI/UX Design, Cloud, DevOps, and cybersecurity. Let's build something great together.`,
        author: `Amit Friedberg`,
        image: `https://amitos80.github.io/portfolio/static/photo-a665551193e5da452d16e2b293d4407e.png`,
        keywords: `Full-Stack, Web Developer, JavaScript, React, Node.js, Python, AI, ML, UI, UX, Cloud, DevOps, Cybersecurity, Portfolio, Amit Friedberg`,
    },
    plugins: [
        `gatsby-plugin-eslint`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Amit Friedberg - Full Stack Web Developer`,
                short_name: `Amit Friedberg's Resume`,
                start_url: `/portfolio`,
                background_color: `#ffffff`,
                theme_color: `#4fd1c5`,
                display: `minimal-ui`,
                icon: `src/images/icon.png`,
                cache_busting_mode: `none`,
            },
        },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        workboxConfig: {
          globPatterns: [`**/*`],
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Fira Sans:400,600`],
        display: `swap`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown`,
        path: path.join(__dirname, `src`, `markdown`),
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: path.join(__dirname, `src`, `data`),
      },
    },
    
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require(`@tailwindcss/postcss`)(tailwindConfig),
          require(`autoprefixer`),
        ],
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
        purgeOnly: [`src/css/tailwind.css`],
      },
    },
  ],
};
