<script setup lang="ts">
import router from 'router';
import { defineProps } from 'vue';
const { name } = defineProps({
  name: String
})

</script>

<template>
  <el-header>
    <ul>
      <li>首页</li>
    </ul>

    <a @click="router.replace('/login')">登录</a>
    <a @click="router.replace('/regist')">注册</a>
    <p>{{ name }}</p>
  </el-header>
</template>


<style lang="css" scoped></style>
