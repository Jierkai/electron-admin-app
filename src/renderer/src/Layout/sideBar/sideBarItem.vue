<template>

  <el-sub-menu v-if="Array.isArray(item.children) && item.children.length > 0" :index="item.path">
    <template #title>
      <el-icon>
        <location/>
      </el-icon>
      <span>{{item.meta.title}}</span>
    </template>

    <side-bar-item
        v-for="i in item.children"
        :key="i.path"
        :item="i" />
  </el-sub-menu>
  <el-menu-item v-else :index="item.path" @click="handleRouteTo(item)">{{item.meta.title}}</el-menu-item>
</template>
<script setup>
import {Location} from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'
import { defineProps } from 'vue'

const router = useRouter()

defineProps({
  item:{
    type:Object,
    required:true,
  }
})

function  handleRouteTo(v){
  console.log(v)
  router.push(v.path)

}

</script>
<style lang="less" scoped>

</style>
