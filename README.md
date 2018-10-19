### 打包.vue后缀的文件

+ 新建demo项目
  + 为测试打包.vue文件，新建一个demo项目：`vue-webpack-demo` , 地址：
  + 复制前面 `webpack-demo`  项目（地址：https://github.com/andy-love-coding/webpack-deom）中的三个文件`package.json` 、 `package-lock.json` 、`webpack.config.js` ，到新demo项目中`vue-webpack-demo`
  + 初始化项目：npm i
  + 安装vue： npm i vue

+ 使用vue-loader，官网：https://vue-loader.vuejs.org/zh

+ 下载vue-loader

  ```
  npm i vue-loader
  ```

+ 配置 `webpack.config.js` 文件

  ```javascript
  const VueLoaderPlugin = require('vue-loader/lib/plugin'); // 用于打包.vue
  module.exports = {
    module: {
      rules: [
        // ... 其它规则
        {
          test: /\.vue$/,
          use: {
            loader: 'vue-loader'
          } 
        }
      ]
    },
    plugins: [
      // 请确保引入这个插件！
      new VueLoaderPlugin()
    ]
  }
  ```

+ 这样会报错

  ```javascript
  [vue-loader] vue-template-compiler must be installed as a peer dependency, or a compatible compiler implementation must be passed via options.
  ```

+ 此时需安装vue模板编译器： `vue-template-compiler` 

  ```
  npm i vue-template-compiler 
  ```

+ 接下来，浏览器报错，因为vue版本是vue.runtime.js ，它不认识 template: "<App />" 

  ```
  You are using the runtime-only build of Vue where the template compiler is not available. Either pre-compile the templates into render functions, or use the compiler-included build.
  ```

+ 此时一种解决方法为如下，不过推荐这种

  ```javascript
  // 不需要编译器
  new Vue({
    el: "#app",
    render (h) {
      return h(App);
    }
  })
  ```

+ 另一种解决方法为配置 `webpack.config.js` 文件，推荐这种

  ```javascript
  module.exports = {
    // ...
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js'
      }
    }
  }
  ```
