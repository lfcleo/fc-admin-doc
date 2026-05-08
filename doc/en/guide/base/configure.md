# Site Config

## Logo

Replace `/public/logo.png`,`/public/img/logo.png` in the `public` folder

## Configuration File

There are `development` and `production` in the root directory

```
├── .env.development    # Development configuration file
├── .env.production     # Production configuration file
```

## Content

```env
VITE_NODE_ENV = production

# Version
VITE_VUE_VERSION = 1.0.0

# Title
VITE_VUE_TITLE = FC-Admin

# Base URL
VITE_VUE_API_BASEURL = /api

# PROXY,Supports the configuration of multiple
VITE_PROXY = [["/api","https://console-mock.apipost.cn/mock/ebfa39e6-1bfb-4a2b-aed1-01bb7b1706b7"]]

# port
VITE_VUE_PORT = 1235

# DASHBOARD_URL
VITE_DASHBOARD_URL = /dashboard

# Request Timeout
VITE_TIMEOUT = 10000

# Token name
VITE_TOKEN_NAME = authorization

# Set whether localStorage is encrypted, Not filling in is setting up not to encrypt，The encryption method can be filled in Base64/AES/DES/Rabbit/RC4，【Formal environment suggests encryption】
VITE_LS_ENCRYPTION = RC4

# localStorage secret key
VITE_LS_ENCRYPTION_KEY = 2XNN4K8LC0ELVWN4

# Is debugging prohibited? It is recommended to set true in the formal environment and false in the development environment
VITE_BAN_DEBUG = true
```

## Add Custom Configuration

As a standard, it is recommended to use `VITE_` as a custom configuration prefix.

for example：
`.env.production`
```
...
VITE_SETTING = set
...
```

Using `VITE_SETTING` in other files

```ts
<script setup lang='ts'>
const appSet = import.meta.env.VITE_SETTING
console.log(appSet)
</script>
```