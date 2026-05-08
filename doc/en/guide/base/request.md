# Network Requests

Cross-origin requests, Axios, and request methods have already been set up and encapsulated in the project.

## Cross-Origin Requests

Cross-origin has been configured for both the local development and production environments.

You should set up the following fields in either the `.env.development` or `.env.production` files accordingly.

```env
# 接口地址
VITE_VUE_API_BASEURL = /api

# 环境跨域代理，支持配置多个
VITE_PROXY = [["/api","你的接口地址"]]
```
如果不想使用跨域，接口可以直接访问的话，可以这样修改
```
VITE_VUE_API_BASEURL = 你的接口地址

VITE_PROXY = []
```

## Interface Format

Each interface follows the format outlined below:
```json
{
    "code": 200,    //自定义状态码，number类型。200表示成功，401表示登录失效，会退出登录并跳转到登录页
    "message": "",  //自定义返回消息，string类型
    "data": any     //返回数据，any类型
}
```

## Custom Interfaces

The project uses the axios library for network requests and supports four types of request methods: `GET`, `POST`, `PUT`, and `DELETE`.

Example:
Consider a new product creation interface at `http://xxxx.com/goods/create` with a `POST` request method. The request parameters include `name` and `price`. The format of the returned data would look like this:
```json
{
    "code": 200,
    "message": "",
    "data": {
        "id": 1,
        "name": "商品1",
        "price": 9999.99,
        "createdAt": "2024-07-30T08:00:00.000+08:00"
    }
}
```

1. In the `.env.development` or `.envproduction` file, set the `VITE_VUE_API_BASEURL` variable to the domain `http://xxxx.com`. Refer to the configuration mentioned in the section about `cross-origin` settings.

2. Under the `src/models/` directory, create a file related to the interface type called `goodsModel.ts`. In this file, you only need to parse the data from the `data` field of the interface; there's no need to further parse `code` and `message`. 

```ts
// 创建商品请求数据
export interface RequestGoodsModel {
    name: string;
    price: number;
}
// 创建商品返回数据
export interface GoodsModel {
  id: number;
  name: string;
  price: number;
  createdAt: string;
}
```

Here, I recommend a VSCode extension, `json to ts`, which can automatically generate interface type files. You can search and install it among the VSCode extensions. There's an introduction on how to use it, converting JSON data into TypeScript interfaces, with only the name needing modification.

3. In the `src/api/modules/` folder, create the `goods.ts` file. All future interfaces related to product management can be written in this file. The content should look as follows:

```ts
import http from "@/api";
import { RequestGoodsModel, GoodsModel } from "@/models/goodsModel";

// 获取表格列表
export const createGoodsApi = (params: RequestGoodsModel) => {
    return http.post<GoodsModel>('/goods/create', params);
};
```

4. In the places where you need to use the interfaces, simply import and use them, for example:
```ts
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { createGoodsApi } from "@/api/modules/goods";
import { RequestGoodsModel,GoodsModel } from "@/models/goodsModel";

// 商品数据
const goodsData = ref<GoodsModel>({})

// 创建商品网络请求方法
const createGoods = async () => {
    let reqData:RequestGoodsModel = {
        name:"商品名称",
        price:9999.99
    }
    let data = await createGoodsApi(reqData);
    goodsData.value = data.data
}
</script>
```

## Request Interceptor

The network interceptor code is located in the `/src/api/index.ts` file, which has already been somewhat encapsulated. Feel free to rewrite it according to your actual needs.

[Show Code](https://github.com/lfcleo/fc-admin/blob/main/src/api/index.ts)