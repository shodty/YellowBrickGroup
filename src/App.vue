<template lang="pug">
#app
  router-view
</template>

<script>

import Home from './components/Home.vue'
import Contact from './components/Contact.vue'

export default {
  name: 'app',
  data() {
    return{
      loading: true
    }
  },
  mounted() {

  },
  components: {
    Home,
    Contact
  }
}
</script>

<style lang="stylus">
*
  margin: 0px
  padding 0px

#app 
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale

</style>


