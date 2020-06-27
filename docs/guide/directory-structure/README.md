# 目录结构

```sh
├── .vscode                                   # vscode编辑器相关配置
├── dist                                      # 打包文件目录
├── public                                    # 静态资源
│   └── index.html                            # html模板
├── src                                       # 源代码
│   ├── api                                   # api接口
│   │   ├── index.js                          # 导出接口
│   │   ├── baseController.js                 # BaseController 接口
│   │   ├── orderController.js                # OrderController 接口
│   │   ├── userController.js                 # UserController 接口
│   │   └── productController.js              # ProductController 接口
│   ├── components                            # 组件目录
│   │   ├── address-btn                       # 收货地址按钮组件
│   │   ├── badge-btn                         # 标记组件
│   │   ├── carousel                          # 轮播组件
│   │   ├── custom-popup                      # 自定义弹窗组件
│   │   ├── lu-popup-wrapper                  # 高性能弹窗基类组件
│   │   ├── n-input                           # 数量组件
│   │   ├── navTab                            # tab导航组件
│   │   ├── payType-popup                     # 支付选择组件
│   │   ├── productList                       # 商品列表组件
│   │   ├── refresh                           # 下拉刷新组件
│   │   ├── search                            # 搜索组件
│   │   ├── shop-coupon                       # 店铺优惠券组件
│   │   ├── uni-contact                       # 联系客服浮动弹窗组件
│   │   ├── uni-live-banner                   # 直播广告图组件
│   │   ├── uni-live-btn                      # 直播入口按钮组件
│   │   ├── uni-popup                         # 弹窗基类组件
│   │   ├── uni-skeleton                      # 骨架屏组件
│   │   ├── uni-timeLine                      # 时间线组件
│   │   ├── uni-turntable                     # 大转盘组件
│   │   └── yq-avatar                         # 头像编辑组件
│   ├── iconfont                              # iconfont
│   ├── mixins                                # 公共混入
│   │   └── share.js                          # 分享功能公共方法
│   ├── pages                                 # 页面
│   │   ├── aboutUs                           # 关于我们
│   │   ├── afterSale                         # 售后详情
│   │   ├── afterSalesOrderList               # 售后列表
│   │   ├── certificate                       # 经营证书
│   │   ├── commissionList                    # 我的奖励
│   │   ├── coupon                            # 领取优惠券
│   │   ├── couponList                        # 优惠券列表
│   │   ├── creditDetail                      # 积分明细
│   │   ├── customerRelationList              # 收货地址按钮组件
│   │   ├── index                             # 首页
│   │   ├── logistics                         # 物流信息
│   │   ├── orderDetail                       # 订单详情
│   │   ├── orderList                         # 订单列表
│   │   ├── orderSettlement                   # 确认订单
│   │   ├── personal                          # 个人中心
│   │   ├── productDetail                     # 商品详情
│   │   ├── refundOrderDetail                 # 退款单详情
│   │   ├── returnOrderDetail                 # 退货单详情
│   │   ├── search                            # 搜索
│   │   ├── serialCodeQuery                   # 串码查询
│   │   ├── trolley                           # 购物车
│   │   └── userEdit                          # 修改信息
│   ├── static                                # 存放应用引用静态资源（如图片、视频等）的目录，注意：静态资源只能存放于此
│   ├── utils                                 # 公共封装
│   │   ├── index                             # 公共方法
│   │   ├── base64                            # base64加密
│   │   ├── filter                            # 全局过滤器
│   │   ├── http                              # http请求封装
│   │   ├── login                             # 登录封装
│   │   ├── order                             # 订单相关封装
│   │   ├── toast                             # uniapp弹窗封装
│   │   ├── trolley                           # 购物车相关封装
│   │   ├── ttOrderPay                        # 头条支付封装
│   │   └── wxOrderPay                        # 微信支付封装
│   ├── App.vue                               # 应用配置，用来配置App全局样式以及监听 应用生命周期
│   ├── main.js                               # Vue初始化入口文件
│   ├── manifest.js                           # 配置应用名称、appid、logo、版本等打包信息
│   └── uni.styl                              # stylus变量预处理
└── pages.json                                # 配置页面路由、导航条、选项卡等页面类信息
```
