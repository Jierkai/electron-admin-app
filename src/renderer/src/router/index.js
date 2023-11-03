import Layout from '@renderer/Layout/index.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

// 公共路由
export const constantsRoute = [
  // {
  //   path: 'redirect',
  //   hidden: true,
  //   component: Layout,
  //   children: [
  //     {
  //       path: '/redirect/:path(.*)', // 匹配任意路径参数
  //       component: () => import('@renderer/view/redirect.vue')
  //     }
  //   ]
  // },
  {
    path: '',
    component: Layout,
    redirect: 'index',
    children: [
      {
        path: '/index',
        component: () => import('@renderer/view/index.vue'),
        name: 'index',
        meta:{ title: '首页' }
      }
    ]
  }
]

export default createRouter({
  // 哈希路由
  history: createWebHashHistory(),
  scrollBehavior: () => ({ y: 0 }),
  routes: constantsRoute
})
