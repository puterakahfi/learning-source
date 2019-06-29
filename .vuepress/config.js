module.exports = {
  base: "/learning-source/",
  title: "Learning Resource",
  description: "Just playing around",
  redirectPath: "/id/",
  locales: {
    "/id/": {
      lang: "id-ID",
      title: "Learning Resource",
      description: "Just playing arounds"
    }
  },

  themeConfig: {
    displayAllHeaders: true,
    locales: {
      "/id/": {
        lang: "bahasa", // this will be set as the lang attribute on <html>
        title: "VuePress",
        description: "Vue-powered Static Site Generator",
        sidebar: [
          {
            title: "yarn",
            children: ["id/yarn/"]
          }
        ]
      }
    }
  }
};
