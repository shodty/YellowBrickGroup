<template lang="pug">
#case-left(:style="bg")
    .case-content
        h1 {{caseTitle}}
        .line-two
            .year-heading
                h3 Year: {{year}}
            .icons
                .icon-table
                    .icon-row
                            .icon-cell
                                IconBase(v-if="pattern[4]== '1'" class="iconbases" icon-name="concept" width="30" height="30" icon-color='black')
                                    component(is="concept")
                            .icon-cell
                                IconBase(v-if="pattern[1] == '1'" class="iconbases" icon-name="videos" width="30" height="30" icon-color='black')
                                    component(is="vid")
                            .icon-cell
                                IconBase(v-if="pattern[2] == '1'" class="iconbases" icon-name="gathering" width="30" height="30" icon-color='black')
                                    component(is="gather")
                            .icon-cell
                                IconBase(v-if="pattern[3] == '1'" class="iconbases" icon-name="print" width="30" height="30" icon-color='black')
                                    component(is="print")
                            .icon-cell
                                IconBase(v-if="pattern[0] == '1'" class="iconbases" icon-name="identity" width="30" height="30" icon-color='black')
                                    component(is="id")
                            .icon-cell
                                IconBase(v-if="pattern[5] == '1'" class="iconbases" icon-name="photo & video" width="30" height="30" icon-color='black')
                                    component(is="photo")
                            .icon-cell
                                IconBase(v-if="pattern[6] == '1'" class="iconbases" icon-name="social" width="30" height="30" icon-color='black')
                                    component(is="social")
                            .icon-cell
                                IconBase(v-if="pattern[7] == '1'" class="iconbases" icon-name="web" width="30" height="30" icon-color='black')
                                    component(is="web")   
                            .icon-cell
                                IconBase(v-if="pattern[8] == '1'" class="iconbases" icon-name="collaboration" width="30" height="30" icon-color='black')
                                    component(is="collab")
        slot(name="description")
    .prev-next(class="hide-prev")
        .prev(@click="goToLink(false)")
            img(src="../../assets/prev.png")
        .next(@click="goToLink(true)")
            img(src="../../assets/next.png")
</template>

<script>

import IconBase from '../IconBase.vue'

export default {
  name: 'case-left',
  data(){
    return {
        cases: ['os', 'acr', 'jump', 'mas', 'btm', 'shang', 'cabin', 'alt', 'bm']
    }
  },
  props: {
        caseTitle : String,
        year: String,
        pattern: Array,
        bg : String,
        case: String
  },
  components: {
      IconBase
  },
  methods: {
    goToLink(forward){
        var index = this.cases.indexOf(this.case)
        console.log(index)
        if(forward)
            if(this.cases.length-1 > index)
                this.$router.push(this.cases[index+1])
            else
                this.$router.push(this.cases[0])
        else 
            if(index > 0 )
                this.$router.push(this.cases[index-1])
            else
                this.$router.push(this.cases[this.cases.length-1])
        window.scrollTo(0,0)
    }
    },
}

</script>

<style scoped lang="stylus">
*
    margin: 0px
    padding 0px

#case-left {
    @media(max-width: 1139px) { 
        width: 100%
        position: relative
        display: block
        padding: 30px
        
    }
    @media(min-width: 1140px) { 
        padding-top: 30px
        padding-left: 60px
        width: 32%
        top: 0
        left: 0
        position: fixed
        height: 100%
    }
}

h1
    font-size: 60px
    color: black
    line-height : 1 
    font-weight: 900

h1 {
    @media(max-width: 1139px){
        font-size: 32px
        padding-bottom: 15px
    }
}

h3
    font-size: 22px
    color: black 
    font-weight: 500
    text-decoration: underline

h3 {
    @media(min-width: 1140px){
        padding-top: 25px
    }
}

.year-heading
    display: inline-block
    padding-right: 20px
    height: 100%
    top: 60%;
    -ms-transform: translateY(-40%);
    transform: translateY(-40%);

p
    font-family: 'Open Sans', Helvetica, Arial, sans-serif
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    color: black
    font-size: 16px
    font-weight: 600
    line-height: 1.4

p {
    @media(min-width: 1140px) { 
        padding-top: .5vw
        font-size: 22px
    }
}
.line-two
    padding-bottom: 15px
.icons
    display: inline-block

.icon-table
    display:table;
    table-layout:fixed;
    border-collapse: collapse;

.icon-cell
    padding-right: 5px
    display: table-cell

.icon-row
    padding-top: 5px
    display: table-row

.prev-next 
    z-index: 1300
    bottom: 35px
    position: fixed
    width: 32%
    left: 0
    padding-left: 3%

.prev img
    width: 40%
    float: left 

.next img
    width: 40%
    float: right

.hide-prev {
  @media(max-width: 1139px) { 
    display: none !important
  }
}

</style>
