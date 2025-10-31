<template>
  <div class="home">
    <div>      
      <h1 style="text-align: center;">{{ msg }}</h1>
      <Trail header="About Me"/>
      <div class="about">
        <div class="desc">
          <p>Welcome to my Website! I'm Harehn Kaundun; my preferred name is Nitin. I earnt my bachelors in Software Engineering from the University of Mcgill, Canada. My passion and skill in programming has been developed through my university experience, personal projects and my work experience.</p>
          <p>The two areas I am most experienced in are embedded systems and full-stack web development. However, I also have decent experience in app development and QA.</p> <p> My favourite language is Python as I like the intuitive syntax and abundant community libraries. I have also dabbled in other languages: C/C++ (for embedded systems), Javascript (in Web Development ) and Java (for rest API and app development).</p>
          <p>I have several projects hosted on my GitHub across various fields. I am currently working on improving this website and revisiting my old code. I like creating new things, so I am open to new projects.</p>
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
import Trail from '@/components/Trail.vue';
import Htext from '@/components/Htext.vue';
export default {
  name: 'Home',
  props: {
    msg: String
  },
  components: {
    Trail,
    Htext
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

.about{
  /* border: 5px groove #999;
  border-radius: 10px; */
}

.about {
  display: flex;
  flex-wrap:wrap;
  justify-content: space-between;
  padding-left: 1%;
  padding-right: 1%;
  padding-top:0.5%;
  padding-bottom: 0.5%;
  margin-left:9%;
  margin-right:9%;

  border: 2px solid #ddd;
  border-radius: 20px;
  transition: 0.2s;
}

.about:hover{
  padding-left: 1.05%;
  padding-right: 1.05%;
  padding-top:0.55%;
  padding-bottom: 0.55%;
  /* box-shadow: 0 0 2px 1px rgba(0, 140, 186, 0.5); */
  border-color: #7c788f;
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
  transition: 0.1s;
}

.profile:hover {
  box-shadow: 0 0 2px 1px rgba(0, 140, 186, 0.5);
}

.gh {
  width: 80%;
  margin-right:10%;
  margin-left:10%;
  /* margin: auto; */
  padding-left: 1%;
  padding-right: 1%;
}
.gh {
  border: 2px solid #ccc;
  border-radius: 5px;
}

</style>
