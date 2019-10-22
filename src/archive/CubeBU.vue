<template lang="pug">
.scene(:class="project" @mouseover="showFront=false, showRight=true, changeBgc(color2)" @mouseleave="showFront=true, showRight=false, changeBgc('white')" @click="showFront=showTop, showRight=false, showTop=!showTop" :showTop='showTop' :showFront='showFront' :showRight='showRight')
    .cube(v-bind:class="showClass")
        .cube__face.cube__face--front(:style="bgColor")
            IconBase(width="400" height="400" :icon-name="project" :icon-color="color1")
                component(:is="letter")
        .cube__face.cube__face--back(:style="bgColor") back
        .cube__face.cube__face--right(:style="bgColor")
            img(:alt='project' :src='getImgUrl(image)')  
        .cube__face.cube__face--left(:style="bgColor")
            IconBase(width="400" height="400" :icon-name="project" :icon-color="color2")
                component(:is="letter")
        .cube__face.cube__face--top(style="backgroundColor : black")
            .icon-table
                .icon-row
                    .icon-cell
                        IconBase(v-if="pattern[4]== '1'" class="iconbases" icon-name="concept" width="65" height="65" :icon-color='iconfill.i5')
                            component(is="concept")
                        IconBase(v-else="pattern[4]== '1'" class="iconbases" icon-name="concept" width="65" height="65" icon-color='black')
                            component(is="concept")
                    .icon-cell
                        IconBase(v-if="pattern[1] == '1'" class="iconbases" icon-name="videos" width="65" height="65" :icon-color='iconfill.i2')
                            component(is="videos")
                    .icon-cell
                        IconBase(v-if="pattern[2] == '1'" class="iconbases" icon-name="gathering" width="65" height="65" :icon-color='iconfill.i3')
                            component(is="gathering")
                .icon-row
                    .icon-cell
                        IconBase(v-if="pattern[3] == '1'" class="iconbases" icon-name="print" width="65" height="65" :icon-color='iconfill.i4')
                            component(is="print")
                    .icon-cell
                        IconBase(v-if="pattern[0] == '1'" class="iconbases" icon-name="identity" width="65" height="65" :icon-color='iconfill.i1')
                            component(is="identity")
                    .icon-cell
                        IconBase(v-if="pattern[5] == '1'" class="iconbases" icon-name="photo & video" width="65" height="65" :icon-color='iconfill.i6')
                            component(is="photovideo")
                .icon-row
                    .icon-cell
                        IconBase(v-if="pattern[6] == '1'" class="iconbases" icon-name="social" width="65" height="65" :icon-color='iconfill.i7')
                            component(is="social")
                    .icon-cell
                        IconBase(v-if="pattern[7] == '1'" class="iconbases" icon-name="web" width="65" height="65" :icon-color='iconfill.i8')
                            component(is="web")   
                    .icon-cell
                        IconBase(v-if="pattern[8] == '1'" class="iconbases" icon-name="collaboration" width="65" height="65" :icon-color='iconfill.i9')
                            component(is="collaboration")
                                           
        .cube__face.cube__face--bottom bottom


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
        image2: String,
        bgColor: Object,
        pattern: Array,
        iconfill: Object
    },
    data() {
        return {
            showFront:  true,
            showRight:  false,
            showBack:   false,
            showLeft:   false,
            showTop:    false,
            showBottom: false,
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
            else {
                this.frontShowMethod()
            }
            
        }),
        EventBus.$on('rightall', rightShower => {
            if(rightShower == false) {
                this.showTop = false
                this.showRight = true
                this.showFront = false
                this.showBottom = false
                this.showLeft = false
            }
            else {
                this.frontShowMethod()
            }
        }),
        EventBus.$on('bottomall', bottomShower => {
            if(bottomShower == false) {
                this.showTop = false
                this.showRight = false
                this.showFront = false
                this.showBottom = true
                this.showLeft = false
            }
            else {
                this.frontShowMethod()
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
            else {
                this.frontShowMethod()
            }
        })
    },
    methods: {
        getImgUrl(pic){
            return require('../assets/img/' + pic)
        },
        changeBgc(color){
            this.$emit('hovered', color)
        },
        frontShowMethod(){
            this.showFront = true
            this.showTop = false
            this.showRight = false
            this.showLeft = false
            this.showBottom = false
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
    margin: 12px
    transform-style: preserve-3d


.cube
    width: inherit
    height: inherit
    position: relative
    transform-style: preserve-3d
    transform: translateZ(-200px)
    transition: transform 1s
    float: left
    // cursor: url("../img/cursorTest_3.png"), auto;


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

.cube__face--front
    background: hsla(  0, 0%, 100%, 1)
.cube__face--right
    background: hsla(  0, 0%, 100%, 1)
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
    transform: rotateX( 90deg) translateZ(199px)
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

</style>
