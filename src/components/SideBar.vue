<template lang="pug">
.sidediv(:class="[{ lightclass: light}, { darkclass: !light}]")
    .links
      //img(alt='YBG' src='../assets/img/YBG.png' width='50px' id='YBGicon')
      .nav(@click="goToLink('/')")
        p HOME
      .nav(@click="goToLink('tester')")
        p ABOUT
      .nav(@click="goToLink('contact')")
        p CONTACT
      .bxb
        img(alt='YBG' src='../assets/img/BXBXB.png' width='30px' id='BXB')
</template>

<script>

export default {
  name: 'side-bar',
  data() {
    return{
      activeLink : null,
      clicked1 : true,
      clicked2 : false,
      clicked3 : false
    }
  },
  computed: {
      light(){
          return this.$store.state.light
      }
  },
  methods: {
    goToLink(link){
      this.$router.push(link)
    }
  }
}

</script>

<style scoped lang="stylus">

.lightclass
    background-color: #ffffff
    color: black

.lightclass.sidediv
  border-left: 3px solid black;

.darkclass
    background-color: #000000
    color: white

.darkclass.sidediv
  border-left: 3px solid white;

.sidediv
    height: 100%
    width: 65px
    position: fixed
    z-index: 1000
    top: 0
    right: 0
    color: black
    overflow-x: hidden; /* Disable horizontal scroll */
    padding-top: 20px
    padding-left: 5px
    transition: 1s

.links
  z-index: 2
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  font-weight: 400
  font-size: 36px
  transition: 1s
  cursor: url('../assets/hand.png'), auto

.links p
  writing-mode: vertical-rl;
  text-decoration: none
  padding-bottom: 30px
  padding-top:20px
  display: block


.bxb 
  position: absolute
  bottom: 0
  padding-left: 13px
  padding-bottom: 25px


</style>
