const path = require(`path`);
const resolveConfig = require("tailwindcss/resolveConfig");
const tailwindConfig = require("./tailwind.config.js");

const fullConfig = resolveConfig(tailwindConfig);

module.exports = {
    pathPrefix: "/portfolio",
    siteMetadata: {
        title: `Amit Friedberg - Full Stack Web Developer`,
        //description: `Are you a startup looking for a full stack web developer to help you bring your vision to life? Look no further than [your name]! I have over 10 years of experience in the software industry, and I have a proven track record of success in delivering high-quality web products. I am proficient in all aspects of web development, from front-end to back-end, and I am always up-to-date on the latest technologies. I am also a great communicator and I am passionate about helping startups succeed.`,
        description: `Welcome to my portfolio website! As a dynamic and innovative full-stack web developer, I am dedicated to providing top-notch web product development services to ambitious startup companies in the software industry. With a passion for crafting cutting-edge digital experiences, I strive to transform ideas into reality through seamless code and intuitive user interfaces. Explore my diverse projects and discover how my technical expertise and creative flair can elevate your business to new heights. Let's collaborate and build the future together!`,
        author: `Amit Friedberg`,
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
                background_color: fullConfig.theme.colors.white,
                theme_color: fullConfig.theme.colors.teal[`500`],
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
    {
      resolve: `gatsby-source-dev`,
      options: {
        username: `amruthpillai`,
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
      resolve: `gatsby-source-instagram`,
      options: {
        username: `amitfriedberg`,
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require(`tailwindcss`)(tailwindConfig),
          require(`autoprefixer`),
          ...(process.env.NODE_ENV === `production`
            ? [require(`cssnano`)]
            : []),
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
