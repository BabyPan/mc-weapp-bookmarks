# 工具类通用封装

## base64.js base64 加密

使用：

```js
import { BASE64 } from "@/utils/base64.js";

const base64Token = BASE64.base64.encode(token);
```

## filter.js 全局过滤器

### timeToString

```html
<!-- 时间戳转换过滤器 -->
<div>{{ order.CreateTime | timeToString }}</div>
```

## http.js 请求函数封装

```js
/**
 * @method 请求封装
 * @param {url} 请求链接
 * @param {method} 请求方式
 * @param {data} 请求参数
 * @param {showLoading} 是否显示loadding
 */
function request(url, method, data = {}, showLoading = true) {
  if (showLoading) {
    uni.showLoading({
      title: "加载中", //数据请求前loading
      // #ifdef MP-WEIXIN
      mask: true,
      // #endif
    });
  }
  return new Promise((resolve, reject) => {
    uni.request({
      url: API_PATH + url,
      method: method,
      data: data,
      header: {
        Accept: "application/json, text/javascript, */*; q=0.01",
        "content-type": "application/json; charset=utf-8",
        Authorization: getToken(),
        // #ifdef MP-TOUTIAO
        PlatformType: 1,
        AppId: "mca28eb2e5752a9eda",
        // #endif
        // #ifdef MP-WEIXIN
        PlatformType: 0,
        AppId: "mca28eb2e5752a9eda",
        // #endif
      },
      success: (res) => {
        if (res.statusCode === 401) {
          uni.showToast({
            title: "网络错误，请重试.",
            icon: "none",
            duration: 2000,
          });
          setTimeout(() => {
            //清除token
            // this.$setState("isRefresh", true);
            wx.removeStorage({
              key: "token",
              success(res) {
                if (!uni.getStorageSync("token")) {
                  let login = new Login();
                  login.getToken().then((k) => {
                    let pages = getCurrentPages();
                    let page = pages[pages.length - 1];
                    page.onLoad();
                  });
                }
              },
            });
          }, 2500);
        }
        uni.hideLoading();
        resolve(res.data);
      },
      fail: function (error) {
        wx.hideLoading();
        reject(false);
      },
      complete: () => {
        uni.hideLoading();
      },
    });
  });
}
```

## toast.js 全局交互弹窗封装

使用：

```js
// 成功提示框（带成功提示icon）
this.$success(
  msg /*提示文本*/,
  duration /*(选填)提示延迟*/,
  calback /*(选填)回调函数*/
);

// 普通提示框（不带成功提示icon）
this.$baseToast(
  msg /*提示文本*/,
  duration /*(选填)提示延迟*/,
  calback /*(选填)回调函数*/
);
```

## login.js 登录类

::: tip 提示
类具体封装请移步源码查看
:::

使用:

```js
import Login from "@/utils/login";

// 登录
const login = new Login();
```

## order.js 订单类

::: tip 提示
类具体封装请移步源码查看
:::

使用：

```js
import Order from "@/utils/order";

// 创建订单
let productData = new Order();
productData.add({
  id: 商品id,
  name: 产品名称,
  skuId: 规格id,
  skuName: 产品规格名称,
  img: 产品缩略图,
  count: 购买数量,
  price: 对应规格价格,
  oriPrice: 产品原价,
});
productData.create();

// 获取订单
const orderData = new Order().getData();
```

## trolley.js 购物车类

::: tip 提示
类具体封装请移步源码查看，现版本购物车数据存储于 Storage。
:::

使用：

```js
// 添加至购物车
let trolley = new Trolley();
trolley.init({
  product: 产品信息,
  chooseSkuIndex: 当前选中规格,
  count: 数量,
});
trolley.addProduct();

// 获取购物车数据
const list = new Trolley().getList();

// 删除购物车某一商品
new Trolley().removeProduct(index);
```

## ttOrderPay.js 头条订单支付类

::: tip 提示
类具体封装请移步源码查看
:::

使用：

```js
import WXOrderPay from "@/utils/wxOrderPay";

new WXOrderPay().createOrder({
  isNoPay: 是否是免支付订单,
  productList: 产品list,
  addressInfo: 收货地址信息,
  couponInfoId: 优惠券id,
  creditCount: 使用积分,
  success: () => {
    // todo
  },
  fail: () => {
    // todo
  },
  complete: () => {
    // todo
  },
});
```

## ttOrderPay.js 微信订单支付类

::: tip 提示
类具体封装请移步源码查看
:::

使用：

```js
import TTOrderPay from "@/utils/ttOrderPay";

new TTOrderPay().createOrderNoPay({
  productList: 规格list,
  addressInfo: 收货地址信息,
  payType: 支付类型,
  couponInfoId: 优惠券id,
  creditCount: 使用积分,
});
```
