<template>
  <div class="contactview">
    <h1>This is the contact page</h1>
    <Contact title="Email" description="Hkaundun@gmail.com"/>
    <Contact title="Linked In" description="www.linkedin.com/in/harehn-kaundun"/>
    <Contact title="GitHub" description="https://github.com/Harehn"/>
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
.contact{
  /* display:inline-block; */
}
.card15{
  display: inline-block;
}
</style>