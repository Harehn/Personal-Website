<template>
    
    <!-- <div>
      <img :src="require(`@/assets/Github.jpg`)" alt="Screenshot of My GitHub">
    </div> -->
    <div class="maincard">
    <div class="card15">
    <!-- <img src="https://images.pexels.com/photos/1574181/pexels-photo-1574181.jpeg?auto=compress&cs=tinysrgb&w=600" alt="nature-pic-CSSnippets" /> -->
    <img :src="require('@/assets/' + imageName + '')" alt="">
    <h1>{{ title }}</h1>
    <p>{{ description }}</p>
    <a :href="`${link_url}`" target="_blank" class="card15-btn">Contact Me</a>
    </div>
    </div>

</template>

<script>
export default {
  name: 'Contact',
  props: {
    title: String,
    description: String,
    imageName: String,
    link_url: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.card15 {
  width: 180px;
  height: 264px;
  padding: 4px;
  border-radius: 6px;
  text-align: center;
  background-color: #f5f5f5;
  font-family: "Inter", sans-serif;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  transition: 0.6s ease-in-out;
}

.card15:hover {
  box-shadow: 0 18px 35px rgba(50, 50, 90, 0.1), 0 8px 15px rgba(0, 0, 0, 0.07);
  transform: translateY(-1px);
}

.card15 img {
  width: 100%;
  height: 120px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

.card15 h1 {
  color: #000;
  font-size: 22px;
  font-weight: bold;
}

.card15 p {
  color: #a0a6ab;
  font-size: 13px;
  margin-bottom: 21px;
}

.card15-btn {
  cursor: pointer;
  border-radius: 4px;
  padding: 10px 20px;
  color: white;
  font-size: 14px;
  background-color: #2e1e8a;
  text-decoration: none;
}

.card15-btn:hover {
  background-color: #4532af;
}

</style>
