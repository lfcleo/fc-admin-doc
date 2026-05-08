# 网络请求

项目已经在本地配置好了跨域、axios，并封装了请求方法。

## 跨域

本地环境和生产环境都配置了跨域。按照以下配置进行

设置`.env.development`或`.envproduction`文件中的这两个字段
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

## 接口格式

每个接口的格式如下：
```json
{
    "code": 200,    //自定义状态码，number类型。200表示成功，401表示登录失效，会退出登录并跳转到登录页
    "message": "",  //自定义返回消息，string类型
    "data": any     //返回数据，any类型
}
```

## 自定义接口

项目使用axios库进行网络请求，支持`Get`、`Post`、`Put`、`Delete`四种请求方式。

例如：新建商品接口`http://xxxx.com/goods/create`，请求方式为POST，请求参数为`name`和`price`.返回数据格式如下：
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

1. 在`.env.development`或`.envproduction`文件中设置`VITE_VUE_API_BASEURL`为域名`http://xxxx.com`,参考上方`跨域`中的配置

2. 在`src/models/`文件夹下创建关于接口类型文件`goodsModel.ts`文件。只需要解析接口`data`中的数据即可，无需再解析`code`和`message`。内容如下：
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

这里推荐一个vscode的插件，`json转ts`可以自动生成接口类型文件。在vscode的拓展中搜索安装，有介绍如何使用，把json数据转为typescript的interface，修改下名称即可。

3. 在`src/api/modules/`文件夹下，创建`goods.ts`文件。以后关于商品管理的接口都可以写在这个文件中。内容如下：
```ts
import http from "@/api";
import { RequestGoodsModel, GoodsModel } from "@/models/goodsModel";

// 获取表格列表
export const createGoodsApi = (params: RequestGoodsModel) => {
    return http.post<GoodsModel>('/goods/create', params);
};
```

4. 在你需要使用接口的地方，导入使用即可，例如
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

## 请求拦截器和响应拦截器

网络拦截器代码在`/src/api/index.ts`文件中，已经做了一些简单的封装，可根据实际情况改写。

[本章示例代码](https://github.com/lfcleo/fc-admin/blob/main/src/api/index.ts)