# 配置

## Logo

项目根目录下`/public/logo.png`,`/public/img/logo.png`文件为项目Logo，可自行替换。

## 配置文件

项目分为`开发环境`和`生产环境`，都在项目根目录
```
├── .env.development    # 开发环境配置文件
├── .env.production     # 生产环境配置文件
```

## 具体配置

`开发环境`和`生产环境`的配置文件内容基本一致，具体如下：
```env
# 正式环境环境
VITE_NODE_ENV = production

# 版本号
VITE_VUE_VERSION = 1.0.0

# 标题
VITE_VUE_TITLE = FC-Admin

# 接口地址
VITE_VUE_API_BASEURL = /api

# 开发环境跨域代理，支持配置多个
VITE_PROXY = [["/api","https://console-mock.apipost.cn/mock/ebfa39e6-1bfb-4a2b-aed1-01bb7b1706b7"]]

# 本地端口
VITE_VUE_PORT = 1235

# 首页地址
VITE_DASHBOARD_URL = /dashboard

# 请求超时
VITE_TIMEOUT = 10000

# Token名称
VITE_TOKEN_NAME = authorization

# 本地存储localStorage是否加密, 为空不加密，加密方式可填写Base64/AES/DES/Rabbit/RC4，【正式环境建议加密增加安全性】
VITE_LS_ENCRYPTION = RC4

# 本地存储localStorageAES加密秘钥，位数建议填写8的倍数
VITE_LS_ENCRYPTION_KEY = 2XNN4K8LC0ELVWN4

# 是否禁止调试，建议正式环境设置true,开发环境设置为false
VITE_BAN_DEBUG = true
```

根据注释，配置文件中的内容。

## 添加自定义配置

作为一种规范推荐使用 `VITE_` 作为自定义配置前缀，例如想要在`.env.production`文件添加自定义配置 `VITE_SETTING = set`
```
...
VITE_SETTING = set
...
```

## 使用配置文件中的内容

例如想在项目中使用项目名称`VITE_SETTING`,在`ts`文件中可以这样使用
```ts
<script setup lang='ts'>
const appSet = import.meta.env.VITE_SETTING
console.log(appSet)
</script>
```