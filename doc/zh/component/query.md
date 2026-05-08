# 查询器

[本章示例代码](https://github.com/lfcleo/fc-admin/blob/main/src/views/vab/form/query.vue)

[查看预览](https://www.fcadmin.fun/#/vab/form/query)

## 使用方法

```vue
<fc-query :formItems="formItems" @search="handleSearch" @reset="handleReset" @enterKey="handleSearch"></fc-query>
```

## 参数说明

### Attributes

属性名  |   说明    |   类型    |   默认值
:----:|----|:----:|:----:|
formItems | 查询选项组件配置数组，必填项 | queryItemModel数组（见下方） | - |
showItemLength | 默认展示多少个查询选项组件，超过的会隐藏，同时显示`展开/收起`按钮 | number | 3 |

### queryItemModel Attributes

属性名  |   说明    |   类型    |   默认值
:----:|----|:----:|:----:|
type | 查询选项组件类型，`"input"输入框, "select"下拉选择器, "date"日期选择器/日期时间选择器`，必填项 | string | - |
label | 查询选项组件类型标题，必填项 | string | - |
field | 查询选项组件绑定的参数名称，必填项 | string | - |
placeholder | 查询选项组件绑定的参数名称 | 输入框占位文本 | 请输入+label |
options | select数据，仅type=select有效 <br/> 同`el-option`的值一样 | Object | - |
selectMultiple | select是否多选，仅type=select有效 | boolean | false |
dateType | 日期选择器类型，`'year'， 'years'，'month' ， 'date' ， 'dates' ， 'datetime' ， 'week' ， 'datetimerange' ， 'daterange' ， 'monthrange'` <br/> 同`el-date-picker`的`type`属性 <br /> 仅type=date有效 | enum | date |
dateFormat | 日期格式，"YYYY-MM-DD hh:mm:ss"这种 <br/> 同`el-date-picker`的`format`属性 <br /> 仅type=date有效 | date formats | YYYY-MM-DD |
dateShortcuts | 设置快捷选项，需要传入数组对象 <br/> 同`el-date-picker`的`shortcuts`属性 <br /> 仅type=date有效 | object | [] |
dateDisabled | 一个用来判断该日期是否被禁用的函数，接受一个 Date 对象作为参数。 应该返回一个 Boolean 值 <br/> 同`el-date-picker`的`disabled-date`属性 <br /> 仅type=date有效 | Function | - |
dateDefaultValue | 日期默认值 <br /> 仅type=date有效 | Date | - |
dateDefaultTime | 组件上显示日期默认时间 <br /> 仅type=date有效 | Date | - |