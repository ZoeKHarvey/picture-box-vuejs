<template>
  <div id="app">
    <h1>Picture Box</h1>
    <input/>
    <button @click="searchPictures">Search</button>
    <pictures :picturs="pictures" />
  </div>
</template>

<script>
import Pictures from './components/Pictures.vue'
import { getPictures } from '../apiCalls.js'

export default {
  name: 'app',
  components: {
    Pictures
  },
  data() {
    return {
      pictures: [],
      searchWord: ''
    }
  },

  mounted() {

  },
  methods: {
     searchPictures: async function () {
      try {
        const result = await getPictures();
        window.console.log(result)
        this.pictures = result;
        this.searchWord = '';
      } catch (error) {
        window.console.log('error in catch', error)
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
