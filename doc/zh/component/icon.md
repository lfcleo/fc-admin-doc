# 自定义图标

[本章示例代码](https://github.com/lfcleo/fc-admin/blob/main/src/views/vab/iconfont/index.vue)

[查看预览](https://www.fcadmin.fun/#/vab/iconfont)


自定义图标在`/src/assets/icons`目录下，使用svg组件方式，为了使图标组件名称与其他组件发生冲突，FC-Admin在注册图标组件时使用了前缀

el-icon-* 为@element-plus/icons组件

fc-icon-* 为扩展的图标组件

```vue
<el-icon>
	<fc-icon-vue />
</el-icon>
```

因为SVG图标组件扩展非常便利，所以本项目并未集成很多的图标。使用者可以随意扩展“有用”的图标。

## 使用方法

1. `/src/assets/icons` 中创建图标单文件组件，例如:
新建`/scr/assets/icons/Vue.vue`
```vue
<template>
    <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M42.666667 128h170.666666l298.666667 512 298.666667-512h170.666666L512 938.666667 42.666667 128z m369.792 0L512 298.666667l99.541333-170.666667h172.16L512 597.333333 240.298667 128h172.16z"
            p-id="4634"></path>
    </svg>
</template>
```

2. `/src/assets/icons/index.ts`中导出
```ts
...
export { default as Vue } from './Vue.vue'
```
3. 使用
```vue
...
<el-icon>
	<fc-icon-vue />
</el-icon>
...
```
SVG代码推荐使用[iconFont](https://www.iconfont.cn/)网站，可以很方便的复制SVG代码。

推荐iconFont项目：[iconFont REMIX ICON](https://www.iconfont.cn/collections/detail?spm=a313x.7781069.0.da5a778a4&cid=25353)