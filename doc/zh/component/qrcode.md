# 二维码

[本章示例代码](https://github.com/lfcleo/fc-admin/blob/main/src/views/vab/data/qrcode.vue)

[查看预览](https://www.fcadmin.fun/#/vab/data/qrcode)

## 使用方法

```vue
<!--简单使用-->
<fc-qr-code content="test测试"></fc-qr-code>

<!--设置logo，logo大小为30-->
<fc-qr-code content="FC-Admin" logo="/img/logo.png" :iconSize="30"></fc-qr-code>

<!--设置大小为160，颜色为FFBF60FF-->
<fc-qr-code content="FC-Admin" :size="160" :options="{ color: { light: '#FFBF60FF' } }"></fc-qr-code>

```

## 参数说明

### Attributes

属性名  |   说明    |   类型    |   默认值
:----:|:----:|:----:|:----:|
content | 生产二维码的数据，必填 | string | - |
size | 生成二维码的尺寸 | number | 200 |
iconSize | 二维码图标的尺寸 | number | 40 |
logo | 二维码图标，可以是本地图片 | string | 200 |
options | 二维码配置 | Object | - |
errorLevel | 二维码纠错级别,有4个级别 `"L"， "M" ， "Q" ， "H"` | enum | H |

`纠错等级也叫纠错率，就是指二维码可以被遮挡后还能正常扫描，而这个能被遮挡的最大面积就是纠错率。
通常情况下二维码分为 4 个纠错级别：L级 可纠正约 7% 错误、M级 可纠正约 15% 错误、Q级 可纠正约 25% 错误、H级 可纠正约30% 错误。`

### options参数说明

属性名  |   说明    |   类型    |   默认值
:----:|----|:----:|:----:|
color | 二维码颜色，有两个字段`{dark:"",light:""}`,dart为暗黑模式下的颜色，默认`#000000ff`,light为明亮模式下的值，默认`#ffffffff` | Object | - |

### Exposes

事件名  |   说明    |   类型    
:----:|----|:----:|
downLoadQRCode | 下载二维码 | Function |