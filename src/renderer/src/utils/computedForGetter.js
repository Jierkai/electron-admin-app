import { useStore, mapGetters,createNamespacedHelpers } from 'vuex'
import {computed} from 'vue'

export default function (getterName = [],nameSpace = null){
  const $store = useStore()
  let getter

  if (!nameSpace){
    getter = mapGetters(getterName)
  }else {
    getter = createNamespacedHelpers(nameSpace).mapGetters(getterName)
  }


  const storeGetter = {}

  // 将getter中的this指向改为store
  Object.keys(getter).forEach(i=>{
    const fn = getter[i].bind({ $store})

    storeGetter[i] =computed(fn)
  })

  return storeGetter

}
