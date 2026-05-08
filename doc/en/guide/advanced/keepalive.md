# Route Caching (KeepAlive)

Every time you switch tabs in the framework, the route components are reloaded. In certain cases, you may need to prevent the route from reloading, which can be achieved as follows.

1. In dynamic/static routes, set the value of `meta.keepAlive` to `true`. For example,
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

2. In the page component, set the component name to be consistent with the `name` field in the routing

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

[show code](https://github.com/lfcleo/fc-admin/blob/main/src/views/other/keepAlive.vue)