<template>
  <div id="app">
    <h1>Picture Box</h1>
    <input v-model='searchWord'/>
    <button @click="searchPictures">Search</button>
    <pictures :pictures="pictures" />
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
  methods: {
     searchPictures: async function () {
      try {
        const data = await getPictures(this.searchWord);
        this.pictures = data.results
        this.searchWord = '';
      } catch (error) {
        window.console.log('error in catch', error)
      }
    },
    updateSearchWord: function (val) {
      this.searchWord = val
      this.searchPictures({preventDefault: () => {}})
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
  height: 100vh;
}
</style>
