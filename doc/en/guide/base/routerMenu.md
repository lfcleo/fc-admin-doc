#  Routes and Menus

Routes and menus are fundamental configurations of the system and essential for its operation. Please read this article carefully to configure routes and menus.

Routes are divided into `Dynamic Routes` and `Static Routes`. FC-Admin has adapted to both types of routes, allowing you to use `Dynamic Routes` alone, `Static Routes` alone, or both together. However, when using both, the menu bar will display with `Dynamic Routes` first and `Static Routes` following. In this project, 'Homepage', 'Components', and 'Others' are `Dynamic Routes`, while 'Configuration' and 'About' are `Static Routes`.

##  Parameter Fields

Regardless of whether they are dynamic or static routes, their parameter fields are the same. Please read and understand the meanings of the following fields carefully:

```ts
interface MenuOptions {
    /** url path */
    path: string;
    /** Router or Menu Name (Corresponding page component name, can be used as a KeepAlive cache identifier && button permission filter) */
    name: string;
    /** Route redirect */
    redirect?: string;
    /** View file path */
    component?: string | (() => Promise<unknown>);
    /** Router Meta */
    meta: MetaProps;
    /** Childern */
    children?: MenuOptions[];
}
interface MetaProps {
    /** Icon corresponding to the menu and breadcrumb */
    icon?: string;
    /** Route title (used as document.title || name of the menu) */
    title: string;
    /** Highlight in the menu bar, default active menu's index */
    active?: string;
    /** URL address for opening an external link */
    isLink?: true;
    /** Whether to hide in the menu */
    isHide?: boolean;
    /** 菜单是否全屏 */
    isFull?: boolean;
    /** Whether the menu is fixed in the tab (the homepage is usually a fixed item) */
    isAffix?: boolean;
    /** Whether to cache the route. */
    isKeepAlive?: boolean;
    /** Role-based access control. */
    role?: string[];
    /** Tags, which show up as red badges in the menu bar. */
    tag?: string;
}
```
Next, we will introduce how to use `Dynamic Routing` and `Static Routing` respectively.

## Dynamic Routing

Dynamic routing is where the system automatically generates the menu bar and breadcrumbs based on the data returned from the interface, without requiring manual configuration.

After successful login, send a request to fetch the dynamic routing data and store it locally for use. 

[Show Code](https://github.com/lfcleo/fc-admin/blob/main/src/views/login/components/passwordForm.vue#L103-#L111)

### The format of data returned by the interface.


```json
{
    "code": 200,
    "message": "",
    "data": {
        "menu": [                   // 动态路由数组
            {
                "name": "home",                 // 一级路由名称，名称要保持唯一
                "path": "/home",                // 一级路由访问路径
                "redirect": "/home/index",      // 路由重定向地址，即默认展示的页面内容，一定要确保路径正确
                "meta": {
                    "icon": "Eleme",            // 菜单icon
                    "title": "首页"              // 菜单标题
                },
                "children": [                       // 这里就是二级路由数组了
                    {
                        "name": "dashboard",        // 二级路由名称，名称要保持唯一
                        "path": "/dashboard",       // 二级路由访问路径
                        "component": "/home/index", // 二级路由组件路径，即`/src/views`文件夹下的.vue文件路径,注意不用加/views/，一定要确保路径正确
                        "meta": {
                            "icon": "Menu",         // 菜单icon
                            "title": "控制台",       // 菜单标题
                            "isAffix": true         // 这个字段代表是否固定在标签页中，建议设置1个
                        }
                    },
                    {
                        "name": "userCenter",       // 二级路由名称，名称要保持唯一
                        "path": "/userCenter",      // 二级路由访问路径
                        "component": "/userCenter/index",   // 二级路由组件路径，即`/src/views`文件夹下的.vue文件路径,注意不用加/views/，一定要确保路径正确
                        "meta": {
                            "icon": "User",         // 菜单icon
                            "title": "账号信息",     // 菜单标题
                            "tag": "标签"           // 这个字段是在菜单栏中显示红色角标的内容
                        }
                    }
                ]
            }
            ...
        ],
        "permissions": [...]    //这部分是关于用户权限的
    }
}
```

## Static Routing

Static route configurations are located in the `/src/router/modules/` folder. Any .ts file within this folder will be automatically loaded into the routing system. The loading order follows the alphabetical order of the filenames. Due to the author's use of VSCode, if you wish to sort the files, you can name them with numbers at the beginning, such as `1setting.ts` or `1-setting.ts` .

Note: Regardless of whether you're using dynamic or static routes, do not remove the `/src/router/modules/system.ts` file. This file contains the default system route configuration.

Similar to dynamic routes, the configuration parameter fields for static routes are the same. Here's an example of how to add static routes:

For instance, to add a first-level directory named `Goods`, with second-level directories `Goods List` and `Add Goods`, follow these steps:

1. Create a new file in the `/src/router/modules/` folder, e.g., `goods.ts`
2. Write the following code in `goods.ts`:
```ts
import { RouteRecordRaw } from "vue-router";

export default {            // 注意！！！，最外层是{}，不是[]，严格按照这种格式
    name: "goods",          // 一级路由名称，名称要保持唯一
    path: "/goods",         // 一级路由访问路径
    require: "/goods/list", // 路由重定向地址，即默认展示的页面内容，一定要确保路径正确
    meta: {
        icon: "Shop",       // 菜单icon
        title: "商品"        // 菜单标题
    },
    children: [                     // 这里就是二级路由数组了
        {
            name: "goodsList",      // 二级路由名称，名称要保持唯一
            path: "/goods/list",    // 二级路由访问路径
            component: () => import("@/views/goods/list.vue"),  //注意这里写法和动态路由不一样，一定要确保文件路径正确
            meta: {
                icon: "List",           // 菜单icon
                title: "商品列表",       // 菜单标题
            }
        },
        {
            name: "goodsAdd",       // 二级路由名称，名称要保持唯一
            path: "/goods/add",     // 二级路由访问路径
            component: () => import("@/views/goods/add.vue"),  //注意这里写法和动态路由不一样，一定要确保文件路径正确
            meta: {
                icon: "CirclePlusFilled",   // 菜单icon
                title: "新增商品"            // 菜单标题
            }
        }
    ]
} as RouteRecordRaw
```
This completes the configuration of a static route. After saving, it will appear in the menu bar. Similarly, if you want to add another finance-related route, simply follow the above steps to create it.

I cannot stress enough the importance of this point! The outermost layer of the static route file you create should be `{}`, not `[]`. Please adhere strictly to this format.