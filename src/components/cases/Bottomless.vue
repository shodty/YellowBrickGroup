<template lang="pug">
#bottomless-main
    CaseLeft(caseTitle='BOTTOMLESS' year='2019' :pattern='patterns.bottomless')
        p(slot="description") 
            |Drawing inspiration from traditional night markets in Asia, Our Street Night Market is an award-winning, 
            |one-of-a-kind event conceptualized, branded, curated, and run entirely by YBG. Our Street is a gathering place for all 
            |Sacramentans to enjoy amazing food prepared by chefs from our booming food scene. From its inception, Our Street has greatly 
            |exceeded projected attendance,  drawing over 12,000 people to its inaugural event, and reaching upwards of 50,000 attendees by its second year.

    CaseRight
        img(class='case-image' slot='image1' alt='bottomless1' src='../../assets/img/cases/btm/1.jpg' id='bottomless1')
        video(class='case-image' slot='image2' alt='bottomless2' src='../../assets/img/cases/btm/2.mp4' id='bottomless2' controls autoplay muted loop)
        video(class='case-image' slot='image3' alt='bottomless3' src='../../assets/img/cases/btm/3.mp4' id='bottomless3' controls autoplay muted loop)
        img(class='case-image' slot='image4' alt='bottomless4' src='../../assets/img/cases/btm/4.jpg' id='bottomless4')
        img(class='case-image' slot='image5' alt='bottomless5' src='../../assets/img/cases/btm/5.jpg' id='bottomless5')
        img(class='case-image' slot='image6' alt='bottomless6' src='../../assets/img/cases/btm/6.jpg' id='bottomless6')
        img(class='case-image' slot='image7' alt='bottomless7' src='../../assets/img/cases/btm/7.jpg' id='bottomless7')
        img(class='case-image' slot='image8' alt='bottomless7' src='../../assets/img/cases/btm/8.jpg' id='bottomless8')
        img(class='case-image-last' slot='image9' alt='bottomless7' src='../../assets/img/cases/btm/9.jpg' id='bottomless9')
    SideBar(class="hide-on-mobile")
</template>

<script>

import CaseLeft from './CaseLeft.vue'
import CaseRight from './CaseRight.vue'
import SideBar from '../SideBar.vue'

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

</style>
