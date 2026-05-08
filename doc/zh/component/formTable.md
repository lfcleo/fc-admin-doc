# 表单表格

[本章示例代码](https://github.com/lfcleo/fc-admin/blob/main/src/views/vab/form/formTable.vue)

[查看预览](https://www.fcadmin.fun/#/vab/form/formTable)

## 使用方法

```vue
...
<!-- 简单使用 -->
<fc-form-table stripe ref="ftRef" :data="form.list" :columns="columns"
    :data-template="dataTemplate">
    <template #time="scope">
        <el-time-select v-model="scope.row.time"></el-time-select>
    </template>
    <template #type="scope">
        <el-select v-model="scope.row.type" placeholder="请选择">
            <el-option v-for="item in typeDic" :key="item.value" :label="item.label"
                :value="item.value"></el-option>
        </el-select>
    </template>
    <template #val="scope">
        <el-input v-model="scope.row.val" placeholder="请输入内容"></el-input>
    </template>
    <template #checked="scope">
        <el-checkbox v-model="scope.row.checked"></el-checkbox>
    </template>
    <template #open="scope">
        <el-switch v-model="scope.row.open"></el-switch>
    </template>
</fc-form-table>
...
```

## 参数说明

### Attributes

属性名  |   说明    |   类型    |   默认值
:----:|----|:----:|:----:|
columns | 列配置项，必填 | FTColumnProps数组 | - |
data | table data 数据 | any[] | - |
dataTemplate | 默认数据模板 | any | - |
border | 是否带有纵向边框 | boolean | true |
rowKey | 行数据的 Key，指定的rowkeyID | string | id |
emptyText | 空数据展示提示文字 | string | 暂无数据 |
hideAdd | 是否隐藏新增按钮 | boolean | false |