<template lang="pug">
#jump-main
    CaseLeft(caseTitle='JUMP' year='2019' :pattern='patterns.jump')
        p(slot="description") 
            |Drawing inspiration from traditional night markets in Asia, Our Street Night Market is an award-winning, 
            |one-of-a-kind event conceptualized, branded, curated, and run entirely by YBG. Our Street is a gathering place for all 
            |Sacramentans to enjoy amazing food prepared by chefs from our booming food scene. From its inception, Our Street has greatly 
            |exceeded projected attendance,  drawing over 12,000 people to its inaugural event, and reaching upwards of 50,000 attendees by its second year.

    CaseRight
        img(class='case-image' slot='image1' alt='jump1' src='../../assets/img/cases/jump/1.jpg' id='jump1')
        video(class='case-image' slot='image2' alt='jump2' src='../../assets/img/cases/jump/2.mp4' id='jump2' controls autoplay muted loop)
        video(class='case-image' slot='image3' alt='jump3' src='../../assets/img/cases/jump/3.mp4' id='jump3' controls autoplay muted loop)
        video(class='case-image' slot='image4' alt='jump4' src='../../assets/img/cases/jump/4.mp4' id='jump4' controls autoplay muted loop)
        img(class='case-image' slot='image5' alt='jump5' src='../../assets/img/cases/jump/5.jpg' id='jump5')
        video(class='case-image' slot='image6' alt='jump6' src='../../assets/img/cases/jump/6.mp4' id='jump6' controls autoplay muted loop)
        img(class='case-image-last' slot='image7' alt='jump7' src='../../assets/img/cases/jump/7.jpg' id='jump7')
    SideBar(class="hide-on-mobile")
</template>

<script>

import CaseLeft from './CaseLeft.vue'
import CaseRight from './CaseRight.vue'
import SideBar from '../SideBar.vue'

export default {
  name: 'jump',
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
        CaseRight,
        SideBar
    },
    methods: {

    },
}

</script>

<style scoped lang="stylus">

*
  margin: 0px
  padding 0px

#jump-main 
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
