import router from '@renderer/router/index'
import store from '@renderer/store'

router.beforeEach((to,from,next)=>{
  if (!store.state.user.token){
    router.addRoute(store.getters.sidebarRoutes)
    store.state.user.token = true
    next(...to,{replace: true})
  }else {
    next()
  }
})

