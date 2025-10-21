<template>
  <div class="wip">
    <h1>Oops!</h1>
    <h2>You have tried to access a page that is still being written. Try again at a later date.</h2>
    <img :src="require(`@/assets/construction.jpg`)" alt="">
  </div>
</template>

<script>
// @ is an alias to /src
// import Home from '@/components/Home.vue'

export default {
  name: 'WipView',
  components: {
    
  }
}
</script>

<style scoped>
h1, h2 {
    text-align: center;
    align-self: center;
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