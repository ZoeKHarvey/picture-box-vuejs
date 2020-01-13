<template>
  <div id="app">
    <div class="header">
    <h1 class="h1__title">Picture Box</h1>
    <div class="div__search">
      <input class="search" v-model='searchWord' placeholder="Search"/>
      <img :src="require('../search.png')" class="search__btn" @click="searchPictures" />
    </div>
    </div>
    <pictures :pictures="pictures" />
    <div class="div__footer">
    <button v-if='this.pictures.length' @click="switchToPrevPage" class="btm-btn" id="prv-pg" >Previous</button>
    <button v-if='this.pictures.length' @click="decreasePerPage" class="btm-btn" id="less">-5 per page</button>
    <button v-if='this.pictures.length' @click="increasePerPage" class="btm-btn" id="more">+5 per page</button>
    <button v-if='this.pictures.length' @click="switchToNextPage" class="btm-btn" id="nxt-pg">Next</button>
    </div>
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
      currentPage: 1,
      perPage: 10
    }
  },
  methods: {
     searchPictures: async function () {
      try {
        const data = await getPictures(this.searchWord, this.currentPage, this.perPage);
        this.pictures = data.results
        document.querySelector('.search').val === ''
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
      this.currentPage = this.currentPage -= 1
      this.searchPictures()
      
    },
    decreasePerPage: function () { 
      this.perPage = this.perPage -= 5
      this.searchPictures()
    },
    increasePerPage: function() {
      this.perPage = this.perPage += 5
      this.searchPictures()
    }
  }
}

</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Satisfy&display=swap');
@import url('https://fonts.googleapis.com/css?family=Montserrat:100&display=swap');

.h1__title {
  font-family: 'Satisfy', cursive;
  background-color: rgb(62,150,168);
  color: white;
  border: 1px solid;
  margin-left: 20px;
  padding: 5px;
}

.search {
    width: 195px;
    height: 4vh;
    border-radius: 25px;
    font-size: 1.2em;
    font-family: 'Montserrat', sans-serif;
    padding-left: 10px;
}

.header {
  display: flex;
  background-color: rgb(62,150,168);
  justify-content: space-between;
  border-bottom: 2px solid #D1D5DA
}


.search__btn {
  max-width: 15%
}

.div__search {
  display: flex;
  align-items: center;
  width: 27%
}

.search__btn:hover {
 transform: scale(1.2);
 cursor: pointer;
}

.div__footer {
  display: flex;
  justify-content: space-evenly;

}

.btm-btn {
  width: 10%;
    height: 4vh;
    border-radius: 15px;
    font-size: 1.01em;
    margin-top: 18px;
     font-family: 'Montserrat', sans-serif;
}

.btm-btn:hover {
  background-color: rgb(62,150,168);
  color: white;
  transform: scale(1.1);
  cursor: pointer;
  font-weight: bold;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  height: 100vh;
}



</style>
