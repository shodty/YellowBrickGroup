<template lang="pug">
#case-right(:style="bg")
    slot(name='image1')
    slot(name='image2')
    slot(name='image3')
    slot(name='image4')
    slot(name='image5')
    slot(name='image6')
    slot(name='image7')
    slot(name='image8')
    slot(name='image9')
    slot(name='image10')
    slot(name='image11')
    slot(name='image12')
    SideBar(class="sidebar-hide")
    MobileMenu(class="mobile-menu-hide")
    //.escape(class="escape-desktop" @click="goHome")
      img(src="../../assets/escape.png"  width="32px")
    .prev-next(class="mobile-menu-hide")
      .prev(@click="goToLink(false)")
          img(src="../../assets/prev.png")
      .next(@click="goToLink(true)")
          img(src="../../assets/next.png")
</template>

<script>

import SideBar from '../SideBar.vue'
import MobileMenu from '../MobileMenu.vue'

export default {
  name: 'case-left',
  data(){
    return {
      cases: ['os', 'acr', 'jump', 'mas', 'btm', 'shang', 'cabin', 'alt', 'bm']
    }
  },
  props: {
    bg : String,
    case: String
  },
  components: {
    SideBar,
    MobileMenu
  },
  methods: {
      goHome(){
          this.$router.push('/')
      },
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

#case-right {
    @media(max-width: 1139px) { 
      display: inline-block
      width: 100%
      float: right 
    }
    @media(min-width: 1140px) { 
      display: inline-block
      width: 65%
      float: right 
      padding-right: 65px
    }
}

.sidebar-hide {
  @media(max-width: 1139px) { 
    display: none !important
  }
}

.mobile-menu-hide {
  @media(min-width: 1140px) { 
    display: none !important
  }
}


.escape
    position: fixed
    top: 0
    right: 0
    padding 35px


.escape-desktop {
  @media(min-width: 1140px) { 
    right: 85px
    width: 40px
  }
}

.prev-next
  padding 20px 0
  width: 90%
  margin: 0 auto
  overflow:hidden;

.prev img
  width: 40%
  float: left
  display: inline-block

.next img
  width: 40%
  float: right
  display: inline-block
</style>
