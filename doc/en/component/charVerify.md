# 字符验证码

[本章示例代码](https://github.com/lfcleo/fc-admin/blob/main/src/views/vab/form/verify.vue)

[查看预览](https://www.fcadmin.fun/#/vab/form/verify)

## 使用方法

```vue
<!-- 简单使用 -->
<fc-char-verify ref="fcCharVerify1"></fc-char-verify>

<!-- 动画效果 -->
<fc-char-verify ref="fcCharVerify2" :is-animation="true"></fc-char-verify>

<!-- 动态获取 -->
<fc-char-verify ref="fcCharVerify3" :requestApi="charVerifyApi"></fc-char-verify>

<!-- 动态获取Data URL Base64类型 -->
<fc-char-verify ref="fcCharVerify4" :requestApi="charVerifyApi"></fc-char-verify>
```

## 参数说明

### Attributes

属性名  |   说明    |   类型    |   默认值
:----:|----|:----:|:----:|
requestApi | 字符数据请求方法 | Function | - |
codeLength | 字符长度 | number | 4 |
fontSizeMin | 字体最小值 | number | 25 |
fontSizeMax | 字体最大值 | number | 35 |
backgroundColorMin | 图片背景色最小值 | number | 200 |
backgroundColorMax | 图片背景色最大值 | number | 220 |
dotColorMin | 图片干扰点最小值 | number | 60 |
dotColorMax | 图片干扰点最大值 | number | 120 |
contentWidth | 容器宽度 | number | 100 |
contentHeight | 容器高度 | number | 40 |
isAnimation | 是否有动画效果 | boolean | false |