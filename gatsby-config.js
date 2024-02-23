require(`dotenv`).config({
  path: `.env`,
});

const siteMetadata = {
  siteTitle: `kanazawa.js`,
  siteTitleAlt: `kanazawa.js - 石川県金沢市のJavaScriptコミュニティ「Kanazawa.js」です`,
  siteHeadline: `kanazawa.js - 石川県金沢市のJavaScriptコミュニティ「Kanazawa.js」です`,
  siteUrl: `https://kanazawa-js.github.io`,
  siteDescription: `石川県金沢市のJavaScriptコミュニティ「Kanazawa.js」です`,
  siteLanguage: `ja`,
  siteImage: `/banner.png`,
  author: `@knzw_js`,
  socialLinks: [
    {
      name: `Twitter`,
      url: `https://twitter.com/knzw_js`,
    },
    {
      name: `Facebook`,
      url: `https://www.facebook.com/kanazawajs/`,
    },
    {
      name: `Github`,
      url: `https://github.com/kanazawa-js`,
    },
    {
      name: `Connpass`,
      url: `https://kanazawajs.connpass.com/`,
    },
  ],
  navigation: [
    {
      title: `コミュニティ概要`,
      slug: `/about`,
    },
    {
      title: `行動規範`,
      slug: `/code-of-conduct`,
    },
    {
      title: `イベントレポート`,
      slug: `/blog`,
    },
  ],
  connpassEventPath: ``,
  connpassEvent: [
    {
      event_Id: 310277,
      title: `Kanazawa.js わいわい開発LT会 #35`,
      event_url: `https://kanazawajs.connpass.com/event/310277`,
      started_at: `2020-03-14`,
      ended_at:
      place:
      address:
    },
  ],
};

module.exports = {
  siteMetadata,
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      options: {},
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `kanazawa.js`,
        short_name: `kanazawa.js`,
        description: `石川県金沢市のJavaScriptコミュニティ「Kanazawa.js」です`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `minimal-ui`,
        icon: `static/banner.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    // `gatsby-plugin-webpack-bundle-analyser-v2`,
  ],
};
