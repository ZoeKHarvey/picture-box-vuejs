<template>
  <div>
    <h1 v-if='!this.pictures.length'>Enter a search word above to see pictures</h1>
    <section v-if='this.pictures.length' >
      <ul>
      <li v-for="picture in pictures">
        <img :src="picture.urls.regular" :key="picture.id" :alt="picture.alt_description" width="300px"/>
      </li>
      </ul>
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
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
