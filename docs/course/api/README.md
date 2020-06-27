# Api 接口相关

::: tip
接口函数请求函数封装为 Promise 函数
:::

使用：

```js
import api from "@/api";

// 获取banner列表
api
  .getWeAppBannerList(data /* 请求参数 { page: 1, size: 20 } */)
  .then((res) => {
    // todo
  })
  .catch((err) => {
    // 异常处理
  });
```

## baseController

Base 基础接口 [接口文档](https://api.v3.dev.jianglaoye.net/help)

```js
export default {
  /**
   * @method 获取小程序banner列表
   */
  getWeAppBannerList(data = {}) {
    return get("Base/GetWeAppBannerList", data);
  },
  /**
   * @method 获取店铺优惠券列表
   */
  getCouponList(data = {}) {
    return get("Base/GetCouponList", data);
  },
  /**
   * @method 获取小程序统一消息(小程序轮询接口)
   */
  getWeAppMessage(data = {}) {
    return get("Base/GetWeAppMessage", data, false);
  },
};
```

## orderController

Order 订单接口控制器 [接口文档](https://api.v3.dev.jianglaoye.net/help)

```js
export default {
  /**
   * @method 小程序订单下单并支付
   */
  createOrder(data = {}) {
    return post("Order/CreateOrder", data);
  },
  /**
   * @method 小程序订单发起支付
   */
  orderWeAppPay(data = {}) {
    return post("Order/OrderWeAppPay", data);
  },
  /**
   * @method 获取订单列表
   */
  getOrderList(data = {}) {
    return get("Order/GetOrderList", data);
  },
  /**
   * @method 获取订单信息
   */
  getOrderInfo(data = {}) {
    return get("Order/GetOrderInfo", data);
  },
  /**
   * @method 获取订单状态
   */
  getOrderStatus(data = {}) {
    return get("Order/getOrderStatus", data);
  },
  /**
   * @method 订单取消
   */
  orderCancel(data = {}) {
    return post("Order/OrderCancel", data);
  },
  /**
   * @method 订单退款单发起
   */
  createOrderRefund(data = {}) {
    return post("Order/CreateOrderRefund", data);
  },
  /**
   * @method 订单退货单发起
   */
  createOrderReturn(data = {}) {
    return post("Order/CreateOrderReturn", data);
  },
  /**
   * @method 订单退货单发起
   */
  createOrderReturn(data = {}) {
    return post("Order/CreateOrderReturn", data);
  },
  /**
   * @method 获取退款单列表
   */
  getOrderRefundList(data = {}) {
    return get("Order/GetOrderRefundList", data);
  },
  /**
   * @method 获取退货单列表
   */
  getOrderReturnList(data = {}) {
    return get("Order/GetOrderReturnList", data);
  },
  /**
   * @method 获取退款单详情信息
   */
  getOrderRefundInfo(data = {}) {
    return get("Order/GetOrderRefundInfo", data);
  },
  /**
   * @method 退款单撤销
   */
  orderRefundClose(data = {}) {
    return post("Order/OrderRefundClose", data);
  },
  /**
   * @method 获取退货单详情信息
   */
  getOrderReturnInfo(data = {}) {
    return get("Order/GetOrderReturnInfo", data);
  },
  /**
   * @method 退货单撤销
   */
  orderReturnClose(data = {}) {
    return post("Order/OrderReturnClose", data);
  },
  /**
   * @method 退货单撤销
   */
  orderReturnClose(data = {}) {
    return post("Order/OrderReturnClose", data);
  },
  /**
   * @method 获取订单物流单号列表
   */
  getOrderLogisticsNumberList(data = {}) {
    return get("Order/GetOrderLogisticsNumberList", data);
  },
  /**
   * @method 获取订单物流单号列表
   */
  getOrderLogisticsNumberList(data = {}) {
    return get("Order/GetOrderLogisticsNumberList", data);
  },
  /**
   * @method 查询德邦物流轨迹
   */
  getDepponMailNoById(data = {}) {
    return get("Order/GetDepponMailNoById", data);
  },
  /**
   * @method 查询德邦物流轨迹
   */
  getDepponMailNoById(data = {}) {
    return get("Order/GetDepponMailNoById", data);
  },
  /**
   * @method 查询京东物流轨迹
   */
  getJDMailNoById(data = {}) {
    return get("Order/GetJDMailNoById", data);
  },
  /**
   * @method 退货单录入物流信息
   */
  orderReturnDelivery(data = {}) {
    return post("Order/OrderReturnDelivery", data);
  },
  /**
   * @method 订单获取最优优惠券
   */
  getOptimalCoupon(data = {}) {
    return post("Order/GetOptimalCoupon", data);
  },
};
```

## productController

Product 商品接口控制器 [接口文档](https://api.v3.dev.jianglaoye.net/help)

```js
export default {
  /**
   * @method 获取商品列表
   */
  getProductList(data = {}) {
    return get("Product/GetProductList", data);
  },
  /**
   * @method 获取商品详情
   */
  getProduct(data = {}) {
    return get("Product/GetProduct", data);
  },
  /**
   * @method 小程序产品串码查询
   */
  productSerialCodeQueryV2(data = {}) {
    return post("Product/ProductSerialCodeQueryV2", data);
  },
  /**
   * @method 产品串码查询大转盘领取
   */
  productSerialCodeRouletteReceive(data = {}) {
    return post("Product/ProductSerialCodeRouletteReceive", data);
  },
};
```

## userController

Product 用户接口控制器 [接口文档](https://api.v3.dev.jianglaoye.net/help)

```js
export default {
  /**
   * @method 小程序快速登录
   */
  weAppLogin(data = {}) {
    return post("User/WeAppLogin", data);
  },
  /**
   * @method 获取个人信息
   */
  getSelfData(data = {}, isShowLoad = true) {
    return post("User/GetSelfData", data, isShowLoad);
  },
  /**
   * @method 头条小程序绑定用户信息
   */
  bindTTUserInfo(data = {}) {
    return post("User/BindTTUserInfo", data);
  },
  /**
   * @method 小程序手机号码快速绑定
   */
  weAppBindMobilePhone(data = {}) {
    return post("User/WeAppBindMobilePhone", data);
  },
  /**
   * @method 获取我的优惠券列表
   */
  getMyCouponList(data = {}) {
    return get("User/GetMyCouponList", data);
  },
  /**
   * @method 获取优惠券
   */
  getCouponPlan(data = {}) {
    return get("User/GetCouponPlan", data);
  },
  /**
   * @method 优惠券领取
   */
  couponCollect(data = {}) {
    return post("User/CouponCollect", data);
  },
  /**
   * @method 签到
   */
  sign(data = {}) {
    return post("User/Sign", data);
  },
  /**
   * @method 获取积分明细
   */
  getCreditDetailList(data = {}) {
    return get("User/GetCreditDetailList", data);
  },
  /**
   * @method 获取我的大转盘资格
   */
  getMyRouletteQualifications(data = {}) {
    return get("User/GetMyRouletteQualifications", data, false);
  },
  /**
   * @method 大转盘抽奖提交
   */
  rouletteLottery(data = {}) {
    return post("User/RouletteLottery", data, false);
  },
  /**
   * @method 完善个人资料(perfectData:false时可用)
   */
  perfectData(data = {}) {
    return post("User/PerfectData", data);
  },
  /**
   * @method 我的邀请列表接口
   */
  getCustomerRelationList(data = {}) {
    return get("User/GetCustomerRelationList", data);
  },
  /**
   * @method 我的奖励列表接口
   */
  getShopPlatformCommissionInfoList(data = {}) {
    return get("User/GetShopPlatformCommissionInfoList", data);
  },
  /**
   * @method 修改资料
   */
  modifyData(data = {}) {
    return post("User/ModifyData", data);
  },
  /**
   * @method 获取我的订单统计
   */
  getMyOrderCount(data = {}) {
    return post("User/GetMyOrderCount", data, false);
  },
};
```
