module.exports = {
  title: "国台线上直营中心小程序文档",
  head: [["link", { rel: "icon", href: "/favicon.png" }]],
  theme: "reco",
  themeConfig: {
    // 密钥
    keyPage: {
      keys: ["e10adc3949ba59abbe56e057f20f883e"], // 1.3.0 版本后需要设置为密文
      color: "#42b983", // 登录页动画球的颜色
      lineColor: "#42b983", // 登录页动画线的颜色
    },
    nav: [
      { text: "主页", link: "/" },
      { text: "文档", link: "/guide/getting-started/" },
    ],
    sidebar: [
      {
        title: "指南",
        collapsable: false, //是否展开
      },
      ["/guide/getting-started/", "快速上手"],
      ["/guide/directory-structure/", "目录结构"],
      ["/guide/editor/", "开发工具"],
      {
        title: "具体",
        collapsable: false, //是否展开
      },
      ["/course/mixins/", "mixins 混入"],
      ["/course/api/", "api 接口"],
      ["/course/components/", "组件相关"],
      ["/course/utils/", "工具类函数"],
    ],
  },
  markdown: {
    lineNumbers: true,
  },
};
