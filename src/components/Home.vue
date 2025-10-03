<template>
  <div class="home">
    <h1>{{ msg }}</h1>
    <div>
      <p>Welcome to my Website! I'm Harehn Kaundun; my preferred name is Nitin. I earnt my bachelors in Software Engineering from the University of Mcgill, Canada. </p>
      <p>The two areas I am most experienced in are embedded systems and web development. My favourite language is Python. </p>
      <p>I am very passionate about programming and always looking forward to learning new things. I like creating new things, so I am open to new projects.</p>
      <img :src="require(`@/assets/Ring.jpg`)" alt="Picture of me at my Iron Ring Ceremony">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    msg: String
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

img {
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 5px;
  width: 150px;
}

img:hover {
  box-shadow: 0 0 2px 1px rgba(0, 140, 186, 0.5);
}

</style>
