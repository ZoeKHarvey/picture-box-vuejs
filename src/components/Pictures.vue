<template>
  <div class="div__pictures">
    <h1>Enter a search word above to see pictures"
  </div>
</template>

<script>
export default {
  name: 'Pictures',
  props: ['pictures', updateSearchWord], 
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
