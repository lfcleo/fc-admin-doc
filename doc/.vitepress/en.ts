import { defineConfig, type DefaultTheme } from 'vitepress'

export default defineConfig({
    themeConfig: {
        // editLink: {
        //     pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
        //     text: '在 GitHub 上编辑此页面'
        // },
        docFooter: {
            prev: 'previous page',
            next: 'next page'
        },
        footer: {
            // message: 'Distributed under the MIT License',
            copyright: `© 2024-${new Date().getFullYear()} FC-Admin`
        },
        outline: {
            label: 'Navigation'
        },
        lastUpdated: {
            text: 'Last Updated',
            formatOptions: {
                dateStyle: 'short',
                timeStyle: 'medium'
            }
        },
        nav: [
            { text: 'Guide', link: '/en/guide/base/introduce' },
            { text: 'Component', link: '/en/component/base' },
            {
                text: 'Preview',
                items: [
                    {
                        text: 'Preview 1',
                        link: 'https://www.fcadmin.fun'
                    }
                ]
            },
            {
                text: 'Update Log',
                items: [
                    {
                        text: 'V1.0.1',
                        link: '/version'
                    }
                ]
            }
        ],
        sidebar: {
            '/en/guide/': {
                base: '/en/guide/',
                items: sidebarGuide()
            },
            '/en/component/': {
                base: '/en/component/',
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
            base: '/en/guide/base/',
            text: 'Base',
            collapsed: false,
            items: [
                { text: 'What is FC-Admin?', link: 'introduce' },
                { text: 'Getting Started', link: 'quickstart' },
                { text: 'Directory Structure', link: 'directory' },
                { text: 'Site Config', link: 'configure' },
                { text: 'Layout', link: 'layout' },
                { text: 'Router Menu', link: 'routerMenu' },
                { text: 'Network Request', link: 'request' },
                { text: 'Run And Build', link: 'build' },
            ]
        },
        {
            base: '/en/guide/advanced/',
            text: 'Advanced',
            collapsed: false,
            items: [
                { text: 'Theme And Dark Mode', link: 'theme' },
                { text: 'Role Auth', link: 'role' },
                { text: 'Interface', link: 'interface' },
                { text: 'KeepAlive', link: 'keepalive' },
                { text: 'i18n', link: 'i18n' },
                { text: 'Directive', link: 'directive' },
            ]
        },
        {
            base: '/en/guide/other/',
            text: 'Other',
            collapsed: false,
            items: [
                { text: 'Project', link: 'project' },
                { text: 'Problem', link: 'problem' },
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