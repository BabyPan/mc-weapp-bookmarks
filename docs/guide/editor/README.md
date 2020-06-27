# 开发工具

## vscode 的配置

下载地址：[vscode](https://code.visualstudio.com/)

prettier 配置：

::: tip
这个工具特别重要，他会自动为您格式化整理代码，vscode 需要去插件商店下载【Prettier - Code formatter 】这个插件，安装完成后 vscode 打开设置 json（在设置页右上角有个小图标点击即可切换至 json 配置模式，如果你有其他项目 eslint 配置的不是本框架的规则，建议 json 拷贝到【工作区】的配置文件下，而不是替换到【用户】的配置文件下），拷贝下方 json 到配置文件。
:::

```json
{
  "[vue]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "editor.quickSuggestions": {
    "strings": true
  },
  "workbench.colorTheme": "One Monokai",
  "editor.tabSize": 2,
  "editor.detectIndentation": false,
  "emmet.triggerExpansionOnTab": true,
  "editor.formatOnSave": true,
  "javascript.format.enable": true,
  "stylelint.enable": true,
  "css.validate": false,
  "less.validate": false,
  "scss.validate": false,
  "stylelint.autoFixOnSave": true,
  "git.enableSmartCommit": true,
  "git.autofetch": true,
  "git.confirmSync": false,
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "liveServer.settings.donotShowInfoMsg": true,
  "explorer.confirmDelete": false,
  "javascript.updateImportsOnFileMove.enabled": "always",
  "typescript.updateImportsOnFileMove.enabled": "always",
  "files.exclude": {
    "**/.idea": true
  },
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[scss]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[jsonc]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```
