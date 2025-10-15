<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <Navbar/>
  <router-view/>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue"

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>
html,
body {
  height: 100vh;
  width: 100vw;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  height: inherit;
  width: inherit;
}

/* nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
} */

.navbar {
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
  background-color: #555;  

}
</style>
