# 类型声明

TypeScript (TS) 是 JavaScript (JS) 的一个超集，它在 JS 的基础上添加了静态类型检查和一些新的语言特性。

TS 强调静态类型，可以在编译时捕获潜在的类型错误。这使得代码更加健壮、可维护和可靠，可以提前发现并修复类型错误，减少运行时错误。

框架把类型放置在`/src/models/`目录中，在编写程序时，你可以导入这些类型来使用。

例如：新增商品管理模块，在`src/models/`文件夹下创建关于接口类型文件`goodsModel.ts`：
```ts
// 创建商品请求数据，这里只做举例
export interface RequestGoodsModel {
    name: string;
    price: number;
}
// 创建商品返回数据，这里只做举例
export interface GoodsModel {
  id: number;
  name: string;
  price: number;
  createdAt: string;
}
```

使用时导入

```ts
import { RequestGoodsModel, GoodsModel } from "@/models/goodsModel";
```



