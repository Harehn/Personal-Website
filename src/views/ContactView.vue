<template>
  <div class="contactview">
    <div class="cards">
    
      <Contact 
        title="Email" 
        description="Feel free to send me any professional inquiries." 
        imageName="email2.jpg" 
        link_url="mailto:hkaundun@gmail.com"/>
    
      <Contact 
        title="Linked In" 
        description="I would love to connect with you on Linked In." 
        imageName="handshake.jpg" 
        link_url="https://www.linkedin.com/in/harehn-kaundun"/>
      
      <Contact 
        title="GitHub" 
        description="Explore my codebase and the projects I am working on." 
        imageName="code.jpg" 
        link_url="https://github.com/Harehn"/>

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
  overflow:auto;
  padding-bottom:5%;
  margin-bottom:13%;
  /* align-content: center;
  text-align: center; */
}
.cards{
  padding-left: 15%;
  padding-right:15%;
  padding-top:8%;
  display: flex;
  flex-wrap:wrap;
  justify-content: space-around;
  align-content: center;
}
</style>