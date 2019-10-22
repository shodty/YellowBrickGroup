<template lang="pug">
#dark-light(@click='flip')
    .icon-holder(:class='flipped')
        IconBase(icon-name="dark light" width="55" height="55" :icon-color='faceColor')
            component(is="smile")

</template>

<script>

import IconBase from './IconBase.vue'
import { EventBus } from '../event-bus.js'

export default {
  name: 'dark-light',
  data(){
    return {
        flipped: 'light',
        faceColor: 'black'
    }
  },
  components: {
      IconBase
  },
  methods: {
      flip(){
        if(this.flipped == 'light'){
            EventBus.$emit('darklight', 'black')
            this.faceColor = 'white'
            return this.flipped = 'dark'
        }
        else
            EventBus.$emit('darklight', 'white')
            this.faceColor = 'black'
            this.flipped = 'light'
      }
    },
}

</script>

<style scoped lang="stylus">


*
  margin: 0px
  

#dark-light
    position: fixed
    top: 0
    left: 0
    padding 35px

.icon-holder
    transition: all 3s

.icon-holder.light
    cursor: url("../assets/dark.png"), auto

.icon-holder.dark
    cursor: url("../assets/light.png"), auto

.dark
    transform: rotate(180deg)

.light
    transform: rotate(0deg)

</style>
