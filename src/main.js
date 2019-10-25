import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')

// main.js 职责入口文件
// 职责1：创建根实例
// 职责2：依赖项目需要的全局资源
