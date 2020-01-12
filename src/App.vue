<template>
  <div id="app">
    <h1>Picture Box</h1>
    <input/>
    <button>Search</button>
    <pictures :picturs="pictures" />
  </div>
</template>

<script>
import Pictures from './components/Pictures.vue'

export default {
  name: 'app',
  components: {
    Pictures
  },
  data() {
    return {
      pictures: [],
    }
  },

  mounted() {
    this.getPictures()
  },
  methods: {
    async getPictures() {
      try {
        const response = await fetch(https://api.unsplash.com/photos)
      } catch(error) {
        console.log(error)
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
