<template>
  <div class="blog">
    <h1>This is the blog page</h1>
    <i>This page is meant to contain blogs about coding, programming and maths written by me.</i>
    <img :src="require(`@/assets/construction.jpg`)" alt="">
  </div>
</template>


<style scoped>

.blog{
  /* margin-bottom:38%; */
}

img {
  margin-top:5%;
  margin-left:15%;
  margin-right:15%;
  margin-bottom: 0%;
  /* margin:0; */
  width:70%;

  border: 2px solid #ddd;
  border-radius: 2px;
}

</style>