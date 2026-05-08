# 目录结构

```shell
├── .env.development    # 开发环境配置文件
├── .env.production     # 生产环境配置文件
├── .gitignore          # git忽略文件
├── .vscode             # vscode配置文件夹
├── README.md           # 项目说明文档
├── auto-imports.d.ts   # 自动导入文件
├── components.d.ts     # 组件声明文件
├── index.html          # 入口文件
├── package-lock.json   # 包锁文件
├── package.json        # 包管理文件
├── public              # 静态资源文件夹
│   ├── img             # 图片文件夹
│   └── logo.png        # 项目logo
├── src                 # 源码文件夹
│   ├── App.vue         # 根组件
│   ├── api             # 接口文件夹
│   │   ├── index.ts    # 接口入口文件
│   │   ├── modules     # 自定义接口模块文件夹
│   │   └── utils       # 接口配置工具文件夹
│   ├── assets          # 资源文件夹
│   │   └── icons       # 自定义图标文件夹，详见自定义图标文档
│   ├── components      # 组件文件夹
│   │   ├── fcEcharts           # 图表组件
│   │   ├── fcIconSelect        # 图标选择组件
│   │   ├── fcPasswordStrength  # 密码强度组件
│   │   ├── fcQrCode            # 二维码组件
│   │   ├── fcQuery             # 查询组件
│   │   ├── fcSelectFilter      # 筛选组件
│   │   ├── fcStatistic         # 统计组件
│   │   ├── fcTable             # 表格组件
│   │   ├── fcTreeFilter        # 树型筛选组件
│   │   ├── fcTrend             # 趋势组件
│   │   ├── fcUploadImg         # 单图片上传组件
│   │   ├── fcUploadImgs        # 多图片上传组件
│   │   └── fcWangEditor        # 富文本编辑器组件
│   ├── directives              # 自定义指令文件夹
│   │   ├── index.ts            # 指令入口文件
│   │   └── modules             # 自定义指令模块文件夹
│   │       ├── auth.ts         # 权限指令
│   │       ├── copy.ts         # 复制指令
│   │       ├── debounce.ts     # 防抖指令
│   │       ├── longpress.ts    # 长按指令
│   │       ├── role.ts         # 角色指令
│   │       ├── throttle.ts     # 节流指令
│   │       ├── time.ts         # 时间指令
│   │       └── waterMarker.ts  # 文字水印指令
│   ├── layout                  # 布局文件夹
│   │   ├── components          # 布局组件文件夹
│   │   │   ├── navMenu.vue     # 导航菜单组件
│   │   │   ├── sideM.vue       # 手机端侧边栏组件
│   │   │   ├── tags.vue        # 标签页组件
│   │   │   ├── topbar.vue      # 顶部栏组件
│   │   │   └── userbar.vue     # 用户栏组件
│   │   ├── index.vue           # 布局入口文件
│   │   ├── layoutDefault       # 默认布局文件夹
│   │   │   └── index.vue
│   │   ├── layoutDock          # 功能坞布局文件夹
│   │   │   └── index.vue
│   │   ├── layoutHeader        # 通栏布局文件夹
│   │   │   └── index.vue
│   │   ├── layoutMenu          # 经典布局文件夹
│   │   │   └── index.vue
│   │   ├── other               # 其他通用页面文件夹
│   │   │   ├── 404.vue         # 404页面
│   │   │   └── empty.vue       # 空页面
│   │   └── views               # 布局通用视图文件夹
│   │       ├── search.vue      # 搜索视图
│   │       ├── setting.vue     # 设置视图
│   │       └── tasks.vue       # 任务视图
│   ├── locale              # 多语言文件夹
│   │   ├── index.ts        # 多语言入口文件
│   │   └── lang            # 多语言模块文件夹
│   │       ├── en.ts       # 英文语言包
│   │       └── zh-cn.ts    # 中文语言包
│   ├── main.ts             # 入口文件
│   ├── models                  # 数据模型文件夹
│   │   ├── authModel.ts        # 用户相关模型
│   │   ├── departmentModel.ts  # 部门相关模型
│   │   ├── menu.d.ts           # 菜单模型
│   │   └── tableModel.ts       # 表格相关模型
│   ├── router                  # 路由文件夹
│   │   ├── index.ts            # 路由入口文件
│   │   ├── model.d.ts          # 路由模型
│   │   └── modules             # 静态路由模块文件夹
│   │       ├── 1setting.ts     # 自定义静态配置模块
│   │       ├── 2about.ts       # 自定义静态配置模块
│   │       └── system.ts       # 静态系统配置模块
│   ├── store                   # 状态管理文件夹    
│   │   ├── index.ts            # 状态管理入口文件
│   │   ├── modules             # 状态管理模块文件夹
│   │   │   ├── auth.ts         # 用户相关状态管理
│   │   │   ├── menu.ts         # 菜单相关状态管理
│   │   │   └── search.ts       # 搜索相关状态管理
│   │   ├── securels.ts         # 加密状态管理
│   │   └── system              # 系统状态管理
│   │       ├── global.ts       # 全局状态管理，包括语言，暗黑模式，主题色等
│   │       ├── keepAlive.ts    # 页面保活状态管理
│   │       └── viewTags.ts     # 标签页状态管理
│   ├── style                   # 样式文件夹
│   │   ├── app.scss
│   │   ├── dark.scss
│   │   ├── fix.scss
│   │   ├── media.scss
│   │   ├── pages.scss
│   │   └── style.scss
│   ├── utils
│   │   ├── color.ts
│   │   ├── compress.ts
│   │   ├── encryption.ts
│   │   ├── menuRoute.ts
│   │   ├── time.ts
│   │   └── uuid.ts
│   ├── views
│   │   ├── about
│   │   │   └── index.vue
│   │   ├── home
│   │   │   └── index.vue
│   │   ├── login
│   │   │   ├── components
│   │   │   │   ├── commonPage.vue
│   │   │   │   ├── passwordForm.vue
│   │   │   │   └── phoneForm.vue
│   │   │   ├── index.vue
│   │   │   ├── resetPassword.vue
│   │   │   └── userRegister.vue
│   │   ├── other
│   │   │   ├── directive.vue
│   │   │   ├── full.vue
│   │   │   ├── iframe.vue
│   │   │   ├── keepAlive.vue
│   │   │   └── layout.vue
│   │   ├── setting
│   │   │   └── menu.vue
│   │   ├── userCenter
│   │   │   ├── components
│   │   │   │   ├── account.vue
│   │   │   │   ├── logs.vue
│   │   │   │   ├── password.vue
│   │   │   │   ├── pushSettings.vue
│   │   │   │   ├── setting.vue
│   │   │   │   ├── space.vue
│   │   │   │   └── upToEnterprise.vue
│   │   │   └── index.vue
│   │   └── vab
│   │       ├── data
│   │       │   ├── echarts.vue
│   │       │   ├── qrcode.vue
│   │       │   └── statistic.vue
│   │       ├── form
│   │       │   ├── editor.vue
│   │       │   ├── iconSelect.vue
│   │       │   ├── query.vue
│   │       │   ├── selectFilter.vue
│   │       │   ├── treeFilter.vue
│   │       │   └── uploadImg.vue
│   │       ├── iconfont
│   │       │   └── index.vue
│   │       └── table
│   │           ├── detail.vue
│   │           ├── index.vue
│   │           └── search.vue
│   └── vite-env.d.ts
├── tsconfig.json       # 项目配置文件
├── tsconfig.node.json  # 构建配置文件
└── vite.config.ts      # vite配置文件
```