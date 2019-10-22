<template lang="pug">
#app(:style="bgc")

  SideBar
  // header image
  Header
  //grid of projects inside container div
  .container
    .grid
      Cube(ref='OurStreet' project='OurStreet' letter='letter-o' color1='#2a276c' color2='#e5b4c8' image='ourstreet.png' image2='ourstreet_icons.png' :pattern='patterns.ourstreet' :bgColor='bgc' :iconfill='iconfill' @hovered="onHoverChild")
      Cube(ref='TourDeAwesome' project='TourDeAwesome' letter='letter-j' color1='#e03b26' color2='#f3ae44' image='tourdeawesome.png' image2='tourdeawesome_icons.png' :pattern='patterns.jump' :bgColor='bgc' :iconfill='iconfill' @hovered="onHoverChild")
      Cube(ref='MasTaco' project='MasTaco' letter='letter-m' color1='#00adbb' color2='#c6d655' image='mastaco.png' image2='mastaco_icons.png' :pattern='patterns.mastaco' :bgColor='bgc' :iconfill='iconfill'  @hovered="onHoverChild")
      Cube(ref='ShangriLa' project='ShangriLa' letter='letter-s' color1='#d6693f' color2='#405472' image='shangrila.png' image2='shangrila_icons.png' :pattern='patterns.shangrila' :bgColor='bgc' :iconfill='iconfill' @hovered="onHoverChild")
      Cube(ref='Bottomless' project='Bottomless' letter='letter-b' color1='#f2bcb9' color2='#e96c59' image='bottomless.png' image2='bottomless_icons.png' :pattern='patterns.bottomless' :bgColor='bgc' :iconfill='iconfill' @hovered="onHoverChild")
      Cube(ref='BardisMiry' project='BardisMiry' letter='letter-b' color1='#85ba9b' color2='#feede5' image='bardismiry.png' image2='bardismiry_icons.png' :pattern='patterns.bardismiry' :bgColor='bgc' :iconfill='iconfill'  @hovered="onHoverChild")
      Cube(ref='AllCityRiders' project='AllCityRiders' letter='letter-a' color1='#67a844' color2='#006bb6' image='allcityriders.png' image2='allcityriders_icons.png' :pattern='patterns.acr' :bgColor='bgc' :iconfill='iconfill' @hovered="onHoverChild")
      Cube(ref='TheCabin' project='TheCabin' letter='letter-c' color1='#34442c' color2='#fbcc53' image='cabin.png' image2='cabin_icons.png' :pattern='patterns.cabin' :bgColor='bgc' :iconfill='iconfill' @hovered="onHoverChild")
      Cube(ref='ArtLifeTour' project='ArtLifeTour' letter='letter-a' color1='#8667ad' color2='#61cbea' image='artlife.png' image2='artlife_icons.png' :pattern='patterns.artlife' :bgColor='bgc' :iconfill='iconfill' @hovered="onHoverChild")
      //Cube(ref='AlienLabs' project='AlienLabs' letter='letter-a' color1='#faa72a' color2='#e64783' image='alienlabs.png' image2='alienlabs_icons.png' pattern=[0,1,0,1,0,1,1,1,0] :bgColor='bgc'  @hovered="onHoverChild")
      //Cube(ref='Notorious' project='Notorious' letter='letter-n' color1='#e43e30' color2='#ffffff' image='notorious.png' image2='notorious_icons.png' pattern=[0,1,0,1,0,1,1,1,0] :bgColor='bgc'  @hovered="onHoverChild")
      //Cube(ref='Connected' project='Connected' letter='letter-c' color1='#000000' color2='#0198ce' image='connected.png' image2='connected_icons.png' :bgColor='bgc'  @hovered="onHoverChild")
  Footer
</template>

<script>

import Cube from './components/Cube.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import SideBar from './components/SideBar.vue'
import { EventBus } from './event-bus.js'

export default {
  name: 'app',
  data() {
    return{
      bgc : {
        backgroundColor : 'white'
      },
      patterns : { 
        ourstreet : [1,1,1,1,1,1,1,1,1],
        acr : [1,1,0,1,0,1,1,1,0],
        bottomless : [1,1,1,1,1,1,1,0,1],
        shangrila : [1,0,0,1,0,1,1,1,1],
        bardismiry : [1,0,0,1,0,0,1,0,1],
        cabin : [1,0,0,1,0,1,1,1,0],
        jump : [1,0,1,0,1,1,1,0,1],
        artlife : [1,0,1,1,0,1,1,0,1],
        mastaco : [0,0,1,1,0,1,1,1,0]
      },
      iconfill : {
        i1 : 'white',
        i2 : 'white',
        i3 : 'white',
        i4 : 'white',
        i5 : 'white',
        i6 : 'white',
        i7 : 'white',
        i8 : 'white',
        i9 : 'white',
      }
    }
  },
  mounted(){
        EventBus.$on('colorall', (category, color, clicked, clicker) => {
            if(category == 'idcolor')
              if(clicked == false)
                return this.iconfill.i1 = color
              else
                return this.iconfill.i1 = 'white'
            if(category == 'vidcolor')
              if(clicked == false)
                return this.iconfill.i2 = color
              else
                return this.iconfill.i2 = 'white'
            if(category == 'gathercolor')
              if(clicked == false)
                return this.iconfill.i3 = color
              else
                return this.iconfill.i3 = 'white' 
            if(category == 'printcolor')
              if(clicked == false)
                return this.iconfill.i4 = color
              else
                return this.iconfill.i4 = 'white' 
            if(category == 'conceptcolor')
              if(clicked == false)
                return this.iconfill.i5 = color
              else
                return this.iconfill.i5 = 'white' 
            if(category == 'photocolor')
              if(clicked == false)
                return this.iconfill.i6 = color
              else
                return this.iconfill.i6 = 'white' 
            if(category == 'socialcolor')
              if(clicked == false)
                return this.iconfill.i7 = color
              else
                return this.iconfill.i7 = 'white' 
            if(category == 'webcolor')
              if(clicked == false)
                return this.iconfill.i8 = color
              else
                return this.iconfill.i8 = 'white' 
            if(category == 'collabcolor')
              if(clicked == false)
                return this.iconfill.i9 = color
              else
                return this.iconfill.i9 = 'white' 
        })
  },
  components: {
    Cube,
    Header,
    Footer,
    SideBar
  },
  methods: {
    onHoverChild (value) {
      return this.bgc.backgroundColor = value // someValue
    },
  }
}
</script>

<style lang="stylus">
*
  margin: 0px
  padding 0px

#app 
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
  padding-top: 60px
  transition: 1s

.container
  margin: 0 auto
  display: flex
  align-items: center
  justify-content: center

.grid
  width: 100%
  padding-left: 15%
  padding-right: 15%

#ybg
  padding-bottom: 30px

</style>
