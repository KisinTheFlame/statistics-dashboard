<template>
  <div>{{count}}</div>
  <el-button @click="handleClick">Click</el-button>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

export default class Home extends Vue {
  count: number = 0;

  handleClick = () => {
    this.count++;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
