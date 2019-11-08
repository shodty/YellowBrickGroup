<template lang="pug">
#acr-main
    CaseLeft(caseTitle='ALL CITY RIDERS' year='2018' :pattern='patterns.acr'  case='acr')
        p(slot="description") 
            |Drawing inspiration from traditional night markets in Asia, Our Street Night Market is an award-winning, 
            |one-of-a-kind event conceptualized, branded, curated, and run entirely by YBG. Our Street is a gathering place for all 
            |Sacramentans to enjoy amazing food prepared by chefs from our booming food scene. From its inception, Our Street has greatly 
            |exceeded projected attendance,  drawing over 12,000 people to its inaugural event, and reaching upwards of 50,000 attendees by its second year.

    CaseRight(case='acr')
        img(class='case-image' slot='image1' alt='acr1' src='../../assets/img/cases/acr/1.jpg' id='our-street1')
        video(class='case-image' slot='image2' alt='acr1' src='../../assets/img/cases/acr/2.mp4' id='our-street1' controls muted loop poster="../../assets/img/posters/acr1.jpg")
        img(class='case-image' slot='image3' alt='acr1' src='../../assets/img/cases/acr/3.jpg' id='our-street1')
        img(class='case-image' slot='image4' alt='acr1' src='../../assets/img/cases/acr/4.jpg' id='our-street1')
        img(class='case-image' slot='image5' alt='acr1' src='../../assets/img/cases/acr/5.jpg' id='our-street1')
        img(class='case-image' slot='image6' alt='acr1' src='../../assets/img/cases/acr/6.gif' id='our-street1')
        img(class='case-image' slot='image7' alt='acr1' src='../../assets/img/cases/acr/7.jpg' id='our-street1')
        img(class='case-image-last' slot='image8' alt='acr1' src='../../assets/img/cases/acr/8.jpg' id='our-street1')
</template>

<script>

import CaseLeft from './CaseLeft.vue'
import CaseRight from './CaseRight.vue'

export default {
  name: 'all-city-riders',
  data(){
    return {
        patterns : { 
            acr : [1,1,0,1,0,1,1,1,0]
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

#acr-main 
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
