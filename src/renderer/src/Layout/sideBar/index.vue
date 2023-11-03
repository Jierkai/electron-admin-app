<template>
  <div :style="{width: computed.isExpand.value? '56px':'210px'}" class="sideBar-container">
    <logo :collapse="computed.isExpand.value"></logo>
    <el-scrollbar height="100%">
      <el-menu
        :collapse="computed.isExpand.value"
        active-text-color="#ffd04b"
        background-color="#545c64"
        default-active="2"
        text-color="#fff"
      >
        <side-bar-item
          v-for="i in computed.sidebarRoutes.value"
          :key="i.path"
          :item="i"></side-bar-item>
      </el-menu>
    </el-scrollbar>
  </div>
</template>
<script setup>
import {defineProps} from 'vue'
import Logo from '@renderer/Layout/sideBar/logo.vue'
import computedForGetter from '@renderer/utils/computedForGetter'
import SideBarItem from '@renderer/Layout/sideBar/sideBarItem.vue'

defineProps({

})
const computed = computedForGetter(['sidebarRoutes','isExpand'])


</script>
<style lang="scss" scoped>

</style>
