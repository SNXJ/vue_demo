import {createApp} from 'vue'
import App from './App.vue'
import {setupStore} from './store'
import router, {setupRouter} from './router' // 路由
import SvgIcon from './components/SvgIcon/index.vue'
// import { setupElement } from './libs/element'

import ElementPlus from 'element-plus'
import zhCn from "element-plus/lib/locale/lang/zh-cn";
import 'element-plus/dist/index.css'


// createApp(App).mount('#app')
const app = createApp(App)
app.component('svg-icon', SvgIcon)
setupStore(app)
setupRouter(app)
// setupElement(app)
app.use(ElementPlus, {
        locale: zhCn
    },
    {size: 'small', zIndex: 3000}
)
// app.mount('#app')
router.isReady().then(() => {
    app.mount('#app')
})
