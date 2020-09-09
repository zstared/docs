module.exports = {
  title: "Web开发技术栈",
  description: "前端,front-end,back-end,html,css,javascript,nodejs,webpack",

  headOption: {
    icon: "/favicon.ico",
  },
  themeConfig: {
    logo: "/logo.svg",
    nav: [
      { text: "主页", link: "/" },
      {
        text: "基础",
        items: [
          { text: "HTML5", link: "/base/html/" },
          { text: "CSS3", link: "/base/css/" },
          { text: "Javascript", link: "/base/javascript/" },
          { text: "NodeJs", link: "/base/nodejs/" },
        ],
      },
      {
        text: "框架",
        items: [
          { text: "Vue", link: "/framework/vue/" },
          { text: "React", link: "/framework/react/" },
          { text: "Koa", link: "/framework/koa/" },
        ],
      },
      {
        text: "工具",
        items: [{ text: "Webpack", link: "/tool/webpack/" }],
      },
      {
        text: "项目",
        link: "/project/permission",
      },
      {
        text: "Github",
        link: "https://github.com/zstared/docs",
      },
    ],
    sidebar: {
      "/base/": [""],
      "/base/html/": [""],
      "/base/css/": [""],
      "/base/javascript/": [""],
    },
    sidebarDepth: 3,
  },
};
