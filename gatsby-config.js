module.exports = {
  siteMetadata: {
    title: "",
    author: "Pascale Audet",
    description: "",
    image: "/icons/icon-512x512.png",
    language: "en-ca",
    siteUrl: "https://audetpascale.com",
    twitterUsername: "audetpascalea",
  },
  plugins: [
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-theme-ui",
    "gatsby-plugin-well-known",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    "gatsby-transformer-sharp",
  ],
};
