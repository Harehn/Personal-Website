<template>
    <div class="full-line"><h2 >{{ header }}</h2></div>
</template>

<script>
export default {
  name: 'Trail',
  props: {
    header: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2{
  transition:0.2s;
}

h2:hover {
  transform:translateX(0.5%);
  /* padding-left: 1%; */
}

.full-line {
  border-image: 
   linear-gradient(0deg,#555657 2px,#0000 0) fill 0;
  padding: 0 0;
  margin: 0 5%;
}

</style>
