<template>
<div class="tags-container">
  <el-scrollbar>
    <div class="content">
    <el-tag
      class="tag"
      closable
      effect="dark"
    >
     11111
    </el-tag>
    </div>
  </el-scrollbar>
</div>
</template>
<script setup>

</script>
<style lang="less" scoped>
.tags-container{
  padding: 6px 0 1px 5px;
  height:40px;
  box-shadow: 0 1px 3px 0 #ddd;

  .tag{
    margin-right: 4px;
  }

  .content{
    display: flex;
  }
}
</style>
