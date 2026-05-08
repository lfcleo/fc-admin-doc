# 树形筛选器

[本章示例代码](https://github.com/lfcleo/fc-admin/blob/main/src/views/vab/form/treeFilter.vue)

[查看预览](https://www.fcadmin.fun/#/vab/form/treeFilter)

静态数据和动态数据都可使用。

## 使用方法

```vue
...
<fc-tree-filter label="name" title="树形筛选器" :request-api="getDepartmentDataApi"
        :default-value="treeFilterValue.departmentId" @change="changeTreeFilter">
</fc-tree-filter>
...
```

## 参数说明

### Attributes

属性名  |   说明    |   类型    |   默认值
:----:|----|:----:|:----:|
data | 分类数据，如果有分类数据，则不会执行 api 请求 | Object数组 | - |
requestApi | 请求分类数据的 api | Function | - |
title | 组件标题 | string | - |
name | 根据此字段判断选中的数据，同时也是每个树节点用来作为唯一标识的属性 <br/> 同`el-tree`的`node-key` | string | id |
label | 指定节点标签为节点对象的某个属性值 | string | - |
multiple | 是否为多选 | boolean | false |
defaultValue | 默认选中的值 | any | - |
border | 是否显示边框(V1.0.1) | boolean | false |
showSearch | 是否显示搜索框(V1.0.1) | boolean | false |
showAll | 是否显示全部选项(V1.0.1) | boolean | true |

### Events

事件名  |   说明    |   类型    
:----:|----|:----:|
change | 选中的数据改变方法，返回选中的数据数组 | Function |

### Slots

插槽名  |   说明    
:----:|----|
option | 自定义选项内容 |