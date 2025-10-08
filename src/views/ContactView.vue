<template>
  <div class="contactview">
    <h1>This is the contact page</h1>
    <div class="cards">
    <Contact title="Email" description="Hkaundun@gmail.com" imageName="gmail_icon.jpg" link_url="mailto:hkaundun@gmail.com"/>
    <Contact title="Linked In" description="linkedin.com/in/harehn-kaundun" imageName="li_logo.jpg" link_url="https://www.linkedin.com/in/harehn-kaundun"/>
    <Contact title="GitHub" description="Github.com/Harehn" imageName="matrix.webp" link_url="https://github.com/Harehn"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Contact from '@/components/Contact.vue'

export default {
  name: 'ContactView',
  components: {
    Contact
  }
}
</script>

<style scoped>
.contactview{
  align-content: center;
  text-align: center;
}
.cards{
  /* width: 80%; */
  padding-left: 15%;
  padding-right:15%;
  padding-top:3%;
  display: flex;
  justify-content: space-around;
  align-content: center;
}
</style>