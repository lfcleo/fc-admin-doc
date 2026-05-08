# 路由和菜单

路由和菜单是系统的基础配置，也是系统运行的基础。请仔细阅读本文配置路由和菜单。

路由分为`动态路由`和`静态路由`，FC-Admin对两种路由都做了适配，可以单独使用`动态路由`，也可以单独使用`静态路由`，或者两者一起使用也可以。但需要注意的是，两者一起使用，菜单栏会按照`动态路由`在前，`静态路由`在后展示。如本项目中，‘首页’‘组件’‘其它’是`动态路由`。‘配置’‘关于’是`静态路由`。

## 参数字段
无论是动态路由还是静态路由，它们的参数字段是一样的。请仔细阅读并理解以下各个字段的含义：
```ts
interface MenuOptions {
    /** 路由访问路径 */
    path: string;
    /** 路由 name (对应页面组件 name, 可用作 KeepAlive 缓存标识 && 按钮权限筛选) */
    name: string;
    /** 路由重定向地址 */
    redirect?: string;
    /** 视图文件路径 */
    component?: string | (() => Promise<unknown>);
    /** 路由元信息 */
    meta: MetaProps;
    /** 多级路由嵌套 */
    children?: MenuOptions[];
}
interface MetaProps {
    /** 菜单和面包屑对应的图标 */
    icon?: string;
    /** 路由标题 (用作 document.title || 菜单的名称) */
    title: string;
    /** 菜单栏高亮,默认激活菜单的 index */
    active?: string;
    /** 打开外部链接的url地址 */
    isLink?: true;
    /** 是否在菜单中隐藏 */
    isHide?: boolean;
    /** 菜单是否全屏 */
    isFull?: boolean;
    /** 菜单是否固定在标签页中 (首页通常是固定项) */
    isAffix?: boolean;
    /** 是否缓存路由 */
    isKeepAlive?: boolean;
    /** 角色权限控制 */
    role?: string[];
    /** 标签，会在菜单栏中显示红色角标 */
    tag?: string;
}
```
接下来分别介绍如何使用`动态路由`和`静态路由`

## 动态路由

动态路由是系统自动根据接口返回的数据生成菜单栏和面包屑，不需要手动配置。

在登录成功后，发送请求获取动态路由数据，存储在本地使用。项目中关于登录后获取动态路由部分的代码

[点击查看代码](https://github.com/lfcleo/fc-admin/blob/main/src/views/login/components/passwordForm.vue#L103-#L111)

### 接口返回数据格式

项目中接口返回的数据格式参考如下：
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

## 静态路由

静态路由的配置在`/src/router/modules/`文件夹下，只要在这个文件夹下的.ts文件，都会被自动加载到路由中。加载顺序是按照文件名的顺序加载的。由于作者使用vscode的原因，如果想要排序的话，可以像作者一样，把文件名设置成数字开头排序，如`1setting.ts`或`1-setting.ts`等。

注意：无论使用动态路由还是静态路由，都不要移除`/src/router/modules/system.ts`文件，它里面是系统默认的路由配置。

和动态路由一样，静态路由的配置参数字段是一样的。接下来举例如何添加静态路由。

例如：添加一级目录为`商品`，二级目录为`商品列表`和`新增商品`的静态路由，可以这样做

1. 在`/src/router/modules/`文件夹下新建一个文件，如`goods.ts`
2. 在`goods.ts`中写入如下代码：
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
这样就完成了一个静态路由的配置，保存后会在菜单栏中显示了。同理如果还想再增加一个财务路由，就按照上面步骤创建。

再次强调注意！！！创建的静态路由文件最外层是{}，不是[]，严格按照这种格式