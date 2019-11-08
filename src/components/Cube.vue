<template lang="pug">
.scene(class="project" @mouseenter="shiftCube(true, color1)" @mouseleave="shiftCube(false, 'white')"  @click="mobileShift(true, color1)")
    .cube(:class="hovered? 'showRight' : cubeFace")
        .cube__face.cube__face--front(:style="bgColor")
            IconBase(width="22vw" height="22vw" :icon-name="project" :icon-color="color1"  class='hide-on-mobile')
                component(:is="letter")
            IconBase(width="65vw" height="65vw" :icon-name="project" :icon-color="color1"  class='hide-on-desktop')
                component(:is="letter")    
        .cube__face.cube__face--back back
        .cube__face.cube__face--right(:style="bgColor" @click="goToCaseStudy")
            img(:alt='project' :src='getImgUrl(image, ".png")' width="100%" height="100%")
            .picture-overlay( :class="cubeFace == 'showRight'? 'show-picture' : pictureclass" )
                img(:src='getLogoUrl(image)' class="image-overlay")  
        .cube__face.cube__face--left
            IconBase(width="22vw" height="22vw" :icon-name="project" :icon-color="color2")
                component(:is="letter")
        .cube__face.cube__face--top(:style="[cubeFace == 'showTop' || light? {'background' : 'black'} : {'background' : 'white' }]")
            .project-name
                p {{ project }}
            .icon-container(v-for="(icon, index) in iconObject" @click="colorChanger(icon.name, icon.clicked)")
                IconBase(v-if="pattern.includes(index)" class="iconbases" :icon-name="icon.name" width="3vw" height="3vw"  :icon-color='icon.clicked? icon.color : baseColor')
                    component(:is="icon.name")
        .cube__face.cube__face--bottom

</template>

<script>

import IconBase from './IconBase.vue'
import NavBar from './NavBar.vue'

export default {
    name: 'Cube',
    props: {
        project: String,
        letter: String,
        color1: String,
        color2: String,
        image: String,
        bgColor: Array,
        pattern: Array
    },
    data() {
        return {
            hovered: false,
            baseColor: 'white',
            pictureclass: 'null'
        }
    },
    computed: {
      light(){
          return !this.$store.state.light
      },
      iconObject(){
          return this.$store.state.iconObject
      },
      cubeFace(){
          return this.$store.state.cubeFace
      }
    },
    methods: {
        getImgUrl(pic, ext){
            return require('../assets/img/' + pic + ext)
        },
        getLogoUrl(pic){
            return require('../assets/img/cases/overlay/' + pic + '.png')
        },
        goToCaseStudy(){
            this.$router.push(this.image)
            window.scrollTo(0,0)
        },
        colorChanger(name, clicked){
            this.$store.dispatch('colorChange', {name, clicked})
        },
        shiftCube(entered, color){
            this.$store.dispatch('faceColor', {entered, color})
            if(this.cubeFace == 'showFront' && entered){
                this.hovered = true
                this.pictureclass = 'show-picture'
            }
            else if (this.cubeFace == 'showFront' && !entered){
                this.hovered = false
                this.pictureclass = 'null'
            }
        },
        mobileShift(entered, color){
            this.$store.dispatch('faceColor', {entered, color})
            if(this.cubeFace == 'showFront' && entered){
                this.hovered = true
                this.pictureclass = 'show-picture'
            }

        }
    },
  components:{
    IconBase, NavBar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">

* {
    @media(max-width: 768px) { 
        --cube-face-size: 65vw 
    }
    @media(min-width: 769px) { 
        --cube-face-size: 22vw 
    }

    box-sizing: border-box
    --cube-translate:       translateZ(calc(var(--cube-face-size)/-2))
    --cube-translate-pos:   translateZ(calc(var(--cube-face-size)/2))
}

.image-overlay {
     @media(max-width: 768px) { 
        width: 65vw
    }
    @media(min-width: 769px) { 
        width: 22vw
    }
}   

body
    font-family: sans-serif

.scene
    width: var(--cube-face-size)
    height: var(--cube-face-size)
    perspective: calc(var(--cube-face-size)*1.5) 
    float: left
    //margin: 10px
    transform-style: preserve-3d

.cube
    width: inherit
    height: inherit
    position: relative
    transform-style: preserve-3d
    transform: var(--cube-translate)
    transition: transform 1s
    //float: left

.cube.showFront
    transform: var(--cube-translate) rotateY(   0deg)
.cube.showRight
    transform: var(--cube-translate) rotateY( -90deg)
.cube.showBack
    transform: var(--cube-translate) rotateY(-180deg)
.cube.showLeft
    transform: var(--cube-translate) rotateY(  90deg)
.cube.showTop
    transform: var(--cube-translate) rotateX( -90deg)
.cube.showBottom
    transform: var(--cube-translate) rotateX(  90deg) 

.cube__face 
    position: absolute
    width: inherit
    height: inherit
    color: white
    text-align: center
    overflow: hidden
    transition: background 1s

.cube__face--front, .cube__face--right

.cube__face--front
    background: hsla(  0, 0%, 100%, 1)
    cursor: url('../assets/hand.png'), auto
.cube__face--right
    background: hsla(  0, 0%, 100%, 1)
    cursor: url('../assets/hand.png'), auto
.cube__face--back
    background: hsla(  0, 0%, 100%, 0)
.cube__face--left
    background: hsla(  0, 0%, 100%, 0)
.cube__face--top
    //background: hsla(  0, 0%, 100%, 1)
.cube__face--bottom
    background: hsla(  0, 0%, 100%, 0)

.cube__face--front
    transform: rotateY(  0deg) var(--cube-translate-pos)
.cube__face--right
    transform: rotateY( 90deg) var(--cube-translate-pos)
.cube__face--back
    transform: rotateY(180deg) var(--cube-translate-pos)
.cube__face--left
    transform: rotateY(-90deg) var(--cube-translate-pos) scaleX(-1)
.cube__face--top
    transform: rotateX( 90deg) var(--cube-translate-pos)
.cube__face--bottom
    transform: rotateX(-90deg) var(--cube-translate-pos)

.icon-container
    padding-left: 6px
    display: inline-block
    float: left 
    height: 33%
    width: 33%
    cursor: url('../assets/hand.png'), auto

.picture-overlay
    position: fixed
    top: 0
    left: 0
    opacity: 0
    transition: opacity 1s

.picture-overlay.show-picture
    opacity: 1

.project-name
    padding-left: 4px
    padding-top: 15px
    position: fixed
    font-size: 1.1vw
    writing-mode: vertical-rl;
    color: white
    text-transform: uppercase
    letter-spacing: 3px

.iconbases
    width: 100%
    padding-top: 2vw
    margin: 0 auto

</style>
