<template>
  <div id="app">
    <div id="nav">
      <router-link to="/"></router-link>
      <!-- <router-link to="/about">About</router-link> -->


    </div>
    <router-view/>
    <ibs-public-info/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 0pd;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<script>
  import IbsPublicInfo from "./components/IbsPublicInfo";
  export default {
    components: {IbsPublicInfo}
  }
</script>