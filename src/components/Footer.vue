<template>
    <!-- <div class="footer"></div> -->
     <footer>
    <div class="footer">
        <!-- <div class="row"> -->
        <!-- <ul>
            <li><a href="#">Contact us</a></li>
            <li><a href="#">Our Services</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Career</a></li>
        </ul> -->
        <div class="links">
          <router-link to="/wip">About Website</router-link>
          <router-link to="/wip">About Me</router-link>
          <router-link to="/contact">Contact Me</router-link>
            <!-- <a href="#">About Website</a>
            <a href="#">About Me</a>
            <a href="#">Contact Me</a> -->
        </div>

        <!-- </div> -->
        <p>Copyright © 2025 All rights reserved || Designed By: Nitin </p>

    </div>
     </footer>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    header: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.footer{
    margin-top: 1%;
  margin-bottom: 0;
  margin-left: auto;
  margin-right: auto;
  height:20%;
  /* padding: 0 0.5% 0 0; */
    /* padding-top: 10; */

  overflow: auto;
  background-color: #555;  
  position: -webkit-sticky; /* Safari */
  /* position: sticky; */
  bottom: 0;
  position:bottom;
  text-align:center;
  display:flex;
  flex-wrap:wrap;
  overflow:auto;
}

a{
text-decoration:none;
color:gray;
transition:0.5s;
padding-top:1%;
padding-right:1%;
padding-left:1%;
}

a:hover{
color:#fff;
}

.footer .row ul li{
list-style-type: none;
}

.links {
    padding-top: 1.5%;
    padding-bottom:2%;
    
    padding-left: 30%;
  padding-right:30%;
  width:100%;
  display: flex;
  flex-wrap:wrap;
  justify-content: space-around;
  align-content: center;
}

p {
    color: #fff;
    margin-left: auto;
    margin-right: auto;
}


</style>
