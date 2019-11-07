<template lang="pug">
#header-div
    .headerimages
        .icon-container(class='hide-on-mobile')
          IconTwo(icon-name="yellow brick group" width="80vw" height="5vw" :icon-color=' light? "black" : "white" ')
            component(:is="componentName[this.count]")
          .click-box(@click='onClick')
        .mobile-container(class='hide-on-desktop')
          img(src="../assets/ybg_bubbly.png"  width="80%")
    NavBar(class='hide-on-mobile')
</template>

<script>

import NavBar from './NavBar.vue'
import IconTwo from './IconTwo.vue'
import { EventBus } from '../event-bus.js'

export default {
  name: 'app-header',

  data(){
    return {
      activeLink : 'navigation',
      count :0,
      window: {
        width: 0,
        height: 0
      },
      headerColor : 'black',
      componentName : ['yellow-brick-group', 'ybg-solid', 'ybg-bricked', 'ybg-hollow']

    }
  },
  created(){
    window.addEventListener('resize', this.handleResize)
    this.handleResize();
  },
  mounted(){
    EventBus.$on('moviechange', (movie, play) => {
      if(play)
        return this.count = 3
    })
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize)
  },
  computed: {
      light(){
          return this.$store.state.light
      }
  },
  methods: {
    onClick() {
      this.count++
      if(this.count > 3) this.count = 0
    },
    handleResize() {
      this.window.width = window.innerWidth*.8;
      this.window.height = this.window.width/13.3;
    }
  },
  components:{
    NavBar,
    IconTwo
  }
}
</script>

<style scoped lang="stylus">
#header-div
  position: relative
  z-index : 900
  margin: 0 auto
  text-align: center

.headerimages
  padding-bottom: 35px

.icon-container
  position: relative
  width: 100%

.click-box
  position: absolute 
  display: block
  height: 100%
  width: 30%
  margin: 0 auto
  top: 0
  left: 35%
  cursor: url("../assets/eye.png"), auto

.mobile-container
  color: white
</style>
