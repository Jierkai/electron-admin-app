<template>
  <div class="layout-container">
    <side-bar :collapse="isExpand" />
    <div class="main-container">
      <nav-bar
          :is-expand="isExpand"
          @expand="isExpandSidebar"
      ></nav-bar>
      <tags-view></tags-view>
      <app-main></app-main>


    </div>
  </div>

</template>
<script setup>
import sideBar from './sideBar/index.vue'
import navBar from './navBar.vue'
import {ref} from 'vue'
import TagsView from '@renderer/Layout/tagsView.vue'
import AppMain from '@renderer/Layout/AppMain.vue'

const isExpand = ref(true)


function isExpandSidebar(e){
  isExpand.value = e
}



</script>
<style lang="less" scoped>

</style>
