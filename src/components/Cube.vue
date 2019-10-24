<template lang="pug">
.scene(class="project" @mouseenter="changeBgc(color2, color1), shiftCube(true)" @mouseleave="changeBgc('white', 'white'), shiftCube(false)" :showTop='showTop' :showFront='showFront' :showRight='showRight')
    .cube(v-bind:class="showClass")
        .cube__face.cube__face--front(:style="bgColor")
            IconBase(width="400" height="400" :icon-name="project" :icon-color="color1")
                component(:is="letter")
        .cube__face.cube__face--back(:style="bgColor") back
        .cube__face.cube__face--right(:style="bgColor" @click="goToCaseStudy")
            img(:alt='project' :src='getImgUrl(image, ".png")')
            .picture-overlay( :class="pictureclass")
                img(:src='getLogoUrl(image)' width="400px" height="400px")  
        .cube__face.cube__face--left(:style="bgColor")
            IconBase(width="400" height="400" :icon-name="project" :icon-color="color2")
                component(:is="letter")
        .cube__face.cube__face--top(style="backgroundColor : black")
            .project-name
                p {{ project }}       
            .icon-table
                .icon-row
                    .icon-cell(@click="colorChanger(iconsObject.names[4], '#625e9d', iconsObject.concept.clicked)")
                        IconBase(v-if="pattern[4]== '1'" class="iconbases" icon-name="concept" width="65" height="65" :icon-color='iconsObject.concept.color')   
                            component(is="concept")
                        IconBase(v-else="pattern[4]== '1'" class="iconbases" icon-name="concept" width="65" height="65" icon-color='black')
                            component(is="concept")
                    .icon-cell(@click="colorChanger(iconsObject.names[1], '#f3b120', iconsObject.vid.clicked)")
                        IconBase(v-if="pattern[1] == '1'" class="iconbases" icon-name="videos" width="65" height="65" :icon-color='iconsObject.vid.color')
                            component(is="videos")
                    .icon-cell(@click="colorChanger(iconsObject.names[2], '#ed7625', iconsObject.gather.clicked)")
                        IconBase(v-if="pattern[2] == '1'" class="iconbases" icon-name="gathering" width="65" height="65" :icon-color='iconsObject.gather.color')
                            component(is="gathering")
                .icon-row
                    .icon-cell(@click="colorChanger(iconsObject.names[3], '#235d39', iconsObject.print.clicked)")
                        IconBase(v-if="pattern[3] == '1'" class="iconbases" icon-name="print" width="65" height="65" :icon-color='iconsObject.print.color' )
                            component(is="print")
                    .icon-cell(@click="colorChanger(iconsObject.names[0], '#edb1ca', iconsObject.id.clicked)")
                        IconBase(v-if="pattern[0] == '1'" class="iconbases" icon-name="identity" width="65" height="65" :icon-color='iconsObject.id.color' )
                            component(is="identity")
                    .icon-cell(@click="colorChanger(iconsObject.names[5], '#0076bb', iconsObject.photo.clicked)")
                        IconBase(v-if="pattern[5] == '1'" class="iconbases" icon-name="photo & video" width="65" height="65" :icon-color='iconsObject.photo.color' )
                            component(is="photovideo")
                .icon-row
                    .icon-cell(@click="colorChanger(iconsObject.names[6], '#e43e30', iconsObject.social.clicked)")
                        IconBase(v-if="pattern[6] == '1'" class="iconbases" icon-name="social" width="65" height="65" :icon-color='iconsObject.social.color' )
                            component(is="social")
                    .icon-cell(@click="colorChanger(iconsObject.names[7], '#244c5a', iconsObject.web.clicked)")
                        IconBase(v-if="pattern[7] == '1'" class="iconbases" icon-name="web" width="65" height="65" :icon-color='iconsObject.web.color' )
                            component(is="web")   
                    .icon-cell(@click="colorChanger(iconsObject.names[8], '#8dc63f', iconsObject.collab.clicked)")
                        IconBase(v-if="pattern[8] == '1'" class="iconbases" icon-name="collaboration" width="65" height="65" :icon-color='iconsObject.collab.color' )
                            component(is="collaboration")                        
        .cube__face.cube__face--bottom


</template>

<script>

import IconBase from './IconBase.vue'
import NavBar from './NavBar.vue'
import { EventBus } from '../event-bus.js'

export default {
    name: 'Cube',
    props: {
        project: String,
        letter: String,
        color1: String,
        color2: String,
        image: String,
        bgColor: Object,
        pattern: Array,
        iconsObject: Object
    },
    data() {
        return {
            showFront:  true,
            showRight:  false,
            showBack:   false,
            showLeft:   false,
            showTop:    false,
            showBottom: false,
            showLogo: false,
            projectclicked: false,
            pictureclass: 'null',
            light : true,
        }
    },
    mounted(){
        EventBus.$on('topall', topShower => {
            if(topShower == false) {
                this.showTop = true
                this.showRight = false
                this.showFront = false
                this.showBottom = false
                this.showLeft = false
            }
            
        }),
        EventBus.$on('rightall', rightShower => {
            if(rightShower == false) {
                this.showTop = false
                this.showRight = true
                this.showFront = false
                this.showBottom = false
                this.showLeft = false
                this.pictureclass = 'show-picture'
                this.projectclicked = !this.projectclicked
            }
        }),
        EventBus.$on('bottomall', bottomShower => {
            console.log(bottomShower)
            if(bottomShower == false) {
                this.showTop = false
                this.showRight = false
                this.showFront = false
                this.showBottom = true
                this.showLeft = false
            }
        }),
        EventBus.$on('leftall', leftShower => {
            if(leftShower == false) {
                this.showTop = false
                this.showRight = false
                this.showFront = false
                this.showLeft = true
                this.showBottom = false
            }
        }),
        EventBus.$on('frontall', frontShower => {
            this.projectclicked = false
            this.pictureclass = 'null'
            this.frontShowMethod()

        }),        
        EventBus.$on('darklight', lightness => {
          this.light = !this.light
      })
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
        frontShowMethod(){
            this.showFront = true
            this.showTop = false
            this.showRight = false
            this.showLeft = false
            this.showBottom = false
        },
        goToCaseStudy(){
            this.$router.push(this.image)
        },
        colorChanger(name, color, clicked){
            EventBus.$emit('colorall', name, color, clicked)
            if(clicked == false){
                this.$set(this.iconsObject[name], 'color', color)
                this.$set(this.iconsObject[name], 'clicked', true)
            }
            else{
                if(this.light == true)
                    EventBus.$emit('colorall', name, 'black', clicked)
                else
                    EventBus.$emit('colorall', name, 'white', clicked)
                this.$set(this.iconsObject[name], 'clicked', false)     
            }   

        },
        shiftCube(entered){
            if(entered && this.showFront){
                this.pictureclass = 'show-picture'
                this.showFront= false
                this.showRight= true

            }
            else if ( !entered && !this.showFront && !this.projectclicked){
                this.showFront= true
                this.showRight= false
                this.pictureclass = 'null'
            }
        }
    },
    computed: {
        showClass(){
            return {
                showFront: this.showFront,
                showRight: this.showRight,
                showTop: this.showTop,
                showLeft: this.showLeft,
                showBottom: this.showBottom
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

.icon-cell
    padding-top: 35px
    display: table-cell

.icon-row
    display: table-row

.icon-table
    display:table;
    table-layout:fixed;
    border-collapse: collapse;
    background:#000;
    width:100%;
    height:100%;

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

</style>
