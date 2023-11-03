<!-- 导航栏 -->
<template>
<el-row align="middle" class="navbar-container">
  <el-col :span="2">
    <el-button
        class="expand-bar"
        text
        @click="expandSideBar"
    >
      <el-icon :size="19"><Expand /></el-icon>
    </el-button>
  </el-col>
  <el-col :span="16">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
      <el-breadcrumb-item
      ><a href="/">promotion management</a></el-breadcrumb-item>
    </el-breadcrumb>
  </el-col>
  <el-col :span="6">

  </el-col>
</el-row>
</template>
<script setup>
import { Expand } from '@element-plus/icons-vue'
import { useStore } from 'vuex'
const { commit,dispatch } = useStore()


function expandSideBar(){
  dispatch('app/toggleSidebar')
}




</script>
<style lang="less" scoped>

</style>
