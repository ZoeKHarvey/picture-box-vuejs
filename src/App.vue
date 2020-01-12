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
import getPictures from '../apiCalls.js'

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
    this.getPictures()
  },
  methods: {
     searchPictures: async function (e) {
      e.preventDefault()
      try {
        const result = await getPictures(this.word)
        this.pictures = result
        this.searchWord = ''
      } catch (error) {
        window.console.log(error)
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
