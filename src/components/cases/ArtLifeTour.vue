<template lang="pug">
#alt-main
    CaseLeft(caseTitle='ART LIFE TOUR' year='2018' :pattern='patterns.artlife'  case='alt')
        p(slot="description") 
            |Drawing inspiration from traditional night markets in Asia, Our Street Night Market is an award-winning, 
            |one-of-a-kind event conceptualized, branded, curated, and run entirely by YBG. Our Street is a gathering place for all 
            |Sacramentans to enjoy amazing food prepared by chefs from our booming food scene. From its inception, Our Street has greatly 
            |exceeded projected attendance,  drawing over 12,000 people to its inaugural event, and reaching upwards of 50,000 attendees by its second year.

    CaseRight(case='alt')
        img(class='case-image' slot='image1' alt='art-life-tour1' src='../../assets/img/cases/alt/1.jpg' id='art-life-tour1')
        video(class='case-image' slot='image2' alt='art-life-tour2' src='../../assets/img/cases/alt/2.mp4' id='art-life-tour2' controls muted loop preload="auto")
        img(class='case-image' slot='image3' alt='art-life-tour3' src='../../assets/img/cases/alt/3.jpg' id='art-life-tour3')
        img(class='case-image' slot='image4' alt='art-life-tour4' src='../../assets/img/cases/alt/4.jpg' id='art-life-tour4')
        //img(class='case-image' slot='image5' alt='art-life-tour5' src='../../assets/img/cases/alt/5.jpg' id='art-life-tour5')
        img(class='case-image' slot='image6' alt='art-life-tour6' src='../../assets/img/cases/alt/6.jpg' id='art-life-tour6')
        video(class='case-image-last' slot='image7' alt='art-life-tour7' src='../../assets/img/cases/alt/7.mp4' id='art-life-tour7'  controls muted loop preload="auto")
</template>

<script>

import CaseLeft from './CaseLeft.vue'
import CaseRight from './CaseRight.vue'

export default {
  name: 'art-life-tour',
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

#alt-main 
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

</style>
