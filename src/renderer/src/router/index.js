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
        meta: { title: '首页' }
      }
    ]
  },
  {
    path: '/utils',
    component: Layout,
    hidden: false,
    meta: { title: '工具' },
    children: [
      {
        path: '/excel',
        component: () => import('@renderer/view/utils/excel/index.vue'),
        name: 'excel',
        meta: { title: '表格', icon: 'excel' }
      },
      {
        path: '/model',
        component: () => import('@renderer/view/utils/model/index.vue'),
        name: 'model',
        meta: { title: '模型', icon: 'model' }
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
