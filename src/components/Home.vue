<template>
  <div class="home">
    <div>
      <h1 style="text-align: center;">{{ msg }}</h1>
      <Trail header="About Me"/>
      <div class="about">
        <div class="desc">
          <p>Welcome to my Website! I'm Harehn Kaundun; my preferred name is Nitin. I earnt my bachelors in Software Engineering from the University of Mcgill, Canada. </p>
          <p>The two areas I am most experienced in are embedded systems and web development. My favourite language is Python. </p>
          <p>I am very passionate about programming and always looking forward to learning new things. I like creating new things, so I am open to new projects.</p>
        </div>
        <img class="profile" :src="require(`@/assets/Ring.jpg`)" alt="Picture of me at my Iron Ring Ceremony">
      </div>
    </div>
    <Trail header="GitHub"/>
    <div>
      <img class="gh" :src="require(`@/assets/Github.jpg`)" alt="Screenshot of My GitHub">
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
// import TrailLine from '@/components/TrailLine.vue';
import Trail from '@/components/Trail.vue';
export default {
  name: 'Home',
  props: {
    msg: String
  },
  components: {
    Trail
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

.about {
  display: flex;
  flex-wrap:wrap;
  justify-content: space-between;
  padding-left: 10%;
  padding-right: 10%;
}

.desc {
  width: 40%;
  min-width: 300px;
}

.profile {
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 5px;
  width: 20%;
  height: 80%;
  min-width: 200px;
}

.profile:hover {
  box-shadow: 0 0 2px 1px rgba(0, 140, 186, 0.5);
}

.gh {
  width: 80%;
  margin: auto;
  padding-left: 10%;
  padding-right: 10%;
}

</style>
