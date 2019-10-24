<template lang="pug">
#header-div
    .headerimages
      .imagediv
          .icon-div( @click='onClick')
            IconTwo(icon-name="yellow brick group" :width="window.width" :height="window.height" :icon-color='headerColor')
              component(:is="componentName[this.count]")
    NavBar
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
      light : true,
      headerColor : 'black',
      componentName : ['yellow-brick-group', 'ybg-solid', 'ybg-bricked', 'ybg-hollow']

    }
  },
  created() {
    window.addEventListener('resize', this.handleResize)
    this.handleResize();
  },
  mounted(){
    EventBus.$on('darklight', lightness => {
        this.light = !this.light
        if(lightness == 'black')
          this.headerColor = 'white'
        else
          this.headerColor = 'black'

    }),
    EventBus.$on('moviechange', (movie, play) => {
      if(play)
        return this.count = 3
    })
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize)
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

.headerimages
  padding-bottom: 35px

.imagediv
  cursor: url("../assets/eye.png"), auto

</style>
