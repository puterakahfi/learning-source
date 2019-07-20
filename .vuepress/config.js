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
    repo: 'https://github.com/puterakahfi/learning-source',
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
            title: 'Basic web development',
            children: ["en/css/", "en/html/", "en/javascript/", "en/git"]

          },
          '/en/flutter/',
          {
            title: "PHP Ecosystem",
            children: ["en/php/","en/php/composer","en/symfony-fw/"]
          },
          {
            title: "software development",
            children: [
              "en/software-dev/design-pattern",
              "en/software-dev/ddd",
              "en/software-dev/rest",
              "en/software-dev/software-architecture"]
          },
          {
            title: "vuejs Ecosystem",
            children: ["en/vuejs/","en/vuepress/","en/gridsome/","en/nuxtjs/"]
          },
          {
            title: "web design",
            children: ["en/web-design/", "en/web-design/ui", "en/web-design/ux"]
          }
        ]
      }
    }
  }
};
