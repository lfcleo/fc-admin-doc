# 路由缓存(KeepAlive)

框架中每次切换标签，都会重新加载路由组件，在某些情况下，需要让路由不重新加载，可以这样做。

1. 在动态/静态路由中，设置`meta.keepAlive`的值为`true`,例如
```json
...
{
    "name": "otherKeepAlive",
    "path": "/other/keepAlive",
    "component": "/other/keepAlive",
    "meta": {
        "title": "页面保活(KeepAlive)",
        "icon": "CollectionTag",
        "isKeepAlive": true             //设置该路由缓存
    }
},
...
```
2. 在页面组件中，设置组件名称，注意要和路由中的`name`字段保持一致
```ts
...
<script setup lang='ts'>
//使用keep-alive必须要填写name,且与路由中的name保持一致
defineOptions({
    name: "otherKeepAlive"
})
</script>
...
```

[点击查看代码](https://github.com/lfcleo/fc-admin/blob/main/src/views/other/keepAlive.vue)