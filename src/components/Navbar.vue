<template>
  <div class="navbar">
    <ul>
        
    <!-- <li><a class="tab active">Home</a></li> -->
    <li><router-link to="/">Home</router-link></li>
    <li><router-link to="/about">About</router-link></li>
    <li style="float:right"><a class="tab">Help</a></li>
  </ul>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* h3 {
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
} */

ul {
  list-style-type: none;
  margin-left: auto;
  margin-right: auto;
  padding: 0;
  overflow: hidden;
  background-color: #555;  
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
}

li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

/* Change the link color to #111 (black) on hover */
a.router-link-exact-active ,li a:hover {
  background-color: #111;
  cursor: pointer;
} 
</style>
