import {createApp} from 'vue'
import App from './App.vue'
import {setupStore} from './store'
import router, { setupRouter } from './router' // 路由
import SvgIcon from './components/SvgIcon/index.vue'
import { setupElement } from './libs/element'
import ElementPlus from "element-plus";
// import 'element-plus/lib/theme-chalk/index.css'
import zhCn from "element-plus/lib/locale/lang/zh-cn";
import './style/index.less';

// createApp(App).mount('#app')
const app = createApp(App)
app.component('svg-icon', SvgIcon)
setupStore(app)
setupRouter(app)
setupElement(app)
app.use(ElementPlus, {
    locale: zhCn,
})
// app.mount('#app')
router.isReady().then(() => {
    app.mount('#app')
})
