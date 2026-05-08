# 角色权限

框架中集成了基于角色的访问控制，项目中只设置了一个admin角色，可以根据本章思路创建多角色。

框架获取用户的角色是在登录请求token中，服务器返回用户信息`userInfo.role`字段，类型是字符串数组。

框架获取用户的权限是在获取动态路由`menu`接口，服务器返回`permissions`字段，类型是字符串数组。

## 路由菜单角色

动态路由可以根据用户登录时的角色，后台返回相应的路由，主要工作在后端。参考登录成功后的`menu`接口。

静态路由，可以根据`meta.role`字段，判断是否显示。例如`goodsList`路由菜单的配置如下
```ts
...
{
    name: "goodsList",      // 二级路由名称，名称要保持唯一
    path: "/goods/list",    // 二级路由访问路径
    component: () => import("@/views/goods/list.vue"),  //注意这里写法和动态路由不一样，一定要确保文件路径正确
    meta: {
        icon: "List",           // 菜单icon
        title: "商品列表",       // 菜单标题
        role: ["admin,editor"]  // 用户角色，不设置则表示所有用户都会展示
    }
},

...
```
代表该路由及其子路由，只有admin角色或editor角色的用户才能访问。如果用户信息`userInfo.role`包含其中一个或多个，则会在菜单栏中展示该菜单。

同样的动态路由也会执行这个逻辑，但还是建议后端根据角色返回，这样更灵活。

## 按钮操作权限

框架集成了`v-role`和`v-auth`两种指令，通过用户`userInfo.role`和`permissions`角色和权限配置。

### v-role

[点击查看代码](https://github.com/lfcleo/fc-admin/blob/main/src/views/other/directive.vue#L24-#L29)

大致实现过程是：在组件中使用`v-role`指令设置角色(可以是字符串或字符串数组)。会根据`userInfo.role`是否包含该角色，来决定是否展示。

### v-auth

[点击查看代码](https://github.com/lfcleo/fc-admin/blob/main/src/views/other/directive.vue#L10-#L22)

大致实现过程是：在组件中使用`v-auth`指令设置权限(可以是字符串或字符串数组)。会根据`permissions`是否包含该权限，来决定是否展示。