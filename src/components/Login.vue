<template>
  <div class="login-container">
    <el-card class="login-card">
      <div class="login-panel">
        <el-input placeholder="Username" v-model="username"/>
        <el-input placeholder="Password" v-model="password" show-password/>
        <el-button class="login-button" @click="login">Login</el-button>
      </div>
    </el-card>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import axios from "axios";
import {ElNotification} from "element-plus";

@Options({
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    login() {
      if (this.username === "" || this.password === "") {
        ElNotification({
          title: "Login Failure",
          message: "Blank username and/or password.",
          type: "error",
        });
        return;
      }
      axios
          .post(
              "/login",
              {
                "username": this.username,
                "password": this.password,
              }
          )
          .then((response) => {
            if (response.data.code !== 200) {
              ElNotification({
                title: "Login Failure",
                message: response.data.message,
                type: "error",
              });
              return;
            }
            ElNotification({
              title: "Login Success",
              message: "Welcome, " + this.username + ".",
              type: "success",
            });
            this.$router.push("/");
          });
    }
  }
})
export default class Login extends Vue {
}
</script>

<style scoped>
.login-container {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.login-card {
}

.login-panel {
  box-sizing: border-box;
  width: 200px;
  height: 200px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  color: black;
}

.login-button {
  width: 50%;
}
</style>
