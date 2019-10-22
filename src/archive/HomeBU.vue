<template lang="pug">
#home(:style="bgc")

  SideBar
  // header image
  Header
  //grid of projects inside container div
  .container
    .grid
      Cube(project='OurStreet'     letter='letter-o' :color1=  'iconfronts.ourstreet[iconfronts.ourstreet.length-1]'    color2='#e5b4c8' image='ourstreet.png'     :pattern='patterns.ourstreet'   :bgColor='bgc' :iconfill='iconfill' @hovered="onHoverChild")
      Cube(project='AllCityRiders' letter='letter-a' :color1=  'iconfronts.acr[iconfronts.acr.length-1]'                color2='#006bb6' image='allcityriders.png' :pattern='patterns.acr'         :bgColor='bgc' :iconfill='iconfill' @hovered="onHoverChild")
      Cube(project='TourDeAwesome' letter='letter-j' :color1=  'iconfronts.jump[iconfronts.jump.length-1]'              color2='#f3ae44' image='tourdeawesome.png' :pattern='patterns.jump'        :bgColor='bgc' :iconfill='iconfill' @hovered="onHoverChild")
      Cube(project='MasTaco'       letter='letter-m' :color1=  'iconfronts.mastaco[iconfronts.mastaco.length-1]'        color2='#c6d655' image='mastaco.png'       :pattern='patterns.mastaco'     :bgColor='bgc' :iconfill='iconfill' @hovered="onHoverChild")
      Cube(project='Bottomless'    letter='letter-b' :color1=  'iconfronts.bottomless[iconfronts.bottomless.length-1]'  color2='#e96c59' image='bottomless.png'    :pattern='patterns.bottomless'  :bgColor='bgc' :iconfill='iconfill' @hovered="onHoverChild")
      Cube(project='ShangriLa'     letter='letter-s' :color1=  'iconfronts.shangrila[iconfronts.shangrila.length-1]'    color2='#f4e6c1' image='shangrila.png'     :pattern='patterns.shangrila'   :bgColor='bgc' :iconfill='iconfill' @hovered="onHoverChild")
      Cube(project='TheCabin'      letter='letter-c' :color1=  'iconfronts.cabin[iconfronts.cabin.length-1]'            color2='#fbcc53' image='cabin.png'         :pattern='patterns.cabin'       :bgColor='bgc' :iconfill='iconfill' @hovered="onHoverChild")
      Cube(project='ArtLifeTour'   letter='letter-a' :color1=  'iconfronts.artlife[iconfronts.artlife.length-1]'        color2='#61cbea' image='artlife.png'       :pattern='patterns.artlife'     :bgColor='bgc' :iconfill='iconfill' @hovered="onHoverChild")
      Cube(project='BardisMiry'    letter='letter-b' :color1=  'iconfronts.bardismiry[iconfronts.bardismiry.length-1]'  color2='#feede5' image='bardismiry.png'    :pattern='patterns.bardismiry'  :bgColor='bgc' :iconfill='iconfill' @hovered="onHoverChild")

      //Cube(ref='AlienLabs' project='AlienLabs' letter='letter-a' color1='#faa72a' color2='#e64783' image='alienlabs.png' image2='alienlabs_icons.png' pattern=[0,1,0,1,0,1,1,1,0] :bgColor='bgc'  @hovered="onHoverChild")
      //Cube(ref='Notorious' project='Notorious' letter='letter-n' color1='#e43e30' color2='#ffffff' image='notorious.png' image2='notorious_icons.png' pattern=[0,1,0,1,0,1,1,1,0] :bgColor='bgc'  @hovered="onHoverChild")
      //Cube(ref='Connected' project='Connected' letter='letter-c' color1='#000000' color2='#0198ce' image='connected.png' image2='connected_icons.png' :bgColor='bgc'  @hovered="onHoverChild")
  Footer
</template>

<script>

import Cube from './Cube.vue'
import Header from './Header.vue'
import Footer from './Footer.vue'
import SideBar from './SideBar.vue'
import { EventBus } from '../event-bus.js'

export default {
  name: 'home',
  data() {
    return{
      bgc : {
        backgroundColor : 'white'
      },
      patterns : { 
        ourstreet :   [1,1,1,1,1,1,1,1,1],
        acr :         [1,1,0,1,0,1,1,1,0],
        bottomless :  [1,1,1,1,1,1,1,0,1],
        shangrila :   [1,0,0,1,0,1,1,1,1],
        bardismiry :  [1,0,0,1,0,0,1,0,1],
        cabin :       [1,0,0,1,0,1,1,1,0],
        jump :        [1,0,1,0,1,1,1,0,1],
        artlife :     [1,0,1,1,0,1,1,0,1],
        mastaco :     [0,0,1,1,0,1,1,1,0]
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
      },
      iconfronts:{
        ourstreet :   ['#2a276c'],
        acr :         ['#67a844'],
        bottomless :  ['#f2bcb9'],
        shangrila :   ['#d6693f'],
        bardismiry :  ['#85ba9b'],
        cabin :       ['#34442c'],
        jump :        ['#e03b26'],
        artlife :     ['#8667ad'],
        mastaco :     ['#00adbb'],
      }
    }
  },
  mounted(){
        EventBus.$on('colorall', (category, color, clicked) => {

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
    onHoverChild (value1, value2) {
      if(value2 =='white') {
        this.iconfronts.ourstreet.pop()
        this.iconfronts.acr.pop()
        this.iconfronts.bottomless.pop()
        this.iconfronts.shangrila.pop()
        this.iconfronts.bardismiry.pop()
        this.iconfronts.cabin.pop()
        this.iconfronts.jump.pop()
        this.iconfronts.artlife.pop()
        this.iconfronts.mastaco.pop()
        return this.bgc.backgroundColor = value1
      }
      else
        this.iconfronts.ourstreet.push(value2)
        this.iconfronts.acr.push(value2)
        this.iconfronts.bottomless.push(value2)
        this.iconfronts.shangrila.push(value2)
        this.iconfronts.bardismiry.push(value2)
        this.iconfronts.cabin.push(value2)
        this.iconfronts.jump.push(value2)
        this.iconfronts.artlife.push(value2)
        this.iconfronts.mastaco.push(value2)
        return this.bgc.backgroundColor = value1 // someValue
    },
  }
}
</script>

<style lang="stylus">
*
  margin: 0px
  padding 0px

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