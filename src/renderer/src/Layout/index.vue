<template>
  <div class="layout-container">
    <side-bar />
    <div class="main-container">

      <nav-bar></nav-bar>


    </div>
  </div>

</template>
<script setup>
import sideBar from './sideBar/index.vue'
import navBar from './navBar.vue'

</script>
<style lang="less" scoped>
.layout-container{
  height: 100%;
}
</style>
