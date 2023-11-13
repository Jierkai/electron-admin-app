import { getToken } from '@renderer/utils/token'
import Layout from '@renderer/Layout/index.vue'

const user = {
  namespaced: true,
  state: () => ({
    sidebarRoutes: [
      {
        path: '/utils',
        component: Layout,
        hidden: false,
        meta: { title: '工具' },
        children: [
          {
            path: '/excel',
            component: () => import('@renderer/view/index.vue'),
            name: 'excel',
            meta: { title: '表格', icon: 'excel' }
          },
          {
            path: '/model',
            component: () => import('@renderer/view/index.vue'),
            name: 'model',
            meta: { title: '模型', icon: 'model' }
          }
        ]
      }
    ],
    token: getToken()
  }),
  mutations: {},
  actions: {},
  getters: {}
}
export default user
