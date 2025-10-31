<template>
    <div class="htext"><p >{{ text }}</p></div>
</template>

<script>
export default {
  name: 'Htext',
  props: {
    text: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

p{
    color:white;
    background-color: rgb(47, 0, 255);
    border: 0.5px solid #ddd;
    border-radius: 10px;
    margin-left: 5px;
    margin-right:5px;
    padding: 3px;
}

.htext {
        display: inline-flex;
}


</style>
