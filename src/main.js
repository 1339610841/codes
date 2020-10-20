import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// 引入css文件
import "./assets/styles/base.css"
import "./assets/styles/el-rest.css"

//引入 整个 ElementUI 外部资源
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false;
//引入 整个 ElementUI
Vue.use(ElementUI);

//按需 引入（减少体积）
//import { CarouselItem, Carousel} from "element-ui"

//按需  注册引入的组件
// Vue.component("el-carousel",Carousel)
// Vue.component("el-carousel-item",CarouselItem)


 
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
