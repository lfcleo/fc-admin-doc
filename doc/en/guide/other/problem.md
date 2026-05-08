# Frequently asked questions

> 1. When a page is stuck and reloaded, the terminal displays the following message:

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

This is due to on-demand loading. In the local environment, when running the project for the first time, open the page to load the Element Plus component. The page will not appear again after running once. Use with confidence.

**This situation will not occur in the production environment**

> 2.  Why are some features in the example not available in the local environment after updating, downloading, and running the code?

The project will continue to be updated, adding some practical features or pages. If the dynamic routing data stored locally has not changed after logging in to the example address or local before. So you need to log out and log in again to get the latest dynamic routing array.