<template lang="pug">
#shangrila-main
    CaseLeft(caseTitle='Shangri-La' year='2018 2019' :pattern='patterns.shangrila')
        p(slot="description") 
            |Drawing inspiration from traditional night markets in Asia, Our Street Night Market is an award-winning, 
            |one-of-a-kind event conceptualized, branded, curated, and run entirely by YBG. Our Street is a gathering place for all 
            |Sacramentans to enjoy amazing food prepared by chefs from our booming food scene. From its inception, Our Street has greatly 
            |exceeded projected attendance,  drawing over 12,000 people to its inaugural event, and reaching upwards of 50,000 attendees by its second year.

    CaseRight
        img(class='case-image' slot='image1' alt='shangrila1' src='../../assets/img/cases/shang/1.jpg' id='shangrila1')
        img(class='case-image' slot='image2' alt='shangrila2' src='../../assets/img/cases/shang/2.jpg' id='shangrila2')
        img(class='case-image' slot='image3' alt='shangrila3' src='../../assets/img/cases/shang/3.jpg' id='shangrila3')
        img(class='case-image' slot='image4' alt='shangrila4' src='../../assets/img/cases/shang/4.jpg' id='shangrila4')
        img(class='case-image' slot='image5' alt='shangrila5' src='../../assets/img/cases/shang/5.jpg' id='shangrila5')
        img(class='case-image' slot='image6' alt='shangrila6' src='../../assets/img/cases/shang/6.jpg' id='shangrila6')

    SideBar(class="hide-on-mobile")
</template>

<script>

import CaseLeft from './CaseLeft.vue'
import CaseRight from './CaseRight.vue'
import SideBar from '../SideBar.vue'

export default {
  name: 'shangrila',
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

#shangrila-main 
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
