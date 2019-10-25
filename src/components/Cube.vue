<template lang="pug">
.scene(class="project" @mouseenter="shiftCube(true)" @mouseleave="shiftCube(false)" )
    .cube(:class="hovered? 'showRight' : cubeFace")
        .cube__face.cube__face--front(:style="bgColor")
            IconBase(width="400" height="400" :icon-name="project" :icon-color="color1")
                component(:is="letter")
        .cube__face.cube__face--back(:style="bgColor") back
        .cube__face.cube__face--right(:style="bgColor" @click="goToCaseStudy")
            img(:alt='project' :src='getImgUrl(image, ".png")')
            .picture-overlay( :class="cubeFace == 'showRight'? 'show-picture' : pictureclass")
                img(:src='getLogoUrl(image)' width="400px" height="400px")  
        .cube__face.cube__face--left(:style="bgColor")
            IconBase(width="400" height="400" :icon-name="project" :icon-color="color2")
                component(:is="letter")
        .cube__face.cube__face--top(style="backgroundColor : black")
            .project-name
                p {{ project }}
            .icon-container(v-for="icon in iconsObject" @click="colorChanger(icon.name, icon.clicked)")
                IconBase(class="iconbases" :icon-name="icon.name" width="65" height="65"  :icon-color='icon.clicked? icon.color : baseColor')
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
            showLogo: false,
            hovered: false,
            baseColor: 'white',
            pictureclass: 'null'
        }
    },
    computed: {
      light(){
          return !this.$store.state.light
      },
      iconsObject(){
          return this.$store.state.iconsObject
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
        changeBgc(color, color2){
            this.showLogo = !this.showlogo
            this.$emit('hovered', color, color2)
        },
        goToCaseStudy(){
            this.$router.push(this.image)
        },
        colorChanger(name, clicked){
            this.$store.dispatch('colorChange', {name, clicked})
        },
        shiftCube(entered){
            if(this.cubeFace == 'showFront' && entered){
                this.hovered = true
                this.pictureclass = 'show-picture'
            }
            else if (this.cubeFace == 'showFront' && !entered){
                this.hovered = false
                this.pictureclass = 'null'
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
*
    box-sizing: border-box

body
    font-family: sans-serif

.scene
    width: 400px
    height: 400px
    perspective: 800px 
    float: left
    margin: 10px
    transform-style: preserve-3d


.cube
    width: inherit
    height: inherit
    position: relative
    transform-style: preserve-3d
    transform: translateZ(-200px)
    transition: transform 1s
    float: left

.cube.showFront
    transform: translateZ(-200px) rotateY(   0deg)
.cube.showRight
    transform: translateZ(-200px) rotateY( -90deg)
.cube.showBack
    transform: translateZ(-200px) rotateY(-180deg)
.cube.showLeft
    transform: translateZ(-200px) rotateY(  90deg)
.cube.showTop
    transform: translateZ(-200px) rotateX( -90deg)
.cube.showBottom
    transform: translateZ(-200px) rotateX(  90deg) 

.cube__face 
    position: absolute
    width: inherit
    height: inherit
    color: white
    text-align: center
    transition: 1s
    overflow: hidden

.cube__face--front
    background: hsla(  0, 0%, 100%, 1)
    cursor: url('../assets/hand.png'), auto
.cube__face--right
    background: hsla(  0, 0%, 100%, 1)
    cursor: url('../assets/hand.png'), auto
.cube__face--back
    background: hsla(  0, 0%, 100%, 1)
.cube__face--left
    background: hsla(  0, 0%, 100%, 1)
.cube__face--top
    background: hsla(  0, 0%, 100%, 1)
.cube__face--bottom
    background: hsla(  0, 0%, 100%, 1)

.cube__face--front
    transform: rotateY(  0deg) translateZ(200px)
.cube__face--right
    transform: rotateY( 90deg) translateZ(200px)
.cube__face--back
    transform: rotateY(180deg) translateZ(200px)
.cube__face--left
    transform: rotateY(-90deg) translateZ(200px) scaleX(-1)
.cube__face--top
    transform: rotateX( 90deg) translateZ(200px)
.cube__face--bottom
    transform: rotateX(-90deg) translateZ(200px)

label
    margin-right: 10px

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
    transition: 2s

.picture-overlay.show-picture
    opacity: 1

.project-name
    padding-left: 6px
    padding-top: 15px
    position: fixed
    writing-mode: vertical-rl;
    color: white
    text-transform: uppercase
    letter-spacing: 3px

.iconbases
    width: 100%
    padding-top: 35px
    margin: 0 auto

</style>
