# 表格

[本章示例代码1](https://github.com/lfcleo/fc-admin/blob/main/src/views/vab/table/index.vue)

[本章示例代码2](https://github.com/lfcleo/fc-admin/blob/main/src/views/vab/table/search.vue)

[查看预览1](https://www.fcadmin.fun/#/vab/table/index)

[查看预览2](https://www.fcadmin.fun/#/vab/table/search)

封装el-table，支持单选，多选、拖拽排序，分页等常用功能。静态数据和动态数据都可使用。

## 静态数据

静态数据传入 `data` 属性，data 属性为数组，每一项为表格的一行数据。
```vue
<template>
...
<fc-table :data="tableData" rowKey="name" :columns="columns" :border="false" :pagination="false">
</fc-table>
...
</template>

<script setup lang="ts">
...
import { ColumnProps } from "@/components/fcTable/model"
import { TableListModel } from "@/models/tableModel"    // 假如这是你的表格数据模型
const tableData = reactive<TableListModel[]>([
    {
        id: "1",
        name: "唱",
        status: true,
        created_at: "2024-01-01T08:00:00.000+08:00"
    },
    {
        id: "2",
        name: "跳",
        status: true,
        created_at: "2024-02-01T08:00:00.000+08:00"
    },
    ...
])

// 表格配置项
const columns = reactive<ColumnProps<TableListModel>[]>([
    { type: "selection", fixed: "left", width: 50 },
    { type: "index", label: "序号", width: 80 },
    { prop: "id", label: "ID", width: 100 },
    { prop: "name", label: "名称", width: 200 },
    { prop: "status", label: "状态", width: 200 },
    { prop: "created_at", label: "创建时间", width: 200 },
]);
...
</script>
```

## 动态数据

动态数据传入 `requestApi` 属性，requestApi 属性为网络请求的方法，数据格式如下:
```json
{
    "code": 200,
    "data": {
        "list": [           //表格数据
            {
                "id": 1,
                "title": "标题1",
                "created_at": "2024-01-01T08:00:00.000+08:00"
            },
            ...
        ],
        "page": 1,          //当前分页
        "pageSize": 20,     //每页条数
        "total": 8          //数据总条数
    },
    "message": ""
}
```

1. 定义网络请求，参考 [网络请求](../guide/base/request) 这一章节
2. 在需要使用`fc-table`的vue页面中使用
```vue
<template>
...
<fc-table stripe ref="fcTableRef" rowKey="id" :requestApi="getTableList" :columns="columns">
</fc-table>
...
</template>

<script setup lang="ts">
...
import { ColumnProps, FcTableInstance } from "@/components/fcTable/model"
import { TableListModel } from "@/models/tableModel"    // 假如这是你的表格数据模型
import { getTabelDataApi } from '@/api/modules/table';  // 假如这是你的网络请求方法

// 表格配置项
const columns = reactive<ColumnProps<TableListModel>[]>([
    { type: "selection", fixed: "left", width: 50 },
    { type: "radio", label: "单选", width: 80 },
    { type: "sort", label: "拖动排序", width: 80 },
    { type: "expand", label: "展开行", width: 80 },
    { type: "index", label: "序号", width: 80 },
    { prop: "id", label: "ID", width: 100 },
    { prop: "name", label: "名称", width: 200 },
    { prop: "status", label: "状态", width: 200 },
    { prop: "created_at", label: "创建时间", width: 200 },
    { prop: "options", label: "操作", fixed: "right", width: 280 },
]);
// fcTabel 实例
const fcTableRef = ref<FcTableInstance>();

/*
1，如果没有额外的请求参数，则可以把上方template中<fc-table>的 
:requestApi="getTableList" 改为 :requestApi="getTabelDataApi"
*/

//2，如果有额外的请求参数，可以这样处理
//2-1，每次请求都会带上的固定公共参数，像下方这样定义一个object类型，然后在上方
//template中<fc-table>中添加 :initParam="requestParam"
//这样每次进行请求（例如点击分页，搜索查询等）都会带上这些固定参数
const requestParam = reactive({
    "test": 0
})

//2-2，非固定公共参数，某些条件下(例如搜索查询)的请求参数,可以自定义如下函数
//template中<fc-table>中设置 :requestApi="getTableList" 即可
const getTableList = (params: any) => {
    let newParams = JSON.parse(JSON.stringify(params));
    return getTabelDataApi(newParams);
};

</script>
```

注意：动态列表的分页请求数据`page`和`pageSize`在fc-table中已经默认处理，不需要再额外处理。

## 参数说明

### Attributes

属性名  |   说明    |   类型    |   默认值
:----:|----|:----:|:----:|
columns | 列配置项，必填 | ColumnProps数组 | - |
data | 静态 table data 数据，若存在则不会使用 requestApi 返回的 data | any[] | - |
requestApi | 表格数据请求方法 | Function | - |
initParam | 初始化请求参数 | object | {} |
requestError | 表格数据请求错误监听 | Function | - |
dataCallback | 返回数据的回调函数，可以对数据进行处理 | Function | - |
pagination | 是否开启分页组件 | boolean | true |
pageSizes | 每页显示个数选择器的选项设置 | number数组 | [10, 20, 50, 100] |
height | 表格整体视图高度，单位px | number | 100% |
border | 是否带有纵向边框 | boolean | false |
rowKey | 行数据的 Key，用来优化 Table 的渲染，当表格数据多选时，所指定的rowkeyID | string | id |
emptyText | 空数据展示提示文字 | string | 暂无数据 |

### Events

事件名  |   说明    |   类型    
:----:|----|:----:|
darg-sort | 拖拽排序 | Function |

### Exposes

以下方法，可以通过`ref`获取到`fc-table`实例并调用对应的方法

事件名  |   说明    |   类型    
:----:|----|:----:|
element | `el-table` 实例 | ElTable |
tableData | 表格数据 | Array |
radio | 表格单选数据 | Array |
pageable | 分页信息，包含：page:当前页数; pageSize:每页展示数量; total:总共条数; | Object |
getTableList | 获取表格数据请求方法，只有传入requestApi时才有用 | Function |
isSelected | 是否选择的有数据，type=selection时有用 | Array |
selectedList | 选择数据列表数组，type=selection时有用 | Array |
selectedListKeys | 选择数据列表的ID数组，type=selection时有用 | Array |
search | 查询方法 | Function |
searchParam | 查询参数 | Object |
reset | 初始化表格状态 | Function |