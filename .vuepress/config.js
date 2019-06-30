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
    logo: 'https://img.icons8.com/dotty/344/learning.png',
    displayAllHeaders: true,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Github', link: 'https://github.com/puterakahfi/learning-source' },

    ],
    locales: {
      "/id/": {
        lang: "bahasa", // this will be set as the lang attribute on <html>
        title: "VuePress",
        description: "Vue-powered Static Site Generator",
        sidebar: [
          
          {
            title: "gridsome",
            children: ["id/gridsome/"]
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
