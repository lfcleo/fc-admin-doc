# 文字验证码

[本章示例代码](https://github.com/lfcleo/fc-admin/blob/main/src/views/vab/form/verify.vue)

[查看预览](https://www.fcadmin.fun/#/vab/form/verify)

## 使用方法

```vue
<fc-word-verify @resultCallback="verifyCallback"></fc-word-verify>
```

## 参数说明

### Attributes

属性名  |   说明    |   类型    |   默认值
:----:|----|:----:|:----:|
clickTextNum | 需要点击的个数 | number | 4 |
textNum | 生成文字的个数 | number | 6 |
textWidth | 文字宽度 | number | 35 |
parentWidth | 组件宽度 | number | 320 |
parentHeight | 组件高度 | number | 160 |
angleRange | 旋转角度范围 | number | 90 |