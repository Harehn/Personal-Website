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
            <a href="#">Contact us</a>
            <a href="#">Our Services</a>
            <a href="#">Privacy Policy</a>
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
}

a:hover{
color:#fff;
}

.footer .row ul li{
/* display:inline-block; */
list-style-type: none;
/* margin:0px 30px; */
}

.links {
    padding-top: 7px;
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
