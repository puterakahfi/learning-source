const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


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
        lang: "us-en", // this will be set as the lang attribute on <html>
        title: "VuePress",
        description: "Vue-powered Static Site Generator",
        sidebar: [
          {
            title: 'Basic web development',
            children: ["en/general/frontend-roadmap",
              "en/general/backend-roadmap",
              {
                title: "CSS",
                children: [
                  "en/css/",
                  {
                    title: 'CSS Frameworks',
                    children: ["en/css/tailwind","en/css/bootstrap"]
                  }
                ]
              },
              "en/html/",
              "en/javascript/",
              "en/typescript/",
              "en/git"]
          },
          '/en/flutter/',
          {
            title: "Javascript Ecosystem",
            children: [
              {
                title: 'Node JS',
                children: ["en/javascript/nodejs/"]
              }
            ]
          },
          {
            title: "PHP Ecosystem",
            children: ["en/php/",
              {
                title: 'Frameworks',
                children: ["en/php/symfony-fw/", "en/php/laravel-fw/"]
              },
              {
                title: 'CMS(Content Management System)',
                children: ["en/cms/wordpress"]
              }
            ]
          },
          {
            title: "Software Development",
            children: [
              {
                title: "Software Design",
                children: [
                  {
                    title: 'UML',
                    children: [
                      "en/software-dev/software-design/uml/use-case",
                      "en/software-dev/software-design/uml/component"
                    ]
                  }
                ]
              },
              {
                title: 'Software Architecture',
                children: [
                  "en/software-dev/software-architecture/",
                  "en/software-dev/software-architecture/clean-architecture",
                  "en/software-dev/software-architecture/hexagonal-architecture",
                  "en/software-dev/software-architecture/microservice-architecture"]
              },
              {
                title: 'Software Testing',
                children: [
                  "en/software-dev/software-testing/",
                  "en/software-dev/software-testing/unit-testing",]
              },
              {
                title: 'Software Driven  Models',
                children: ["en/software-dev/tdd",
                  "en/software-dev/ddd",
                  "en/software-dev/event-driven-development"]
              },
              "en/software-dev/agile-software-development",
              {
                title: 'Software Documentation',
                children: [
                  "en/software-dev/software-documentation"]
              },
              "en/software-dev/oop",
              "en/software-dev/rest"]
          },
          {
            title: "Front-end Development",
            children: [
              {
                title: "vuejs Ecosystem",
                children: [
                  "en/vuejs/",
                  "en/vuejs/vuepress/",
                  "en/vuejs/gridsome/",
                  "en/vuejs/nuxtjs/",
                  "en/vuejs/vuex/"]
              }
            ]
          },
          {
            title: "Design",
            children: [
              "en/design/",
              "en/design/ui",
              "en/design/web-design",
              "en/design/ux",
              "en/design/design-systems"
            ]
          },
          {
            title: 'Human Development',
            children: ["en/human-development/self-mastery"]
          }
        ]
      }
    }
  },

  configureWebpack: {
    plugins: [new BundleAnalyzerPlugin({
      openAnalyzer: false,
      statsFilename: 'test',
      generateStatsFile: true,
      analyzerMode: 'static'
    })]
  }
};
