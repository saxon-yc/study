<script setup lang="ts">
import router from "router";
import { reactive } from "vue";

const user = reactive({ account: "", password: "" })

const onLogin = () => {
  debugger
  user
  router.replace('/home')
}

</script>

<template>
  <div class="bg">
    <el-form class="form" mode="">
      <el-input placeholder="请输入账号" class="form-input" type="text" v-model="user.account" clearable />
      <el-input placeholder="请输入密码" class="form-input" type="password" v-model="user.password" clearable />
      <el-button type="primary" @click="onLogin">登录</el-button>
    </el-form>
  </div>
</template>


<style lang="css" scoped>
.bg {
  background: url("../../assets/images/bg.jpeg") no-repeat center;
  background-attachment: fixed;
  width: 100%;
  height: 100vh;
  display: flex;
}


.form {
  margin: auto;
  padding: 20px;
  border-radius: 5px;
}

.form-input {
  margin-bottom: 20px;
  width: 300px;
  display: block;
}

.form-input>>>.el-input__wrapper {
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(6px);
}
</style>
