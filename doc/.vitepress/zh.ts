import { defineConfig, type DefaultTheme } from 'vitepress'

export default defineConfig({
    themeConfig: {
        // editLink: {
        //     pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
        //     text: '在 GitHub 上编辑此页面'
        // },
        docFooter: {
            prev: '上一页',
            next: '下一页'
        },
        footer: {
            // message: '基于 MIT 许可发布',
            copyright: `© 2024-${new Date().getFullYear()} FC-Admin`
        },
        outline: {
            label: '页面导航'
        },
        lastUpdated: {
            text: '最后更新于',
            formatOptions: {
                dateStyle: 'short',
                timeStyle: 'medium'
            }
        },
        langMenuLabel: '多语言',
        returnToTopLabel: '回到顶部',
        sidebarMenuLabel: '菜单',
        darkModeSwitchLabel: '主题',
        lightModeSwitchTitle: '切换到浅色模式',
        darkModeSwitchTitle: '切换到深色模式',
        nav: [
            { text: '指南', link: '/guide/base/introduce' },
            { text: '组件', link: '/component/base' },
            { text: '联系', link: '/contact' },
            {
                text: '演示地址',
                items: [
                    {
                        text: '地址1',
                        link: 'https://www.fcadmin.fun'
                    }
                ]
            },
            {
                text: '更新日志',
                items: [
                    {
                        text: 'V1.0.1',
                        link: '/version'
                    }
                ]
            }
        ],
        sidebar: {
            '/guide/': {
                base: '/guide/',
                items: sidebarGuide()
            },
            '/component/': {
                base: '/component/',
                items: sidebarComponent()
            }
        }
    }
})
/**
 * 侧边栏导航指南函数
 * @returns 返回一个DefaultTheme.SidebarItem类型的数组，包含侧边栏导航项
 */
function sidebarGuide(): DefaultTheme.SidebarItem[] {
    return [
        {
            base: '/guide/base/',
            text: '基础',
            collapsed: false,
            items: [
                { text: '什么是FC-Admin', link: 'introduce' },
                { text: '快速开始', link: 'quickstart' },
                { text: '目录结构', link: 'directory' },
                { text: '项目配置', link: 'configure' },
                { text: '布局', link: 'layout' },
                { text: '路由和菜单', link: 'routerMenu' },
                { text: '网络请求', link: 'request' },
                { text: '运行和打包', link: 'build' },
            ]
        },
        {
            base: '/guide/advanced/',
            text: '进阶',
            collapsed: false,
            items: [
                { text: '主题和暗黑模式', link: 'theme' },
                { text: '角色权限', link: 'role' },
                { text: '类型声明', link: 'interface' },
                { text: '路由缓存', link: 'keepalive' },
                { text: '国际化', link: 'i18n' },
                { text: '自定义指令', link: 'directive' },
            ]
        },
        {
            base: '/guide/other/',
            text: '其它',
            collapsed: false,
            items: [
                { text: '开源项目', link: 'project' },
                { text: '常见问题', link: 'problem' },
            ]
        }
    ]
}

/**
 * 侧边栏组件函数
 * @returns 返回 DefaultTheme.SidebarItem 数组类型的侧边栏项列表
 */
function sidebarComponent(): DefaultTheme.SidebarItem[] {
    return [
        { text: '前言', link: 'base' },
        { text: 'icon 图标', link: 'icon' },
        { text: 'password-strength 密码检测', link: 'passwordStrength' },
        { text: 'qrcode 二维码', link: 'qrcode' },
        { text: 'query 查询器', link: 'query' },
        { text: 'select-filter 分类筛选器', link: 'selectFilter' },
        { text: 'statistic 统计数值', link: 'statistic' },
        { text: 'table 表格', link: 'table' },
        { text: 'tree-filter 树形筛选器', link: 'treeFilter' },
        { text: 'upload-img 图片上传', link: 'uploadImg' },
        { text: 'char-verify 字符验证（V1.0.1）', link: 'charVerify' },
        { text: 'word-verify 文字验证（V1.0.1）', link: 'wordVerify' },
        { text: 'form-table 表单表格（V1.0.1）', link: 'formTable' },
    ]
}