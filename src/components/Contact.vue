<template lang="pug">
#contact-main
    img(alt='contact' src='../assets/img/contactpage.png' width='100%')
    SideBar
</template>

<script>

import SideBar from './SideBar.vue'

export default {
  name: 'contact',
  data(){
    return {
      activeLink : 'navigation',
      count :0,
    }
  },
  components: {
    SideBar
  },
  methods: {

  }
}
</script>

<style scoped lang="stylus">

*
  margin: 0px
  padding 0px

#contact-main 
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  background-color: black

</style>
