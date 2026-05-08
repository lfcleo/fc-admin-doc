# 布局

项目提供了以下4种布局方式`默认：default` | `通栏：header` | `经典：menu` | `功能坞：dock`.建议生产环境选择1种布局方式。

修改`/src/store/system/global.ts`中的`sysLayout`字段可更改默认显示的布局。
```ts
...
//布局 默认：default | 通栏：header | 经典：menu | 功能坞：dock
sysLayout: 'default',
...
```

## 默认布局
![default](/images/base/default.png)

## 通栏布局
![header](/images/base/header.png)

## 经典布局
![menu](/images/base/menu.png)

## 功能坞布局
![dock](/images/base/dock.png)