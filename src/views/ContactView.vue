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
  align-content: center;
  text-align: center;
}
.cards{
  /* width: 80%; */
  padding-left: 15%;
  padding-right:15%;
  padding-top:8%;
  display: flex;
  justify-content: space-around;
  align-content: center;
}
</style>