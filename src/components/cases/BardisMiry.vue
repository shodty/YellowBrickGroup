<template lang="pug">
#bardis-miry-main
    CaseLeft(caseTitle='Bardis & Miry' year='2019' :pattern='patterns.bardismiry'  case='bm')
        p(slot="description") 
            |Drawing inspiration from traditional night markets in Asia, Our Street Night Market is an award-winning, 
            |one-of-a-kind event conceptualized, branded, curated, and run entirely by YBG. Our Street is a gathering place for all 
            |Sacramentans to enjoy amazing food prepared by chefs from our booming food scene. From its inception, Our Street has greatly 
            |exceeded projected attendance,  drawing over 12,000 people to its inaugural event, and reaching upwards of 50,000 attendees by its second year.

    CaseRight(case='bm')
        img(class='case-image' slot='image0' alt='bardis-miry1' src='../../assets/img/cases/bm/1.jpg' id='bardis-miry1')
        hooper( :settings='hooperSettings' slot='image1' class='case-image' style="height: 100%")
          slide
            img(class='case-image' alt='bm' src='../../assets/img/cases/bm/slide/s1.jpg' id='bardis-miry1')
          slide
            img(class='case-image' alt='bm' src='../../assets/img/cases/bm/slide/s2.jpg' id='bardis-miry2')
          slide
            img(class='case-image' alt='bm' src='../../assets/img/cases/bm/slide/s3.jpg' id='bardis-miry3')
          slide
            img(class='case-image' alt='bm' src='../../assets/img/cases/bm/slide/s4.jpg' id='bardis-miry4')                        
          hooper-navigation(slot="hooper-addons")            
        img(class='case-image' slot='image2' alt='bardis-miry2' src='../../assets/img/cases/bm/2.jpg' id='bardis-miry2')
        img(class='case-image' slot='image3' alt='bardis-miry3' src='../../assets/img/cases/bm/3.jpg' id='bardis-miry3')
        video(class='case-image' slot='image4' alt='bardis-miry4' src='../../assets/img/cases/bm/4.mp4' id='bardis-miry4' controls muted loop poster="../../assets/img/posters/bm1.jpg")
        //img(class='case-image' slot='image5' alt='bardis-miry5' src='../../assets/img/cases/bm/5.jpg' id='bardis-miry5')
        //img(class='case-image' slot='image6' alt='bardis-miry6' src='../../assets/img/cases/bm/6.jpg' id='bardis-miry6')
        //img(class='case-image-last' slot='image7' alt='bardis-miry7' src='../../assets/img/cases/bm/7.gif' id='bardis-miry7')
</template>

<script>

import CaseLeft from './CaseLeft.vue'
import CaseRight from './CaseRight.vue'
import { Hooper, Slide, Navigation as HooperNavigation } from 'hooper'
import 'hooper/dist/hooper.css'

export default {
  name: 'bardis-miry',
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
        },
        hooperSettings: {
          itemsToShow: 1,
          centerMode: true,
          infiniteScroll: true,
          wheelControl: false
      }
    }
  },
    components: {
        CaseLeft,
        CaseRight,
        Hooper,
        Slide,
        HooperNavigation
    },
    methods: {

    },
}

</script>

<style scoped lang="stylus">

*
  margin: 0px
  padding 0px

#bardis-miry-main 
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
