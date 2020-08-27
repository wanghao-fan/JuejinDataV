<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      condition: {
        cursor: 1,
        limit: 99
      }
    };
  },
  created() {
    this.$api.author.getDeviceList(this.condition).then(res => {
      console.log(res);
    });
  }
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
