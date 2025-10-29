<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <Navbar/>
  <router-view/>
  <div class="empty"></div>
  <Footer/>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  }
}
</script>

<style>
html,
body {
  height: 100vh;
  width: 100vw;

  
    /* width: 100%;
    height: 100%; */
    margin: 0px;
    padding: 0px;
    overflow-x: hidden; 

  margin: 0;
  display:flex;
  flex-direction: column;
  justify-content: space-between;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  height: inherit;
  width: inherit;
  position:relative;
  
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

footer{
  position: -webkit-sticky; /* Safari */
  
  margin-top: auto;
  /* align-self: flex-end; */
  /* position: fixed; */
  /* padding-top:10%;
  position: relative;
  bottom: 0; */
  /* width:100%; */
  /* background-color: #555; */
}
.empty{
  display:flex;
  flex-flow:column;
  flex-grow: 1;
  /* margin-top:100%; */
  /* height:100%; */
  /* height:100vh; */
}
</style>
