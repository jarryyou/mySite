import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "红鲤鱼绿鲤鱼~",
  description: "A VitePress Site",
  head: [
    ['link', { rel: 'icon', href: '/images/favicon.ico' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '个人笔记', link: '/pages/protocol/index' }
    ],

    sidebar: [
      {
        text: '个人笔记',
        items: [
          {
            text: 'HTTP',
            items: [
              { text: '网络协议', link: '/pages/protocol/index' },
              { text: 'http协议', link: '/pages/protocol/http' },
              { text: 'http状态码', link: '/pages/protocol/httpStatusCode' },
              { text: 'http缓存', link: '/pages/protocol/cacheControl' },
              { text: 'tcp协议', link: '/pages/protocol/tcp' },
              { text: '管道化与队头阻塞', link: '/pages/protocol/piplineAndHead_block' },
              { text: 'https', link: '/pages/protocol/https' },
              { text: 'websocket', link: '/pages/protocol/websocket' },
            ]
          },
          {
            text: 'HTML',
            items: [
              { text: 'html', link: '/pages/html/index' },
            ]
          },
          {
            text: 'CSS',
            items: [
              { text: 'css', link: '/pages/css/index' },
              { text: 'Flex布局', link: '/pages/css/flex' },
              { text: '媒体查询', link: '/pages/css/media-query' },
            ]
          },
          {
            text: 'JavaScript',
            items: [
              { text: '部分源码实现', link: '/pages/javascript/index' },
              { text: 'Promise', link: '/pages/javascript/Promise' },
              { text: '事件循环', link: '/pages/javascript/eventLoop' },
              { text: '原型链', link: '/pages/javascript/prototype' },
              { text: 'this', link: '/pages/javascript/this' },
              { text: '闭包', link: '/pages/javascript/closure' },
              { text: '防抖与节流', link: '/pages/javascript/debounceAndThrottle' },
              { text: '深拷贝与浅拷贝', link: '/pages/javascript/deepCopyAndShallowCopy' },
              { text: '垃圾回收', link: '/pages/javascript/garbageCollection' },
              { text: '模块化', link: '/pages/javascript/module' },
              { text: '大文件上传', link: '/pages/javascript/uploadBigFile' },
            ]
          },
          { 
            text: 'vue', 
            items: [
              { text: '自定义指令v-copy', link: '/pages/vue/v-copy' }
            ]
          } 
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/jarryyou/mySite' }
    ]
  }
})
