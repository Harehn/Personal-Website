<template>
  <div class="blog">
    <h1 style="text-align: center;">Blogs</h1>
    <Trail header="Embedded Programming for dummies" id="1-blog"/>
    <div class="description">
      <p><em>The information in this blog is supposed to be introductory and basic. This includes information and advice I wished I had when starting out and might be useful to a total beginner.</em></p>
        <h3>Embedded Programming</h3>
        <p>Embedded programming is quite different from web development or game development etc. First, it is usually at a low level where more granular details such as memory management have to be taken into account. Second, it is more important to keep the hardware in mind. The system specification and physical components of the device affect the result significantly.</p>
<h3>Introduction</h3>
    <p>
        Generally, to start, we need to download a toolchain to be able to download and run the written program on the physical device. The action of writing the program onto the device is called <em>flashing</em>. Often, the action of starting the program is different from <em>flashing</em> and is done through <em>debug</em>.
        The device needs to be ... <router-link to="/blogs/embedded">Read More</router-link>
    </p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Trail from '@/components/Trail.vue';
export default {
  name: 'Blogs',
  components :{
    Trail
  }
}
</script>

<style scoped>

.blog{
  margin-bottom:20%;
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
  border-radius: 20px;
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