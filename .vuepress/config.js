module.exports = {
  base: "/learning-source/",
  title: "Learning Source",
  description: "Links, videos, tutorials about learning",
  redirectPath: "/id/",
  locales: {
    "/id/": {
      lang: "id-ID",
      title: "Learning Source",
      description: "Just playing arounds"
    }
  },

  themeConfig: {
    serviceWorker: {
      updatePopup: true // Boolean | Object, default to undefined.
    },
    lastUpdated: "Last Updated", // string | boolean
    docsBranch: "master",
    // defaults to false, set to true to enable
    editLinks: true,
    // custom text for edit link. Defaults to "Edit this page"
    editLinkText: "Help us improve this page!",
    logo: "https://img.icons8.com/dotty/344/learning.png",
    displayAllHeaders: true,
    nav: [
      { text: "Home", link: "/" },
      { text: "Tags", link: "/tags" },
      { text: "Github", link: "https://github.com/puterakahfi/learning-source" }
    ],
    locales: {
      "/id/": {
        lang: "bahasa", // this will be set as the lang attribute on <html>
        title: "VuePress",
        description: "Vue-powered Static Site Generator",
        sidebar: [
          {
            title: "flutter",
            children: ["id/flutter/"]
          },
          {
            title: "gridsome",
            children: ["id/gridsome/"]
          },
          {
            title: "javascript",
            children: ["id/javascript/"]
          },
          {
            title: "nuxtjs",
            children: ["id/nuxtjs/"]
          },
          {
            title: "symfony framework",
            children: ["id/symfony-fw/"]
          },
          {
            title: "software development",
            children: ["id/software-dev/"]
          },
          {
            title: "vuejs",
            children: ["id/vuejs/"]
          },
          {
            title: "vuepress",
            children: ["id/vuepress/"]
          },
          {
            title: "yarn",
            children: ["id/yarn/troubleshoot/"]
          }
        ]
      }
    }
  }
};
