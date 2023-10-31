<template>
  <div>
    <logo :collapse="collapse"></logo>
    <el-menu
        :collapse="isCollapse"
        active-text-color="#ffd04b"
        background-color="#545c64"
        default-active="2"
        text-color="#fff"
    >
      <el-sub-menu index="1">
        <template #title>
          <el-icon>
            <location/>
          </el-icon>
          <span>Navigator One</span>
        </template>
        <el-menu-item-group title="Group One">
          <el-menu-item index="1-1">item one</el-menu-item>
          <el-menu-item index="1-2">item two</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="Group Two">
          <el-menu-item index="1-3">item three</el-menu-item>
        </el-menu-item-group>
        <el-sub-menu index="1-4">
          <template #title>item four</template>
          <el-menu-item index="1-4-1">item one</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
    </el-menu>
  </div>
</template>
<script setup>

import {
  Location,
} from "@element-plus/icons-vue"
import {ref} from 'vue'
import Logo from '@renderer/Layout/sideBar/logo.vue'

defineProps({
  collapse:{
    required:true,
    type:Boolean
  }
})

const isCollapse = ref(false)

</script>
<style lang="scss" scoped>

</style>
