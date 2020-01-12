<template>
  <div id="app">
    <h1>Picture Box</h1>
    <input v-model='searchWord'/>
    <button @click="searchPictures">Search</button>
    <pictures :pictures="pictures" />
    <button @click="switchToPrevPage">Previous</button>
    <button @click="switchToNextPage">Next</button>
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
      searchWord: '',
      currentPage: 1
    }
  },
  methods: {
     searchPictures: async function () {
      try {
        const data = await getPictures(this.searchWord, this.currentPage);
        this.pictures = data.results
      } catch (error) {
        window.console.log('error in catch', error)
      }
    },
    updateSearchWord: function (val) {
      this.searchWord = val
      this.searchPictures({preventDefault: () => {}})
    },
    switchToNextPage: function (page) {
      this.currentPage = this.currentPage += 1
      this.searchPictures()
    },
    switchToPrevPage: function (page) {
      this.currentPage = this.currentPage += 1
      this.searchPictures()
      
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
