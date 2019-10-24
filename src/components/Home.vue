<template lang="pug">
#home(:style="bgc" v-cloak)
  video(v-if="videoplay" class="video-bottom" :src="getImgUrl(videosource, '.mp4')" autoplay muted loop)
  DarkLight(class="footerclass")
  SideBar
  // header, which contains header image & navbar
  Header
  //grid of projects inside container div
  .container
    .grid
      // project = title on category page, tooltips 
      // letter = passed to iconbase component to load letter svg 
      // color1 = front face color, bound to array which is altered by onHoverChild method
      // color2 = secondary color for project, sent to background and left face
      // pattern = array of 9 bits that tell which categories projects fit into. toggles them on off in the 3x3 table on top face of cube, defined in Cube.vue
      // bgColor = background color of faces so when page background shifts, they shift as well
      // iconfill = when categories are clicked in the navbar, iconfill colors all of those icons on the tops of cubes. this is done via the event bus, which picks up the click events emitted from the Navbar.vue
      // @hovered = picks up emits from the Cube.vue so bgc:{backgroundColor : } is updated and then passed to page background and cube face backgrounds

      Cube(project='Our Street'       letter='letter-o' :color1='iconfronts.ourstreet[0]'  color2='#e5b4c8' image='os'    :pattern='patterns.ourstreet'   :bgColor='bgc' :iconsObject='iconsObject' @hovered="onHoverChild")
      Cube(project='All City Riders'  letter='letter-a' :color1='iconfronts.acr[0]'        color2='#006bb6' image='acr'   :pattern='patterns.acr'         :bgColor='bgc' :iconsObject='iconsObject' @hovered="onHoverChild")
      Cube(project='Jump'             letter='letter-j' :color1='iconfronts.jump[0]'       color2='#ffffff' image='jump'  :pattern='patterns.jump'        :bgColor='bgc' :iconsObject='iconsObject' @hovered="onHoverChild")
      Cube(project='Mas Taco'         letter='letter-m' :color1='iconfronts.mastaco[0]'    color2='#c6d655' image='mas'   :pattern='patterns.mastaco'     :bgColor='bgc' :iconsObject='iconsObject' @hovered="onHoverChild")
      Cube(project='Bottomless'       letter='letter-b' :color1='iconfronts.bottomless[0]' color2='#f26351' image='btm'   :pattern='patterns.bottomless'  :bgColor='bgc' :iconsObject='iconsObject' @hovered="onHoverChild")
      Cube(project='ShangriLa'        letter='letter-s' :color1='iconfronts.shangrila[0]'  color2='#f4e6c1' image='shang' :pattern='patterns.shangrila'   :bgColor='bgc' :iconsObject='iconsObject' @hovered="onHoverChild")
      Cube(project='The Cabin'        letter='letter-c' :color1='iconfronts.cabin[0]'      color2='#fbcc53' image='cabin' :pattern='patterns.cabin'       :bgColor='bgc' :iconsObject='iconsObject' @hovered="onHoverChild")
      Cube(project='Art Life Tour'    letter='letter-a' :color1='iconfronts.artlife[0]'    color2='#61cbea' image='alt'   :pattern='patterns.artlife'     :bgColor='bgc' :iconsObject='iconsObject' @hovered="onHoverChild")
      Cube(project='Bardis Miry'      letter='letter-b' :color1='iconfronts.bardismiry[0]' color2='#feede5' image='bm'    :pattern='patterns.bardismiry'  :bgColor='bgc' :iconsObject='iconsObject' @hovered="onHoverChild")
  Footer(class="footerclass")
</template>

<script>

import Cube from './Cube.vue'
import Header from './Header.vue'
import Footer from './Footer.vue'
import SideBar from './SideBar.vue'
import { EventBus } from '../event-bus.js'
import DarkLight from './DarkLight.vue'

export default {
  name: 'home',
  data() {
    return{
      bgc : {
        backgroundColor : 'white'
      },
      light : true,
      videoplay :false,
      videosource : "cases/acr/2",
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
      projects :[
        'ourstreet',
        'acr',
        'bottomless',
        'shangrila',
        'bardismiry',
        'cabin',
        'jump',
        'artlife',
        'mastaco'
      ],
      iconsObject : {
        names : [        
          'id',
          'vid',
          'gather',
          'print',
          'concept',
          'photo',
          'social',
          'web',
          'collab',
          ],
        id : {
          name : 'id',
          color : 'white',
          clicked : false
        },
        vid : {
          name : 'vid',
          color : 'white', 
          clicked : false
        },
        gather : {
          name : 'gather',
          color : 'white', 
          clicked : false
        },
        print : {
          name : 'print',
          color : 'white', 
          clicked : false
        },
        concept : {
          name : 'concept',
          color : 'white', 
          clicked : false
        },
        photo : {
          name : 'photo',
          color : 'white',
          clicked : false
        },
        social : {
          name : 'social',
          color : 'white', 
          clicked : false
        },
        web : {
          name : 'web',
          color : 'white', 
          clicked : false
        },
        collab : {
          name : 'collab',
          color : 'white', 
          clicked : false
        },            
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
        EventBus.$on('colorall', (name, color, clicked) => {
          for(var icon in this.iconsObject.names){
            if( (name == this.iconsObject.names[icon]) && !clicked ) 
                this.iconsObject[this.iconsObject.names[icon]].color = color
            else if( (name == this.iconsObject.names[icon]) && clicked )
                this.iconsObject[this.iconsObject.names[icon]].color = 'white'
          }
        }),
      EventBus.$on('darklight', lightness => {  
          this.light = !this.light
          return this.bgc.backgroundColor = lightness
      })
  },
  components: {
    Cube,
    Header,
    Footer,
    SideBar,
    DarkLight
  },
  methods: {
    onHoverChild (value1, value2) {
      if(this.light == true){
        if(value2 =='white') {
          for(var project in this.projects)
            this.iconfronts[this.projects[project]].shift()
            return this.bgc.backgroundColor = value1
        }
        else
          for(project in this.projects)
            this.iconfronts[this.projects[project]].unshift(value2)
            return this.bgc.backgroundColor = value1 // someValue
      }
      else {
        if(value2 =='white') {
          for(project in this.projects)
            this.iconfronts[this.projects[project]].shift()
        }
        else
          for(project in this.projects)  
            this.iconfronts[this.projects[project]].unshift(value2)
      }
    },
    getImgUrl(pic, ext){
      return require('../assets/img/' + pic + ext)
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
 

#ybg
  padding-bottom: 30px

[v-cloak] > * { display:none; }

[v-cloak]::before { 
  content: " ";
  display: block;
  width: 50px;
  height: 50px;
  background: url('../assets/loader.gif') no-repeat
}

.video-bottom
    position: fixed
    width: 100%
    top: 50% 
    left: 50%
    -webkit-transform: translateX(-50%) translateY(-50%)   
    transform: translateX(-50%) translateY(-50%)
    min-width: 100% 
    min-height: 100% 
    z-index: 1 
    overflow: hidden

.footerclass
    position: relative
    z-index : 900
</style>