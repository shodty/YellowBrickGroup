<template lang="pug">
#bottomless-main
    CaseLeft(caseTitle='Bottomless' year='2019' :pattern='patterns.bottomless'  case='btm')
        p(slot="description") 
            |Drawing inspiration from traditional night markets in Asia, Our Street Night Market is an award-winning, 
            |one-of-a-kind event conceptualized, branded, curated, and run entirely by YBG. Our Street is a gathering place for all 
            |Sacramentans to enjoy amazing food prepared by chefs from our booming food scene. From its inception, Our Street has greatly 
            |exceeded projected attendance,  drawing over 12,000 people to its inaugural event, and reaching upwards of 50,000 attendees by its second year.

    CaseRight(case='btm')
        img(class='case-image' slot='image1' alt='bottomless1' src='../../assets/img/cases/btm/1.jpg' id='bottomless1')
        video(class='case-image' slot='image2' alt='bottomless2' src='../../assets/img/cases/btm/2.mp4' id='bottomless2' controls muted loop poster="../../assets/img/posters/btm4.jpg")
        video(class='case-image' slot='image3' alt='bottomless3' src='../../assets/img/cases/btm/3.mp4' id='bottomless3' controls muted loop poster="../../assets/img/posters/btm1.jpg")
        img(class='case-image' slot='image4' alt='bottomless4' src='../../assets/img/cases/btm/4.jpg' id='bottomless4')
        img(class='case-image' slot='image5' alt='bottomless5' src='../../assets/img/cases/btm/5.jpg' id='bottomless5')
        img(class='case-image' slot='image6' alt='bottomless6' src='../../assets/img/cases/btm/6.jpg' id='bottomless6')
        img(class='case-image' slot='image7' alt='bottomless7' src='../../assets/img/cases/btm/7.jpg' id='bottomless7')
        img(class='case-image' slot='image8' alt='bottomless7' src='../../assets/img/cases/btm/8.jpg' id='bottomless8')
        img(class='case-image-last' slot='image9' alt='bottomless7' src='../../assets/img/cases/btm/9.jpg' id='bottomless9')

        img( alt='acr1' slot='z1' src='../../assets/img/cases/btm/z/z1.png' id='z1' class='hide-on-ipad')
        img( alt='acr1' slot='z1' src='../../assets/img/cases/btm/z/z2.png' id='z2' class='hide-on-ipad')
        img( alt='acr1' slot='z1' src='../../assets/img/cases/btm/z/z1.png' id='z3' class='hide-on-ipad')
        img( alt='acr1' slot='z1' src='../../assets/img/cases/btm/z/z2.png' id='z4' class='hide-on-ipad')     
        img( alt='acr1' slot='z1' src='../../assets/img/cases/btm/z/z1.png' id='z5' class='hide-on-ipad')
        img( alt='acr1' slot='z1' src='../../assets/img/cases/btm/z/z1.png' id='z6' class='hide-on-ipad')
        img( alt='acr1' slot='z1' src='../../assets/img/cases/btm/z/z1.png' id='z7' class='hide-on-ipad')  

</template>

<script>

import CaseLeft from './CaseLeft.vue'
import CaseRight from './CaseRight.vue'

export default {
  name: 'bottomless',
  data(){
    return {
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
        }
    }
  },
    components: {
        CaseLeft,
        CaseRight
    },
    methods: {

    },
}

</script>

<style scoped lang="stylus">

*
  margin: 0px
  padding 0px

#bottomless-main 
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: #2c3e50
  transition: 1s
  width:100%
  height:100%


.case-image
    width:100%
    padding-bottom: 20px

.case-image-last
    width:100%
    padding-bottom: 0px


#z1
  position absolute
  transform: rotate(-24deg);
  top 54%
  left 0
  padding-left 29%
  z-index 1000
  height 25%

#z2
  position absolute
  transform: rotate(-14deg);
  top 199%
  left 0
  padding-left 25%
  z-index 1000
  height 25%

#z3
  position absolute
  top 320%
  left 0
  padding-left 12%
  z-index 1000
  height 25%

#z4
  position absolute
  transform: rotate(14deg);
  top 396%
  left 0
  padding-left 29%
  z-index 1000
  height 25%

#z5
  position absolute
  transform: rotate(-28deg);
  top 269%
  left 0
  padding-left 31%
  z-index 1000
  height 25%

#z6
  position absolute
  transform: rotate(-81deg);
  top 154%
  left 0
  padding-left 29%
  z-index 1000
  height 25%

#z7
  position absolute
  transform: rotate(84deg);
  top 452%
  left 0
  padding-left 14%
  z-index 1000
  height 25%


</style>
