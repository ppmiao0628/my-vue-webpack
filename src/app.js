var Vue = require('vue');
var VueRouter = require('vue-router');
/**
 * vue 路由配置
 * 我把 vue 默认的{{ }} 改成了的 ${ }
 */
Vue.use(VueRouter);
Vue.config.debug = true;
Vue.config.delimiters = ['${','}'];//把默认的{{ }} 改成ES6的模板字符串 ${ }
Vue.config.devtools = true;

var App = Vue.extend({});
var router = new VueRouter({});
router.map(require('./routes'));
router.start(App, '#app');
router.go({"path":"/"});
