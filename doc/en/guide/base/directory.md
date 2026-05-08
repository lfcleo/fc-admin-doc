# Directory Structure

```shell
├── .env.development    # Development environment configuration file
├── .env.production     # Production environment configuration file
├── .gitignore          # Git ignores configuration file
├── .vscode             # Vscode configuration folder
├── README.md           # README
├── auto-imports.d.ts   # Automatically import file
├── components.d.ts     # Component declaration file
├── index.html          # index.html
├── package-lock.json   # package-lock.json
├── package.json        # package.json
├── public              # Static Resource Folder
│   ├── img             # Image Folder
│   └── logo.png        # logo
├── src                 # Code Folder
│   ├── App.vue         # Root Component
│   ├── api             # API Folder
│   │   ├── index.ts    # API index
│   │   ├── modules     # API Modules Folder
│   │   └── utils       # API Utils Folder
│   ├── assets          # Resource Folder
│   │   └── icons       # Custom icon folder
│   ├── components      # components folder
│   │   ├── fcEcharts           # Chart Components
│   │   ├── fcIconSelect        # Icons Select Components
│   │   ├── fcPasswordStrength  # Password Strength Components
│   │   ├── fcQrCode            # qrCode Components
│   │   ├── fcQuery             # Query Components
│   │   ├── fcSelectFilter      # Select Filter Components
│   │   ├── fcStatistic         # Statistic Components
│   │   ├── fcTable             # Table Components
│   │   ├── fcTreeFilter        # Tree Filter Components
│   │   ├── fcTrend             # Trend Components
│   │   ├── fcUploadImg         # Upload Image Components
│   │   ├── fcUploadImgs        # Upload Images Components
│   │   └── fcWangEditor        # Wang Editor Components
│   ├── directives              # Directives Folder
│   │   ├── index.ts            # Directives index
│   │   └── modules             # Directives Modules Folder
│   │       ├── auth.ts         # Auth Directives
│   │       ├── copy.ts         # Copy Directives
│   │       ├── debounce.ts     # Debounce Directives
│   │       ├── longpress.ts    # Longpress Directives
│   │       ├── role.ts         # Role Directives
│   │       ├── throttle.ts     # Throttle Directives
│   │       ├── time.ts         # Time Directives
│   │       └── waterMarker.ts  # waterMarker Directives
│   ├── layout                  # Layout Folder
│   │   ├── components          # Layout Components Folder
│   │   │   ├── navMenu.vue     # Menu Component
│   │   │   ├── sideM.vue       # Mobile sidebar Component
│   │   │   ├── tags.vue        # Tags Component
│   │   │   ├── topbar.vue      # Topb Bar Component
│   │   │   └── userbar.vue     # User Bar Component
│   │   ├── index.vue           # Layout Index
│   │   ├── layoutDefault       # Default Layout
│   │   │   └── index.vue
│   │   ├── layoutDock          # Dock Layout
│   │   │   └── index.vue
│   │   ├── layoutHeader        # Header Layout
│   │   │   └── index.vue
│   │   ├── layoutMenu          # Menu Layout
│   │   │   └── index.vue
│   │   ├── other               # Other Page Folder
│   │   │   ├── 404.vue         # 404
│   │   │   └── empty.vue       # Empty
│   │   └── views               # Views
│   │       ├── search.vue      # Search View
│   │       ├── setting.vue     # Setting View
│   │       └── tasks.vue       # Tasks View
│   ├── locale              # Internationalization
│   │   ├── index.ts        # Internationalization Index
│   │   └── lang            # Internationalization Modules Folder
│   │       ├── en.ts       # English File
│   │       └── zh-cn.ts    # Chinese File
│   ├── main.ts             # main
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
├── tsconfig.json       # Project configuration file
├── tsconfig.node.json  # Building configuration files
└── vite.config.ts      # Vite configuration file
```