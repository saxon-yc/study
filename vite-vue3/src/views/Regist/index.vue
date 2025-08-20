<script setup lang="ts">
import router from "router";

const onLogin = () => {
  router.replace('/home')
}

</script>

<template>
  <div class="container">
    <el-form mode="">
      <el-input type="password" />
      <el-input type="text" />
      <el-button type="primary" @click="onLogin">登录</el-button>
    </el-form>
  </div>
</template>


<style lang="css" scoped>

</style>
