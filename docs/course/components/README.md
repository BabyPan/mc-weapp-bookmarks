# 组件

## 获取收货地址按钮组件

使用：

::: tip @getAddress
获取地址回调
:::

```html
<address-btn @getAddress="getAddress"></address-btn>
```

```js
import addressBtn from "@/components/address-btn/address-btn.vue";

export default {
  components: { addressBtn },
  methods: {
    // 接收地址
    getAddress(address) {
      // todo
    },
  },
};
```

实例：
![addressBtn](/addressBtn.png)

## 数量标记组件

| 参数  | 说明 |  类型  | 默认    |
| ----- | ---- | :----: | ------- |
| value | 数量 | Number | 0       |
| size  | 尺寸 | String | default |

使用：

```html
<count-badge :value="number"></count-badge>
```

```js
import countBadge from "@/components/badge/countBadge.vue";

export default {
  components: { countBadge },
  data() {
    return {
      number: 2,
    };
  },
};
```

实例：
![badge](/badge.png)

## 轮播组件

使用：

```html
<carousel ref="carousel"></carousel>
```

```js
import carousel from "@/components/carousel/carousel.vue";

export default {
  components: { carousel },
};
```

实例：
![badge](/carousel.png)

## 数量组件

使用：

```html
<n-input v-model="buyCount"></n-input>
```

```js
import nInput from "@/components/n-input/n-input.vue";

export default {
  components: { nInput },
  data() {
    return {
      buyCount: 1,
    };
  },
};
```

实例：
![nInput](/nInput.png)
