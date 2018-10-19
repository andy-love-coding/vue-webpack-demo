import Vue from 'vue';
import App from './App.vue'; // 导入App.vue组件

new Vue({
  el: '#app',
  components: { App },
  template: "<App />" // 要识别这个，需要编译器, 需在webpcac.config.js中resolve.alias中设置：'vue$': 'vue/dist/vue.esm.js'
});

// 不需要编译器
// new Vue({
//   el: "#app",
//   render (h) {
//     return h(App);
//   }
// })