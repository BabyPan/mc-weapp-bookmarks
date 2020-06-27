# Mixin 混入

## share.js 小程序分享功能

开启该页面分享功能

```js
// 引入share.js
import { shareMixin } from "@/mixins/share";

// 初始化shareMixin
const mixin = shareMixin({ pageUrl: "/pages/index/index" }); // pageUrl: 当前页面的路径

// 注入
export default {
  mixins: [mixin],
};
```
