<template lang="pug">
#mastaco-main
    CaseLeft(caseTitle='MAS TACO' year='2018 2019' :pattern='patterns.mastaco' case='mas')
        p(slot="description") 
            |Drawing inspiration from traditional night markets in Asia, Our Street Night Market is an award-winning, 
            |one-of-a-kind event conceptualized, branded, curated, and run entirely by YBG. Our Street is a gathering place for all 
            |Sacramentans to enjoy amazing food prepared by chefs from our booming food scene. From its inception, Our Street has greatly 
            |exceeded projected attendance,  drawing over 12,000 people to its inaugural event, and reaching upwards of 50,000 attendees by its second year.

    CaseRight(case='mas')
        video(class='case-image' slot='image1' alt='mastaco1' src='../../assets/img/cases/mas/1.mp4' id='mastaco1' controls muted loop)
        video(class='case-image' slot='image2' alt='mastaco2' src='../../assets/img/cases/mas/2.mp4' id='mastaco2' controls muted loop)
        video(class='case-image' slot='image3' alt='mastaco3' src='../../assets/img/cases/mas/3.mp4' id='mastaco3' controls)
        video(class='case-image' slot='image4' alt='mastaco4' src='../../assets/img/cases/mas/4.mp4' id='mastaco4' controls muted loop)
        video(class='case-image' slot='image5' alt='mastaco5' src='../../assets/img/cases/mas/5.mp4' id='mastaco5' controls)
        video(class='case-image' slot='image6' alt='mastaco6' src='../../assets/img/cases/mas/6.mp4' id='mastaco6' controls muted loop)
        img(class='case-image-last' slot='image7' alt='mastaco7' src='../../assets/img/cases/mas/7.jpg' id='mastaco7')

</template>

<script>

import CaseLeft from './CaseLeft.vue'
import CaseRight from './CaseRight.vue'

export default {
  name: 'mastaco',
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

#mastaco-main 
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
