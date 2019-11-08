<template lang="pug">
#dark-light(@click='flip')
    .icon-holder(:class="[{ lightmode: light }, { darkmode: !light }]")
        IconBase(icon-name="dark light" width="55" height="55" :icon-color=' light? "black" : "white" ')
            component(is="smile")

</template>

<script>

import IconBase from './IconBase.vue'

export default {
  name: 'dark-light',
  data(){
    return {
        faceColor: 'black'
    }
  },
 computed: {
      light(){
          return this.$store.state.light
      }
  },
  components: {
      IconBase
  },
  methods: {
    flip(){
        this.$store.dispatch('darkLight')
    }
  }
}

</script>

<style scoped lang="stylus">

*
    margin: 0px
  
#dark-light
    position: fixed
    top: 0
    left: 0
    padding 2vw

.icon-holder
    transition: all 3s

.icon-holder.lightmode
    cursor: url("../assets/dark.png"), auto

.icon-holder.darkmode
    cursor: url("../assets/light.png"), auto

.darkmode
    transform: rotate(180deg)

.lightmode
    transform: rotate(0deg)

</style>
