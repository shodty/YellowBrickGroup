<template lang="pug">
#home
  .background-div(:style='[ light? {"background" : bgc } : {"background" : "black"} ]')
  video(v-if="videoplay" poster="../assets/videobg.png" class="video-bottom" :src="getImgUrl(videosource, '.mp4')" autoplay muted loop @canplay="updatePaused" @playing="updatePaused" @pause="updatePaused")
  DarkLight(class="darklightclass")
  SideBar(class="hide-on-ipad hide-on-desktop")
  MobileMenu
  // header, which contains header imagSe & navbar
  Header
  // grid of projects inside container div
  //  .main-container
  //    .grid
  //      //references cubeObject in store to bind all props that define each cube made using Cube.vue
  //      .cube-container(v-for="cube in cubeObject" @mouseenter='bgcChange(cube.color2)' @mouseleave='bgcChange("white")')  
  //        Cube(:project='cube.text' :letter='cube.letter' :color1='cubeHovered? faceColor : cube.color1' color2='cube.color2' :image='cube.image' :pattern='cube.pattern' :bgColor='[ light? { "background" : bgc} : {"background" : "black"} ]')
  .container-fluid
      //references cubeObject in store to bind all props that define each cube made using Cube.vue
      .test-wrapper
        b-row(align-h="center")
          b-col(v-for="cube in cubeObject" cols=6 md=4  @mouseenter='bgcChange(cube.color2)' @mouseleave='bgcChange("white")' class='nopadding')  
            Cube(class="cubeClass" :project='cube.text' :letter='cube.letter' :color1='cubeHovered? faceColor : cube.color1' color2='cube.color2' :image='cube.image' :pattern='cube.pattern' :bgColor='[ light? { "background" : bgc} : {"background" : "black"} ]')
  Footer(class="footerclass")
</template>

<script>

import Cube from './Cube.vue'
import Header from './Header.vue'
import Footer from './Footer.vue'
import SideBar from './SideBar.vue'
import { EventBus } from '../event-bus.js'
import DarkLight from './DarkLight.vue'
import { mapState } from 'vuex'
import MobileMenu from './MobileMenu.vue'

export default {
  name: 'home',
  data() {
    return{
      videoplay :false,
      videosource : "cases/acr/2",
      videoElement: null,
      paused: null,
    }
  },
  computed: {

    playing() { return !this.paused; },

    ...mapState([
      'iconObject',
      'light',
      'cubeObject',
      'bgc',
      'faceColor',
      'cubeHovered'
    ])
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
        }),
        EventBus.$on('playVid', play => {
          if(play){
            this.videoElement.play();
          }
        }),
        EventBus.$on('pause', play => {
          if(play){
            this.videoElement.pause();
          }
        })
  },
  components: {
    Cube,
    Header,
    Footer,
    SideBar,
    DarkLight,
    MobileMenu
  },
  methods: {
    bgcChange (color) {
      this.$store.dispatch('backgroundChange', color)
    },
    getImgUrl(pic, ext){
      return require('../assets/img/' + pic + ext)
    },
    updatePaused(event) {
      this.videoElement = event.target;
      this.paused = event.target.paused;
    }
  },
}
</script>

<style lang="stylus">

@font-face {
    font-family: 'cardinal_grotesque_condenseBd';
    src: url('../assets/fonts/cardinalgrotesquecondensed-bold-webfont.woff2') format('woff2'),
         url('../assets/fonts/cardinalgrotesquecondensed-bold-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;

}

@font-face {
    font-family: 'cardinal_grotesque_wideSBd';
    src: url('../assets/fonts/cardinalgrotesquewide-semibold-webfont.woff2') format('woff2'),
         url('../assets/fonts/cardinalgrotesquewide-semibold-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;

}

@font-face {
    font-family: 'goopersemibold_italic';
    src: url('../assets/fonts/gooper-semibolditalic-webfont.woff2') format('woff2'),
         url('../assets/fonts/gooper-semibolditalic-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;

}


.container-fluid
  position: relative
  z-index: 1

.test-wrapper{
  margin: 0 auto
  z-index: 0
  position: relative
  @media(max-width: 767px) { 
    width: 87%
  }
  @media(min-width: 768px) { 
    width: 72%
  }
}
*
  margin: 0px
  padding 0px

body
  margin: 0
  width: 100%
  height: 100%

.cubeClass
  margin-bottom: 1.3vw

#home
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
  padding-top: 60px
  

.background-div  
  position: fixed
  z-index: 0
  top 0
  left 0
  height: 100%
  width: 100%
  transition: 1s

.main-container
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
 
.video-bottom
    position: fixed
    top: 50% 
    left: 50%
    -webkit-transform: translateX(-50%) translateY(-50%)   
    transform: translateX(-50%) translateY(-50%)
    min-height: 100% 
    min-width: 100% 
    z-index: 3 
    overflow: hidden

.footerclass{
    position: relative 
    z-index : 950
    @media (min-width: 768px) and (orientation:portrait) {
      position: fixed
      bottom: 0
    }

}

.darklightclass {
    position: relative 
    z-index : 950
}
.hide-on-mobile {
  @media(max-width: 767px) { 
    display: none !important
  }
}

.hide-on-desktop {
  @media(min-width: 768px) { 
    display: none !important;
  }
}

.show-on-ipad {
  @media(min-width: 1025px) { 
    display: none !important;
  }
}

.hide-on-ipad {
  @media(max-width: 1024px) { 
    display: none !important;
  }
}

.nopadding {
   padding: 0 !important;
   margin: 0 !important;
}
</style>