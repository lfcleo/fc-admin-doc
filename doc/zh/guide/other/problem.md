# 常见问题

> 1. 打开某个页面卡顿重新加载，终端出现如下信息：

```sh
17:16:45 [vite] ✨ optimized dependencies changed. reloading
17:17:38 [vite] ✨ new dependencies optimized: element-plus/es/components/skeleton/style/css, element-plus/es/components/aside/style/css, element-plus/es/components/menu-item-group/style/css
17:17:38 [vite] ✨ optimized dependencies changed. reloading
17:18:14 [vite] ✨ new dependencies optimized: element-plus/es/components/button-group/style/css
17:18:14 [vite] ✨ optimized dependencies changed. reloading
17:18:26 [vite] ✨ new dependencies optimized: element-plus/es/components/date-picker/style/css
17:18:26 [vite] ✨ optimized dependencies changed. reloading
17:18:33 [vite] ✨ new dependencies optimized: element-plus/es/components/image-viewer/style/css, element-plus/es/components/upload/style/css, vue-cropper
17:18:33 [vite] ✨ optimized dependencies changed. reloading
17:47:26 [vite] ✨ new dependencies optimized: element-plus/es/components/pagination/style/css, element-plus/es/components/table-column/style/css, element-plus/es/components/radio/style/css
17:47:26 [vite] ✨ optimized dependencies changed. reloading
```
这是由于按需加载的原因，在本地环境下，首次运行项目，打开页面加载Element-Plus组件。页面运行过一次下次就不会再有了。放心使用。

**生产环境不会出现这样的情况**

> 2. 为什么示例中有的功能，更新下载代码运行后，本地环境中没有？

项目会不断更新，增加一些实用的功能或页面。如果之前在示例地址或本地登录过，本地存储的动态路由数据没有改变。所以需要退出下登录，重新登录就能获取最新的动态路由数组。