<template lang="pug">
#home(:style='[ light? {"background" : bgc } : {"background" : "black"} ]' v-cloak)
  video(v-if="videoplay" class="video-bottom" :src="getImgUrl(videosource, '.mp4')" autoplay muted loop)
  DarkLight(class="footerclass")
  SideBar
  // header, which contains header image & navbar
  Header
  // grid of projects inside container div
  .container
    .grid
      //references cubeObject in store to bind all props that define each cube made using Cube.vue
      .cube-container(v-for="cube in cubeObject" @mouseenter='bgcChange(cube.color2)' @mouseleave='bgcChange("white")')  
        Cube(:project='cube.text' :letter='cube.letter' :color1='cube.color1' color2='cube.color2' :image='cube.image' :pattern='cube.pattern' :bgColor='[ light? { "background" : bgc} : {"background" : "black"} ]')
  Footer(class="footerclass")
</template>

<script>

import Cube from './Cube.vue'
import Header from './Header.vue'
import Footer from './Footer.vue'
import SideBar from './SideBar.vue'
import { EventBus } from '../event-bus.js'
import DarkLight from './DarkLight.vue'

export default {
  name: 'home',
  data() {
    return{
      videoplay :false,
      videosource : "cases/acr/2",
    }
  },
  computed: {
      iconsObject(){
          return this.$store.state.iconsObject
      },
      light(){
          return this.$store.state.light
      },
      cubeObject(){
        return this.$store.state.cubeObject
      },
      bgc(){
        return this.$store.state.bgc
      }
  },
  mounted(){
        EventBus.$on('moviechange', (movie, play) => {
          if(play){
            this.videosource = movie
            this.videoplay = true
          }
          else if(!play){
            this.videosource = null
            this.videoplay = false
          }
        })
  },
  components: {
    Cube,
    Header,
    Footer,
    SideBar,
    DarkLight
  },
  methods: {
    bgcChange (color) {
      this.$store.dispatch('backgroundChange', color)
    },
    getImgUrl(pic, ext){
      return require('../assets/img/' + pic + ext)
    },
  }
}
</script>

<style lang="stylus">
*
  margin: 0px
  padding 0px

body
  width: 100%

#home 
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
  padding-top: 60px
  transition: 1s

.container
  margin: 0 auto
  width: 80%
  display: flex
  align-items: center
  justify-content: center
  z-index : 25
  
.grid
  margin: 0 auto
  width: 100%
  display: inline-flex
  flex-wrap: wrap;
  align-items: center
  justify-content: center
 
#ybg
  padding-bottom: 30px

[v-cloak] > * { display:none; }

[v-cloak]::before { 
  content: " ";
  display: block;
  width: 50px;
  height: 50px;
  background: url('../assets/loader.gif') no-repeat
}

.video-bottom
    position: fixed
    width: 100%
    top: 50% 
    left: 50%
    -webkit-transform: translateX(-50%) translateY(-50%)   
    transform: translateX(-50%) translateY(-50%)
    min-width: 100% 
    min-height: 100% 
    z-index: 1 
    overflow: hidden

.footerclass
    position: relative
    z-index : 950
</style>