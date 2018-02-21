<template>
  <div id="app">
    <div id="cover"></div>
    <my-header></my-header>
    <todo></todo>
    <Footer></Footer>
  </div>
</template>

<script>
import myHeader from './todo/header.vue'
import Footer from './todo/footer.vue'
import todo from './todo/todo.vue'

export default {
  data: function() {
    return {
      todos: [ ]
    }
  },
  components: {
    myHeader,
    Footer,
    todo
  }
}
</script>

<style scoped>
#app {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
#cover {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0.75;
  z-index: -1;
  background-color: #999;
}
</style>
