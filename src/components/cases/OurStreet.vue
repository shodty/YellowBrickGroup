<template lang="pug">
#ourstreet-main
    CaseLeft(caseTitle='OUR STREET' year='2018 2019' :pattern='patterns.ourstreet' case='os')
        p(slot="description") 
            |Drawing inspiration from traditional night markets in Asia, Our Street Night Market is an award-winning, 
            |one-of-a-kind event conceptualized, branded, curated, and run entirely by YBG. Our Street is a gathering place for all 
            |Sacramentans to enjoy amazing food prepared by chefs from our booming food scene. From its inception, Our Street has greatly 
            |exceeded projected attendance,  drawing over 12,000 people to its inaugural event, and reaching upwards of 50,000 attendees by its second year.

    CaseRight
        img(class='case-image' slot='image1' alt='our-street1' src='../../assets/img/cases/ourstreet/1.jpg' id='our-street1')
        video(class='case-image' slot='image2' alt='our-street1' src='../../assets/img/cases/ourstreet/2.mp4' id='our-street1' controls muted loop)
        img(class='case-image' slot='image3' alt='our-street1' src='../../assets/img/cases/ourstreet/3.jpg' id='our-street1')
        img(class='case-image' slot='image4' alt='our-street1' src='../../assets/img/cases/ourstreet/4.jpg' id='our-street1')
        img(class='case-image' slot='image5' alt='our-street1' src='../../assets/img/cases/ourstreet/5.jpg' id='our-street1')
        video(class='case-image' slot='image6' alt='our-street1' src='../../assets/img/cases/ourstreet/5.5.mp4' id='our-street1' controls muted loop)
        img(class='case-image' slot='image7' alt='our-street1' src='../../assets/img/cases/ourstreet/6.jpg' id='our-street1')
        img(class='case-image-last' slot='image8' alt='our-street1' src='../../assets/img/cases/ourstreet/7.jpg' id='our-street1')
</template>

<script>

import CaseLeft from './CaseLeft.vue'
import CaseRight from './CaseRight.vue'

export default {
  name: 'our-street',
  data(){
    return {
        patterns : { 
            ourstreet : [1,1,1,1,1,1,1,1,1]
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

#ourstreet-main 
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
