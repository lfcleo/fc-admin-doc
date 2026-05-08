# 分类筛选器

[本章示例代码](https://github.com/lfcleo/fc-admin/blob/main/src/views/vab/form/selectFilter.vue)

[查看预览](https://www.fcadmin.fun/#/vab/form/selectFilter)

```vue
<fc-select-filter :data="filterData" :default-values="filterResult" @change="changeFilter"></fc-select-filter>
```

## 参数说明

### Attributes

属性名  |   说明    |   类型    |   默认值
:----:|----|:----:|:----:|
data | 列表数据，必填项 | SelectDataProps数组（见下方） | - |
defaultValues | 默认值 | Object | - |

### SelectDataProps Attributes

属性名  |   说明    |   类型    |   默认值
:----:|----|:----:|:----:|
title | 列表标题 | string | - |
key | 当前筛选项 key 值 | string | - |
multiple | 是否为多选 | boolean | - |
options | 筛选数据 | OptionsProps数据（见下方） | - |

### OptionsProps Attributes

属性名  |   说明    |   类型    |   默认值
:----:|----|:----:|:----:|
value | 值 | string或number | - |
label | 标签 | string | - |
icon | icons | string | - |