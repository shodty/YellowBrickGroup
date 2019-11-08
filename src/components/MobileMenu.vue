<template lang="pug">
#mobile-menu
    .menu-icon(@click="openMenu")
        img(src="../assets/menu.png"  width="32px")
    .menu-container(:class="opened? 'open' : 'closed'")
        .menu
            .nav(@click="openMenu")
                img(src="../assets/close.png" width="32px")
            .nav(@click="goToLink('/')")
                p HOME
            .nav(@click="goToLink('os')")
                p WORK
            .nav(@click="goToLink('contact')")
                p CONTACT
            .copyright
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
  methods: {
    openMenu(){
        return this.opened = !this.opened
    },
    goToLink(link){
      this.$router.push(link)
    }
  }
}

</script>

<style scoped lang="stylus">

*
  margin: 0px
  
.menu-icon
    z-index : 1000
    position: fixed
    top: 0
    right: 2vw
    padding 15px

.menu-container
    position: fixed
    z-index: 1100
    margin 0
    padding 0
    left: 100%;
    width 100%
    height 100%
    overflow hidden
    
.menu
    position: fixed
    top: 0
    width: 100%
    height: 100%
    color: black
    border-left: 2px solid black;
    line-height: 1
    font-weight: 1000
    font-size: 50px
    text-align: center
    background: #f3b120

.menu-container.closed {

    transition: 1s
}

.menu-container.open {
    left: 0
    transition: 1s

}

.menu p
    padding-bottom: 30px
    padding-top:20px
    margin 0 auto

.nav img 
    margin: 25px

.copyright
    margin-top: 35%

</style>
