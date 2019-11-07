<template lang="pug">
.navdiv
    .icons
        transition(name='slide-fade')
            .nav-image(v-if='activeLink =="start"') 
                .welcome-image(v-if="light")
                    img(alt='welcome' src='../assets/welcome3.png' height='66px' id='welcome')
                .welcome-image(v-else)
                    img(alt='welcome' src='../assets/welcome4.png' height='66px' id='welcome')

        transition(name='slide-fade')
            .nav-icons(v-if='activeLink =="sort"') 
                .icon-wrapper(:class="[{ lightclass: light }, { darkclass: !light }]")
                    //loops thru iconObject to create icons with name/color/text/clickstate assigned via the object. click event fires to action/mutation in store that will change icons clickstate & colors across components
                    .icon-text(v-for="icon in iconObject" @click="colorChanger(icon.name, icon.clicked)")
                        IconBase(class="iconbases" :icon-name="icon.name" width="3vw" height="4vw"  :icon-color='icon.clicked? icon.color : baseColor')
                            component(:is="icon.name")
                        p {{icon.text}}
        transition(name='slide-fade')
            .nav-icons(v-if='activeLink =="videos"') 
                .video-controls
                    img(alt='welcome' src='../assets/img/icons/back.png' height='46px' @click='previous')
                    img(v-if="!play" alt='welcome' src='../assets/img/icons/play.png' height='46px' @click='playVid')
                    img(v-else-if="play" alt='welcome' src='../assets/img/icons/pause.png' height='46px' @click='pause')
                    img(alt='welcome' src='../assets/img/icons/forward.png' height='46px' @click='next')
                    img(alt='welcome' src='../assets/img/icons/mute.png' height='46px')
        transition(name='slide-fade')
            .nav-icons(v-if='activeLink =="projects"')
                .icon-wrapper
                    //loops through cubeObject to create icons in nav bar of PROJECTS link that are same letter forms/colors as the projects
                    IconBase(v-for="cube in cubeObject" class="iconbases" :icon-name="cube.text" width="50" height="50" :icon-color='cube.color1')
                        component(:is="cube.letter")
    .buttons
        //text for START, PROJECTS, SORT, VIDEOS buttons. clicking makes the link active and rotates cube accordingly. 2 class bindings, one assigns .active class if link clicked, the other assigns lightmode/darkmode appropriate class
        .nav.nav-text(href='#' @click='onClick("start"); rotateCube("showFront")'       :class='[activeLink == "start"? "active" : "", light? "lightclass" : "darkclass"]' )    START 
        .nav.nav-text(href='#' @click='onClick("projects"); rotateCube("showRight")'    :class='[activeLink == "projects"? "active" : "", light? "lightclass" : "darkclass"]')  PROJECTS
        .nav.nav-text(href='#' @click='onClick("sort"); rotateCube("showTop")'          :class='[activeLink == "sort"? "active" : "", light? "lightclass" : "darkclass"]')      SORT
        .nav.nav-text(href='#' @click='onClick("videos"); '                             :class='[activeLink == "videos"? "active" : "", light? "lightclass" : "darkclass"]')    VIDEOS
</template>

<script>

import IconBase from './IconBase.vue'
import Cube from './Cube.vue'
import { EventBus } from '../event-bus.js'
import { mapState } from 'vuex'

export default {
    name: 'nav-bar',
    data() {
        return{
            activeLink : 'start',
            topShower : true,
            rightShower : true,
            leftShower : true,
            bottomShower : true,
            frontShower : true,
            play : true,
            volume: false,
            count: 0
        }
  },
  computed: {
    ...mapState([
        'iconObject',
        'light',
        'baseColor',
        'cubeObject',
        'cubeFace',
        'videoArray'
    ])
  },
  methods: {
    rotateCube(side){
        this.$store.dispatch('faceChange', side)
    },
    onClick(entry) {
        this.activeLink = entry
        if(entry == 'videos')
            this.movieChange("cases/ourstreet/8", true)
        else
            EventBus.$emit('moviechange', 'null', false)    
    },
    movieChange(movie, play){
        EventBus.$emit('moviechange', movie, play)
    },
    colorChanger(name, clicked){
        this.$store.dispatch('colorChange', {name, clicked})
    },
    playVid(){
        this.play = true
        EventBus.$emit('playVid', true)
    },
    pause(){
        this.play = false
        EventBus.$emit('pause', true)
    },
    next(){
        this.count++
        console.log(this.videoArray.length)
        if(this.count > this.videoArray.length-1)
            this.count = 0
        this.movieChange(this.videoArray[this.count], true)
    },
    previous(){
        this.count--
        if(this.count < 0)
            this.count = this.videoArray.length-1
        this.movieChange(this.videoArray[this.count], true)
    }
  },
   components:{
    Cube, IconBase
  }
}

</script>

<style scoped lang="stylus">

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
    transition: all .5s
    
.nav:hover
    color: #e43d30
    transition: all .5s

.navdiv
    margin: 0 auto
    align-items: center
    justify-content: center
    padding-bottom: 30px
    padding-top: 15px

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

.icon-wrapper
    display: inline-flex

.iconbases
    padding-right: 4px
    cursor: pointer

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
    margin-top: 10px

.icon-text
    display : block
    font-family: 'Open Sans', sans-serif
    font-weight: 700
    font-size: 10px
    letter-spacing: 1px
    line-height: 2.5
    text-transform: uppercase
    margin-left: 15px
    margin-right : 15px
    cursor: pointer

.slide-fade-enter-active
  transition: all 1s ease

.slide-fade-leave-active
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0)

.slide-fade-enter, .slide-fade-leave-to
  transform: translateY(50px)
  opacity: 0

.movie-button
    cursor: url('../assets/hand.png'), auto

.video-controls
    background: white
    padding: 5px 20px
    border-radius: 35px;

.video-controls img 
    padding: 0 10px
</style>
