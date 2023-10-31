import Layout from '@/Layout'
import { createRouter, createWebHashHistory } from 'vue-router'

// 公共路由
export const constantsRoute = [
  {
    path: 'redirect',
    hidden: true,
    component: Layout
  }
]

export default createRouter({
  // 哈希路由
  history: createWebHashHistory(),
  scrollBehavior: () => ({ y: 0 }),
  routes: constantsRoute
})
