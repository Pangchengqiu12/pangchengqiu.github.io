import { createPinia } from 'pinia'
import persist from 'pinia-plugin-persistedstate'
import { useMemberStore } from './modules/member'
import { useShopCarStore } from './modules/shopCar'

// 创建 pinia 实例
const pinia = createPinia()
// 使用持久化存储插件
pinia.use(persist)

// 模块统一导出
export { useMemberStore, useShopCarStore }

// 默认导出，给 main.js 使用
export default pinia
