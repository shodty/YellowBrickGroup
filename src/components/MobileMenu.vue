<template lang="pug">
#mobile-menu
    .menu-icon(@click="openMenu")
        img(:src=' light? getImgUrl("menu", ".png") : getImgUrl("menu_white", ".png")')
    .menu-container(:class="opened? 'open' : 'closed'")
        .menu
            .nav(@click="openMenu")
                img(src="../assets/close2.png" width="32px" height="32px")
            .nav(@click="goToLink('/')")
                p HOME
            .nav(@click="goToLink('os')")
                p WORK
            .nav(@click="goToLink('contact')")
                p CONTACT
            b-row(class="copyright")
                b-col(xs=6 md=6 lg=4 offset-md="3" offset-lg="4")
                    img(src="../assets/copyright.png" width="50%")
</template>

<script>

export default {
  name: 'to-top',
  data(){
    return {
        opened: false,
        faceColor: 'black'
    }
  },
  components: {
  },
  computed: {
      light(){
          return this.$store.state.light
      }
  },
  methods: {
    openMenu(){
        return this.opened = !this.opened
    },
    goToLink(link){
        this.openMenu()
        this.$router.push(link)
        window.scrollTo(0,0)
    },
    getImgUrl(pic, ext){
      return require('../assets/' + pic + ext)
    },
  }
}

</script>

<style scoped lang="stylus">

*
  margin: 0px
  
.menu-icon
    z-index : 1300
    position: fixed
    top: 0
    right: 0
    padding 2vw

.menu-icon img {
    @media(max-width: 767px) { 
        width 12vw
        margin-right: 2vw
        margin-top: 2vw
    }
    @media(min-width: 768px) { 
        width 4vw
    }
}

.menu-container
    top: 0
    position: fixed
    z-index: 1200
    margin 0
    padding 0
    left: 100%;
    height 100vw

.menu
    position: fixed
    top: 0
    width: 100%
    height: 100%
    color: black
    border-left: 2px solid black;
    line-height: 1
    font-family: 'cardinal_grotesque_wideSBd', sans-serif
    // letter-spacing: 2px
    font-weight: 1000
    font-size: 54px
    text-align: center
    background: #f3b120

.menu-container.closed {
    transition: left 1s
}

.menu-container.open {
    left: 0
    transition: left 1s

}

.menu p
    padding-bottom: 30px
    padding-top:20px
    margin 0 auto
    cursor: url('../assets/hand.png'), auto

.nav img 
    margin: 25px

.copyright
    margin-top: 10%


</style>
