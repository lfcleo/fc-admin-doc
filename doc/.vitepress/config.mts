import { defineConfig } from 'vitepress'
import zh from './zh'
import en from './en'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "FC-Admin",
    rewrites: {
        'zh/:rest*': ':rest*'
    },
    description: "FC-Admin文档",
    head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
    cleanUrls: true,
    ignoreDeadLinks: true,
    themeConfig: {
        logo: { src: '/favicon.ico', type: 'image/png', width: 24, height: 24 },
        // 搜索
        // search: {
        //     provider: 'algolia',
        //     options: {
        //         appId: 'LBLWR2QCI3',
        //         apiKey: '4338f265da64e33025f821af827dd22e',
        //         indexName: 'pileax',
        //         locales: {
        //             root: {
        //                 placeholder: '搜索文档',
        //                 translations: {
        //                     button: {
        //                         buttonText: '搜索文档',
        //                         buttonAriaLabel: '搜索文档'
        //                     },
        //                     modal: {
        //                         searchBox: {
        //                             resetButtonTitle: '清除查询条件',
        //                             resetButtonAriaLabel: '清除查询条件',
        //                             cancelButtonText: '取消',
        //                             cancelButtonAriaLabel: '取消'
        //                         },
        //                         startScreen: {
        //                             recentSearchesTitle: '搜索历史',
        //                             noRecentSearchesText: '没有搜索历史',
        //                             saveRecentSearchButtonTitle: '保存至搜索历史',
        //                             removeRecentSearchButtonTitle: '从搜索历史中移除',
        //                             favoriteSearchesTitle: '收藏',
        //                             removeFavoriteSearchButtonTitle: '从收藏中移除'
        //                         },
        //                         errorScreen: {
        //                             titleText: '无法获取结果',
        //                             helpText: '你可能需要检查你的网络连接'
        //                         },
        //                         footer: {
        //                             selectText: '选择',
        //                             navigateText: '切换',
        //                             closeText: '关闭',
        //                             searchByText: '搜索提供者'
        //                         },
        //                         noResultsScreen: {
        //                             noResultsText: '无法找到相关结果',
        //                             suggestedQueryText: '你可以尝试查询',
        //                             reportMissingResultsText: '你认为该查询应该有结果？',
        //                             reportMissingResultsLinkText: '点击反馈'
        //                         }
        //                     }
        //                 }
        //             }
        //         }
        //     }
        // },
        search: {
            provider: 'local',
            options: {
                locales: {
                    root: {
                        translations: {
                            button: {
                                buttonText: '搜索文档',
                                buttonAriaLabel: '搜索文档'
                            },
                            modal: {
                                noResultsText: '无法找到相关结果',
                                resetButtonTitle: '清除查询条件',
                                footer: {
                                    selectText: '选择',
                                    navigateText: '切换'
                                }
                            }
                        }
                    }
                }
            }
        },
        // github链接
        socialLinks: [
            { icon: 'github', link: 'https://github.com/lfcleo/fc-admin' }
        ],
    },
    // 多语言国际化
    locales: {
        root: {
            label: '中文',
            ...zh,
        },
        en: {
            label: 'English',
            ...en
        }
    },
    markdown: {
        lineNumbers: true,
    },
})
