<template>
<div class="logo-container">
  <transition name="el-fade-in">
    <router-link v-if="!collapse" key="close" class="router-link-class" to="/">
      <img class="sideBar-logo" src="@renderer/assets/image/icon.png">
      <span class="logo-name">管理平台桌面端</span>
    </router-link>
    <router-link v-else key="expand" class="router-link-class" to="/">
      <img class="sideBar-logo" src="@renderer/assets/image/icon.png">
    </router-link>
  </transition>
</div>
</template>
<script setup>
import { defineProps } from 'vue'

defineProps({
  collapse: {
    required: true,
    type:Boolean
  },
})

</script>

<style lang="scss" scoped>
.logo-container{
  height: 50px;
  padding-left: 10px;
  overflow: hidden;

  .sideBar-logo{
    width: 32px;
    height: 32px;
    margin: 8px 5px;
    vertical-align: middle;
  }

  .router-link-class{
    display: inline-block;
    width: 100%;
    height: 100%;
  }

  .logo-name{
    color: #FFF;
    font-size: 14px;
    font-weight: 600;
    font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
    vertical-align: middle;
  }
}
</style>
