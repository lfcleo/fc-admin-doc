# Type Declarations
TypeScript (TS) is a superset of JavaScript (JS), adding static type checking and some new language features to JS.

TS emphasizes static typing, allowing potential type errors to be caught at compile time. This makes the code more robust, maintainable, and reliable, enabling the discovery and correction of type errors in advance, reducing runtime errors.

The framework places types in the /src/models/ directory. When writing your program, you can import these types for use.

For example: when adding a product management module, create an interface type file related to goodsModel.ts under the src/models/ folder:

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

When using these types, import them into your component or module.

```ts
import { RequestGoodsModel, GoodsModel } from "@/models/goodsModel";
```



