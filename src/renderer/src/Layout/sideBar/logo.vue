<template>
<div class="logo-container">
  <transition>
    <router-link v-if="!collapse" to="/">
      <img class="logo" src="@renderer/assets/image/icon.png">
      <span>管理平台桌面端</span>
    </router-link>
    <router-link v-else to="/">
      <img class="logo" src="@renderer/assets/image/icon.png">
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
  .logo{
    width: 32px;
    height: 32px;
  }
}
</style>
