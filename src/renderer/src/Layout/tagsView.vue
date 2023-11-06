<template>
<div class="tags-container">
  <el-scrollbar>
    <div class="content">
    <el-tag
      v-for="(i,index) in routeTagsArray"
      :key="index"
      :effect="i.path === route.fullPath? 'dark':'plain'"
      class="tag"
      closable
      @click="routeTo(i)"
      @close="removeRouteTag(index)"
    >
     {{ i.tagName }}
    </el-tag>
    </div>
  </el-scrollbar>
</div>
</template>
<script setup>
import { watch,reactive } from 'vue'
import {useRoute, useRouter} from 'vue-router'

const route = useRoute()
const router = useRouter()
const routeTagsArray = reactive([])


watch(route, (v)=>{
  const tag = routeTagsArray.find(i=> i.path === v.fullPath)
  if (!tag){
    routeTagsArray.push({
      tagName: v.meta.title,
      tagIcon: v.meta.icon,
      path: v.fullPath,
      query: v.query
    })
  }
},{immediate:true})

function routeTo(route){
  router.push({path:route.path, query:route.query})
}
function removeRouteTag(index){
  const route = routeTagsArray.splice(index, 1)
  console.log(route)
}

</script>
<style lang="less" scoped>
.tags-container{
  padding: 6px 0 1px 5px;
  height:40px;
  box-shadow: 0 1px 3px 0 #ddd;

  .tag{
    margin-right: 4px;
    cursor: pointer;
    transition: background-color .5s;
  }

  .content{
    display: flex;
  }
}
</style>
