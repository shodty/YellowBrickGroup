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
                    .movie-button(@click="movieChange('cases/alt/2', true)" @mouseenter="highlightMovie(true)" @mouseleave="highlightMovie(false)")
                        IconBase(class="iconbases" icon-name="our people" width="50" height="50" icon-color='#235d39' icon-stroke="white")
                            component(is="letter-o")
                    .movie-button(@click="movieChange('cases/btm/2', true)")
                        IconBase(class="iconbases" icon-name="jump" width="50" height="50" icon-color='#0076bb')
                            component(is="letter-j")
                    .movie-button(@click="movieChange('cases/jump/2', true)")
                        IconBase(class="iconbases" icon-name="connected" width="50" height="50" icon-color='#e2a0c7')
                            component(is="letter-c")   
                    .movie-button(@click="movieChange('cases/jump/3', true)")
                        IconBase(class="iconbases" icon-name="yellow" width="50" height="50" icon-color='#000')
                            component(is="letter-y")
                    .movie-button(@click="movieChange('cases/jump/4', true)")
                        IconBase(class="iconbases" icon-name="brick" width="50" height="50" icon-color='#000')
                            component(is="letter-b")
                    .movie-button(@click="movieChange('cases/mas/1', true)")
                        IconBase(class="iconbases" icon-name="group" width="50" height="50" icon-color='#000')
                            component(is="letter-g")     
                    .movie-button(@click="movieChange('cases/ourstreet/2', true)")
                        IconBase(class="iconbases" icon-name="mexico" width="50" height="50" icon-color='#f3b120')
                            component(is="letter-m")
                    .movie-button(@click="movieChange('cases/ourstreet/5.5', true)")
                        IconBase(class="iconbases" icon-name="barcelona" width="50" height="50" icon-color='#e43d30')
                            component(is="letter-b")
                    .movie-button(@click="movieChange('cases/acr/2', true)")
                        IconBase(class="iconbases" icon-name="all city riders" width="50" height="50" icon-color='#ed7625')
                            component(is="letter-a")

        transition(name='slide-fade')
            .nav-icons(v-if='activeLink =="something"') 
                .nav-button
                    img(alt='left' src='../assets/img/icons/L.png' width='50px' id='left' @click='rightShow')
                .nav-button
                    img(alt='up' src='../assets/img/icons/U.png' width='50px' id='up' @click='bottomShow')
                .nav-button
                    img(alt='down' src='../assets/img/icons/D.png' width='50px' id='down' @click='topShow')
                .nav-button
                    img(alt='right' src='../assets/img/icons/R.png' width='50px' id='right' @click='leftShow')

    .buttons
        .nav.nav-text(href='#' ref="welcome"    @click='onClick("welcome")'     :class="[{ active: clicked5 }, { lightclass: light }, { darkclass: !light }]") START
        .nav.nav-text(href='#' ref="projects"   @click='onClick("projects")'    :class="[{ active: clicked1 }, { lightclass: light }, { darkclass: !light }]") PROJECTS
        .nav.nav-text(href='#' ref="categories" @click='onClick("categories")'  :class="[{ active: clicked2 }, { lightclass: light }, { darkclass: !light }]") SORT
        .nav.nav-text(href='#' ref="videos"     @click='onClick("videos")'      :class="[{ active: clicked3 }, { lightclass: light }, { darkclass: !light }]") VIDEOS
        //.nav.nav-text(href='#' ref="colors"     @click='onClick("colors")'      :class="[{ active: clicked4 }, { lightclass: light }, { darkclass: !light }]") COLORS
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
            clicked1 : false,
            clicked2 : false,
            clicked3 : false,
            clicked4 : false,
            clicked5 : true,
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
      }
  },
  methods: {
    highlightMovie(highlight){

    },
    movieChange(movie, play){
        EventBus.$emit('moviechange', movie, play)
    },
    onClick(entry) {
        this.activeLink = entry
        if(entry == 'welcome'){
            this.clicked1 = false
            this.clicked2 = false
            this.clicked3 = false
            this.clicked4 = false
            this.clicked5 = true
            EventBus.$emit('moviechange', 'null', false)
            this.frontShow()
        }
        if(entry == 'projects'){
            this.clicked1 = true
            this.clicked2 = false
            this.clicked3 = false
            this.clicked4 = false
            this.clicked5 = false
            EventBus.$emit('moviechange', 'null', false)
            this.rightShow()
        }
        else if(entry == 'categories'){
            this.clicked1 = false
            this.clicked2 = true
            this.clicked3 = false
            this.clicked4 = false
            this.clicked5 = false
            EventBus.$emit('moviechange', 'null', false)
            this.topShow()
        }
        else if(entry == 'videos'){
            this.clicked1 = false
            this.clicked2 = false
            this.clicked3 = true
            this.clicked4 = false
            this.clicked5 = false
            EventBus.$emit('moviechange', 'cases/ourstreet/8', true)
            this.bottomShow()
        }
        else if(entry == 'colors'){
            this.clicked1 = false
            this.clicked2 = false
            this.clicked3 = false
            this.clicked4 = true
            this.clicked5 = false
            EventBus.$emit('moviechange', 'null', false)
            this.leftShow()
        }
        
    },
    topShow(){
        this.topShower = !this.topShower
        this.rightShower = true
        this.leftShower = true
        this.bottomShower = true
        EventBus.$emit('topall', this.topShower)
    },
    rightShow(){
        this.rightShower = !this.rightShower
        this.leftShower = true
        this.topShower = true
        this.bottomShower = true
        EventBus.$emit('rightall', this.rightShower)
    },
    leftShow(){
        this.leftShower = !this.leftShower
        this.rightShower = true
        this.topShower = true
        this.bottomShower = true
        EventBus.$emit('leftall', this.leftShower)
    },
    bottomShow(){
        this.bottomShower = !this.bottomShower
        this.rightShower = true
        this.topShower = true
        this.leftShower = true
        this.frontShower = true
        EventBus.$emit('bottomall', this.bottomShower)
    },
    frontShow(){
        this.rightShower = true
        this.topShower = true
        this.leftShower = true
        this.bottomShower = true
        EventBus.$emit('frontall', this.frontShower)
    },    
    colorChanger(name, clicked){ //(iconsObject.names[4], '#625e9d', iconsObject.concept.clicked)") 'id', 'black', false
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
