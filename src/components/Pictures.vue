<template>
  <div>
    <h1 v-if='!this.pictures.length'>Enter a search word above to see pictures</h1>
    <section class="section__pictures" v-if='this.pictures.length' >
      
      
        <img v-for="picture in pictures" :src="picture.urls.regular" :key="picture.id" :alt="picture.alt_description" />
     
     
    </section>
  </div>
</template>

<script type="application/javascript">
export default {
  name: 'Pictures',
  props: ['pictures', 'updateSearchWord'],
  methods: {
    displayPhotos: function () {
      window.console.log('in pictures', this.pictures)
      return this.pictures.map(pic => pic.results.urls.regular)
    }
  }
  } 
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.section__pictures {
display: flex;
overflow: scroll;
justify-content: space-evenly;
height: 75vh;
    flex-wrap: wrap;
}

img {
  max-width: 50%;
    height: 37vh;
    margin-top: 20px;
    border-radius: 25%;
}
img:hover {
  transform: scale(1.2); 
  box-shadow: 0px 0px 14px 13px rgba(0,0,0,0.75);
  border-radius: 0
}



</style>
