# Role Permissions

The framework integrates role-based access control, with only one `admin` role set up in the project. You can create multiple roles based on the ideas presented in this chapter.

The framework obtains the user's role from the login request token, where the server returns the user information in the `userInfo.role` field, which is an array of strings.

The framework acquires the user's permissions from the `menu` interface for dynamic routing, where the server returns the `permissions` field, which is also an array of strings.

## Route Menu Roles

Dynamic routes can be determined by the user's role at login, with the backend returning the corresponding routes. Refer to the `menu` interface after successful login for more details.

Static routes can be displayed or hidden based on the `meta.role` field. For example, the configuration for the `goodsList` route menu is as follows:

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

This signifies that the route and its sub-routes are accessible only to users with the 'admin' or 'editor' roles. If the user's information `userInfo.role` includes one or more of these roles, the menu will be displayed in the menu bar.

Similarly, dynamic routes also execute this logic, but it is still recommended that the backend return routes based on roles for greater flexibility.

## Button Operation Permissions

The framework integrates two directives, `v-role` and `v-auth`, which are configured through the user's `userInfo.role` and `permissions`. These directives control button operation permissions based on the user's roles and permissions.

### v-role

[show code](https://github.com/lfcleo/fc-admin/blob/main/src/views/other/directive.vue#L24-#L29)

The general implementation process is as follows: use the `v-role` directive in the component to set the role(s) (which can be a string or an array of strings). It will determine whether to display the component based on whether `userInfo.role` includes the specified role.

### v-auth

[show code](https://github.com/lfcleo/fc-admin/blob/main/src/views/other/directive.vue#L10-#L22)

The general implementation process is: use the `v-auth` directive in the component to set the permission(s) (which can be a string or an array of strings). It will determine whether to display the component based on whether `permissions` includes the specified permission.