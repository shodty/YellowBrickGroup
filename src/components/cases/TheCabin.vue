<template lang="pug">
#cabin-main
    CaseLeft(caseTitle='The Cabin' year='2018' :pattern='patterns.cabin' case='cabin')
        p(slot="description") 
            |Drawing inspiration from traditional night markets in Asia, Our Street Night Market is an award-winning, 
            |one-of-a-kind event conceptualized, branded, curated, and run entirely by YBG. Our Street is a gathering place for all 
            |Sacramentans to enjoy amazing food prepared by chefs from our booming food scene. From its inception, Our Street has greatly 
            |exceeded projected attendance,  drawing over 12,000 people to its inaugural event, and reaching upwards of 50,000 attendees by its second year.

    CaseRight(case='cabin')
        img(class='case-image' slot='image1' alt='cabin1' src='../../assets/img/cases/cabin/1.png' id='cabin1')
        img(class='case-image' slot='image2' alt='cabin2' src='../../assets/img/cases/cabin/2.jpg' id='cabin2')
        img(class='case-image' slot='image3' alt='cabin3' src='../../assets/img/cases/cabin/3.jpg' id='cabin3')
        img(class='case-image' slot='image4' alt='cabin4' src='../../assets/img/cases/cabin/4.png' id='cabin4')
        img(class='case-image' slot='image5' alt='cabin5' src='../../assets/img/cases/cabin/5.jpg' id='cabin5')
        img(class='case-image' slot='image6' alt='cabin6' src='../../assets/img/cases/cabin/6.jpg' id='cabin6')
        img(class='case-image' slot='image7' alt='cabin7' src='../../assets/img/cases/cabin/7.png' id='cabin7')
        img(class='case-image-last' slot='image8' alt='cabin8' src='../../assets/img/cases/cabin/8.gif' id='cabin8')

        img( alt='acr1' slot='z1' src='../../assets/img/cases/cabin/z/z1.png' id='z1' class='hide-on-ipad')
        img( alt='acr1' slot='z1' src='../../assets/img/cases/cabin/z/z2.png' id='z2' class='hide-on-ipad')
        img( alt='acr1' slot='z1' src='../../assets/img/cases/cabin/z/z2.png' id='z3' class='hide-on-ipad')
        img( alt='acr1' slot='z1' src='../../assets/img/cases/cabin/z/z2.png' id='z4' class='hide-on-ipad')     
        img( alt='acr1' slot='z1' src='../../assets/img/cases/cabin/z/z1.png' id='z5' class='hide-on-ipad')
        img( alt='acr1' slot='z1' src='../../assets/img/cases/cabin/z/z1.png' id='z6' class='hide-on-ipad')
        img( alt='acr1' slot='z1' src='../../assets/img/cases/cabin/z/z1.png' id='z7' class='hide-on-ipad')  

</template>

<script>

import CaseLeft from './CaseLeft.vue'
import CaseRight from './CaseRight.vue'

export default {
  name: 'cabin',
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

#cabin-main 
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
  transform: rotate(14deg);
  top 320%
  left 0
  padding-left 12%
  z-index 1000
  height 25%

#z4
  position absolute
  transform: rotate(-19deg);
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
  transform: rotate(-41deg);
  top 154%
  left 0
  padding-left 15%
  z-index 1000
  height 25%

#z7
  position absolute
  transform: rotate(24deg);
  top 452%
  left 0
  padding-left 8%
  z-index 1000
  height 25%

</style>
