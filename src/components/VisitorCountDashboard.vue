<template>
  <div class="home-container">
    <el-table :data="tableData" style="width: 75%" height="100%">
      <el-table-column prop="identifier" label="Identifier"/>
      <el-table-column prop="count" label="Count"/>
    </el-table>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import axios from "axios";
import {ElNotification} from "element-plus";

@Options({
  data() {
    return {
      tableData: [],
    }
  },
  mounted() {
    axios
    .post("get-visitor-count-list")
    .then(response => {
      if(response.data.code !== 200) {
        ElNotification({
          title: "Query Failure",
          message: response.data.message,
          type: "error",
        });
        return;
      }
      this.tableData = response.data.content;
    })
  }
})
export default class VisitorCountDashboard extends Vue {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home-container {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
</style>
