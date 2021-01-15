export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: '柚子校园',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~/assets/styles/custom-bootstrap.scss'
  ],

  // 使用 nuxt 框架提供的 服务器中间件功能，实现 KOA 的后端服务
  // serverMiddleware: [
  //   // /api 的地址请求，只有数据，没有页面
  //   // 所有的 /api 的请求都会转发到 api/app.js 脚本文件中
  //   { path: "/api", handler: "./api/app.js" }
  // ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxtjs/dotenv',
  ],
  server: {
    port: 80, 
  },
  // 针对Bootstrap 的配置
  bootstrapVue: {
    icons: true,
    bootstrapCSS:false,
    bootstrapVueCSS: false
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },
  serverMiddleware: [
    // /api 的地址请求，只有数据，没有页面
    // 所有的 /api 的请求都会转发到 api/app.js 脚本文件中
    { path: "/api", handler: "~/api/app.js" }
  ]
}
