import Vue from 'vue'
Vue.component("heartWords", () => import("F:\\我的项目\\测试vue按需导入问题\\my-vue-press\\.vuepress\\components\\heartWords"))
Vue.component("topc", () => import("F:\\我的项目\\测试vue按需导入问题\\my-vue-press\\.vuepress\\components\\topc"))
Vue.component("test", () => import("F:\\我的项目\\测试vue按需导入问题\\my-vue-press\\.vuepress\\components\\test"))
Vue.component("CodeBlock", () => import("F:\\我的项目\\测试vue按需导入问题\\my-vue-press\\node_modules\\@vuepress\\theme-default\\global-components\\CodeBlock"))
Vue.component("CodeGroup", () => import("F:\\我的项目\\测试vue按需导入问题\\my-vue-press\\node_modules\\@vuepress\\theme-default\\global-components\\CodeGroup"))
Vue.component("Badge", () => import("F:\\我的项目\\测试vue按需导入问题\\my-vue-press\\node_modules\\@vuepress\\theme-default\\global-components\\Badge"))


export default {}