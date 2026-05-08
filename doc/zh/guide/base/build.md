# 运行和打包

## 运行

项目中设置了两种运行方式，分别如下
```ssh
npm run dev         # 在本地开启测试环境的服务
npm run start       # 在本地开启正式环境服务
```

## 打包

项目中设置了两种打包方式，分别如下
```ssh
npm run build       # 打包到正式环境（基础配置取.env.production 文件中内容）
npm run build:env   # 打包到测试环境（基础配置取.env.development 文件中内容）
```

打包好的项目在 dist 文件夹中。