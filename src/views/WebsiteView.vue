<template>
    <div class="website">
        <Trail header="Welcome to this website"/>
        <div class="description">
            Welcome to my personal website! This is a work in progress where I will keep my professional information up to date and share some interesting projects and such. 
        </div>
        <Trail header="Why build this"/>
        <div class="description">
            I built this website from scratch to have a place where I have control on how to present my achievements and projects. I want to keep building on this as I keep advancing and growing. This website in itself is also a project where I wanted to show off my frontend development skills as this is a project that keeps on evolving. I have built this website from scratch and this has honed my understanding of CSS and Vue js.
        </div>
        <Trail header="No AI, No template"/>
        <div class="description">
            Although some code snippets were referenced, most of the code was written from scratch. 
            You can refer to the commits at <a target="_blank" href="https://github.com/Harehn/Personal-Website">GitHub</a>. 
            No AI (Claude, chatgpt, copilot etc) was used in the making of this website. 
            I understand that AI can be used as a part of workflow to make things much easier and also accelerate development in time sensitive cases. However, I think that it impedes skill acquisition. 
            <br>You can fork the repository and deploy specific commits to see the different versions of the website.
        </div>
        <Trail header="How was this built"/>
        <div class="description">
            This website was built using Vue js and hosted on Render. The code is hosted on <a target="_blank" href="https://github.com/Harehn/Personal-Website">GitHub</a>. 
            Vue Routing was used to create different pages (ie it is not a Single Page Application). Modularity was prioritized in the making of the website. Similar elements were made using modifiable components eg the navbar, the footer and the heading tags. 
        </div>
        <Trail header="Attributions"/>
        <div class="description">
            <strong>Pictures.</strong> From my personal gallery and from <a target="_blank" href="https://www.freepik.com/">freepiks</a>. <br>
            <strong>Code snippets.</strong> <a target="_blank" href="https://www.w3schools.com/">W3 school</a>, <a target="_blank" href="https://cssnippets.shefali.dev/cards">free code snippets.</a> <br>
            <strong>Tutorials.</strong> <a target="_blank" href="https://stackoverflow.com/questions">StackOverflow</a>, <a target="_blank" href="https://www.youtube.com/watch?v=0FwBjPeLqQ8&list=PL4cUxeGkcC9hYYGbV60Vq3IXYNfDk8At1">The netninja</a>, <a target="_blank" href="https://www.w3schools.com/">W3 school</a>, <a target="_blank" href="https://vuejs.org/guide/components/props">Vue3 documentation.</a> <br>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
// import Home from '@/components/Home.vue'
import Trail from '@/components/Trail.vue';
export default {
  name: 'WebsiteView',
  components: {
    Trail
  }
}
</script>

<style scoped>
.description {
  margin-left: 7%;
  margin-right: 7%;
  /* display: flex;
  flex-wrap:wrap; */

  padding-left: 1%;
  padding-right: 1%;
  padding-top:0.5%;
  padding-bottom: 0.5%;

  border: 2px solid #ddd;
  border-radius: 10px;
  transition: 0.2s;
}

.description:hover{
  padding-left: 1.05%;
  padding-right: 1.05%;
  padding-top:0.55%;
  padding-bottom: 0.55%;
  /* box-shadow: 0 0 2px 1px rgba(0, 140, 186, 0.5); */
  border-color: #7c788f;
}
</style>