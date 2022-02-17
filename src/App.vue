<template>
  <div class="root-container">
    <header>
      <el-menu mode="horizontal" router>
        <el-menu-item index="/dashboard/visitor-count">count</el-menu-item>
        <el-menu-item index="/dashboard/visitor-record">record</el-menu-item>
      </el-menu>
    </header>
    <main class="main-container">
      <router-view/>
    </main>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import axios from "axios";
import {ElNotification} from "element-plus";

@Options({
  methods: {
    logout() {
      axios
          .post(
              "/logout"
          )
          .then((response) => {
            if (response.data.code !== 200) {
              ElNotification({
                title: "Logout Failure",
                message: response.data.message,
                type: "error",
              });
              return;
            }
            ElNotification({
              title: "Logout Success",
              message: "Bye.",
              type: "info",
            });
            this.$router.push("/login");
          })
          .catch(reason => {
            ElNotification({
              title: "Unknown Error",
              message: reason.toString(),
              type: "error",
            });
          })
    }
  }
})
export default class App extends Vue {
}
</script>

<style scoped>
.root-container {
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.main-container {
  flex: 1;
  display: block;
  width: 100%;
  overflow-x: hidden;
  overflow-y: auto;
}
</style>
