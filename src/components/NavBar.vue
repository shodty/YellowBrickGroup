<template lang="pug">
.navdiv
    .icons
        transition(name='slide-fade')
            .nav-image(v-if='activeLink =="welcome"') 
                .welcome-image
                    img(alt='welcome' src='../assets/welcome3.png' height='66px' id='welcome')

        transition(name='slide-fade')
            .nav-icons(v-if='activeLink =="categories"') 
                .icon-wrapper(:class="[{ lightclass: light }, { darkclass: !light }]")
                    .icon-text(v-for="icon in iconsObject" @click="colorChanger(icon.name, icon.clicked)")
                        IconBase(class="iconbases" :icon-name="icon.name" width="50" height="50"  :icon-color='icon.clicked? icon.color : baseColor')
                            component(:is="icon.name")
                        p {{icon.text}}
        transition(name='slide-fade')
            .nav-icons(v-if='activeLink =="videos"') 
                .icon-wrapper

        transition(name='slide-fade')
            .nav-icons(v-if='activeLink =="projects"')
                .icon-wrapper
                    IconBase(v-for="cube in cubeObject" class="iconbases" :icon-name="cube.text" width="50" height="50" :icon-color='cube.color1')
                        component(:is="cube.letter")

    
    
    .buttons
        .nav.nav-text(href='#' ref="welcome"    @click='onClick("welcome"); rotateCube("showFront")'    :class='[activeLink == "welcome"? ["lightclass", "active"] : "lightclass" ]')    START
        .nav.nav-text(href='#' ref="projects"   @click='onClick("projects"); rotateCube("showRight")'   :class='[activeLink == "projects"? ["lightclass", "active"] : "lightclass" ]')   PROJECTS
        .nav.nav-text(href='#' ref="categories" @click='onClick("categories"); rotateCube("showTop")'   :class='[activeLink == "categories"? ["lightclass", "active"] : "lightclass" ]') SORT
        .nav.nav-text(href='#' ref="videos"     @click='onClick("videos"); '                        :class='[activeLink == "videos"? ["lightclass", "active"] : "lightclass" ]')     VIDEOS
</template>

<script>

import IconBase from './IconBase.vue'
import Cube from './Cube.vue'
import { EventBus } from '../event-bus.js'

export default {
    name: 'nav-bar',
    data() {
        return{
            activeLink : 'welcome',
            topShower : true,
            rightShower : true,
            leftShower : true,
            bottomShower : true,
            frontShower : true,
        }
  },
  computed: {
      iconsObject(){
          return this.$store.state.iconsObject
      },
      light(){
          return this.$store.state.light
      },
      baseColor(){
          return this.$store.state.baseColor
      },
      cubeFace(){
          return this.$store.state.cubeFace
      },
      cubeObject(){
          return this.$store.state.cubeObject
      }
  },
  methods: {
    rotateCube(side){
        this.$store.dispatch('faceChange', side)
    },
    movieChange(movie, play){
        EventBus.$emit('moviechange', movie, play)
    },
    onClick(entry) {
        this.activeLink = entry
        EventBus.$emit('moviechange', 'null', false)    
    },
    colorChanger(name, clicked){
        this.$store.dispatch('colorChange', {name, clicked})
    }
  },
   components:{
    Cube, IconBase
  }
}

</script>

<style scoped lang="stylus">

a
    text-decoration: none

.nav
    transition: all .5s
    
.nav:hover
    color: #e43d30
    transition: all .5s

.navdiv
    margin: 0 auto
    align-items: center
    justify-content: center
    padding-bottom: 30px

.icons
    display: flex
    align-items: center
    justify-content: center
    height: 50px
    padding-bottom: 30px

.nav-image
    position: relative

.nav-icons
    position: absolute

.nav-button
    cursor: pointer
    display : inline-block

.icon-wrapper
    display: inline-flex

.nav-icons img
    padding-left: 20px
    padding-right: 20px
    
.iconbases
    padding-right: 4px

.lightclass
    color: black

.darkclass
    color: white
    
.lightclass.active
    color: white
    background: black
    transition: 1s

.darkclass.active
    color: black
    background: white
    transition: 1s

.buttons
    display: flex
    align-items: center
    justify-content: center

.nav
    float: left
    padding-left: 7px
    padding-right: 5px
    margin-left : 10px
    margin-right : 10px
    font-family: 'Open Sans', sans-serif
    font-weight: bold
    letter-spacing: 3px
    font-size: 20px
    cursor: pointer

.icon-text
    display : block
    font-family: 'Open Sans', sans-serif
    font-weight: 700
    font-size: 10px
    letter-spacing: 1px
    line-height: 3
    text-transform: uppercase
    margin-left: 15px
    margin-right : 15px
    cursor: pointer

.slide-fade-enter-active {
  transition: all 1s ease
}
.slide-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0)
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(50px);
  opacity: 0;
}

.movie-button
    cursor: url('../assets/hand.png'), auto
</style>
