# 环境准备

::: warning
项目基于 node.js，请自行先安装 node 环境以及 npm
:::

## 脚手架

::: tip Node 版本要求
Vue CLI 需要 Node.js 8.9 或更高版本 (推荐 8.11.0+)。你可以使用 nvm 或 nvm-windows 在同一台电脑中管理多个 Node 版本。
:::

```sh
# vue-cli
npm install -g @vue/cli
```

## 安装项目

```sh
# 克隆项目
git clone ttps://tfs.yeyuan.net/tfs/MicroCow/WeApp/_git/WeAppV2

# 初始化项目
npm install
```

## 打包项目

::: tip
暂时仅兼容（头条）、（微信）小程序。
:::

```sh
# 微信小程序
npm run dev:mp-weixin
# 微信小程序(压缩)
npm run build:mp-weixin

# 头条小程序
npm run dev:mp-toutiao
# 头条小程序(压缩)
npm run build:mp-toutiao
```
