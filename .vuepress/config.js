module.exports = {
  base: "/learning-source/",
  title: "Learning Resources",
  description: "Links, videos, tutorials about learning",
  redirectPath: "/en/",
  locales: {
    "/en/": {
      lang: "en-US",
      title: "Learning Resources",
      description: "Just playing arounds"
    }
  },

  themeConfig: {
    repo: 'https://github.com/puterakahfi/learning-source.git',
    // Customising the header label
    // Defaults to "GitHub"/"GitLab"/"Bitbucket" depending on `themeConfig.repo`
    repoLabel: 'Contribute!',
    lastUpdated: "Last Updated", // string | boolean
    docsBranch: "master",
    // defaults to false, set to true to enable
    editLinks: true,
    // custom text for edit link. Defaults to "Edit this page"
    editLinkText: "Help us improve this page!",
    logo: "https://img.icons8.com/dotty/344/learning.png",
    displayAllHeaders: true,

    serviceWorker: {
      updatePopup: true // Boolean | Object, default to undefined.
    },
    nav: [
      { text: "Home", link: "/" },
      { text: "Tags", link: "/tags" },
      { text: "My Web", link: "https://puterakahfi.github.io" },
      { text: "Github", link: "https://github.com/puterakahfi/learning-source" }
    ],
    locales: {
      "/en/": {
        lang: "bahasa", // this will be set as the lang attribute on <html>
        title: "VuePress",
        description: "Vue-powered Static Site Generator",
        sidebar: [
          {
            title: "flutter",
            children: ["en/flutter/"]
          },
          {
            title: "gridsome",
            children: ["en/gridsome/"]
          },
          {
            title: "javascript",
            children: ["en/javascript/"]
          },
          {
            title: "nuxtjs",
            children: ["en/nuxtjs/"]
          },
          {
            title: "symfony framework",
            children: ["en/symfony-fw/"]
          },
          {
            title: "software development",
            children: ["en/software-dev/"]
          },
          {
            title: "vuejs",
            children: ["en/vuejs/"]
          },
          {
            title: "vuepress",
            children: ["en/vuepress/"]
          },
          {
            title: "yarn",
            children: ["en/yarn/troubleshoot/"]
          }
        ]
      }
    }
  }
};
