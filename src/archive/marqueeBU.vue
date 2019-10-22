<template lang="pug">
#main-footer
  .marquee
    .marquee--inner
      span
        img(alt='logo marquee' src='../assets/img/logo_strip.png' width='100%' id='YBG-footer')
      span
        img(alt='logo marquee' src='../assets/img/logo_strip.png' width='100%' id='YBG-footer')
</template>

<script>

export default {
  name: 'app-footer'
  }

</script>

<style scoped lang="stylus">

#main-footer
  padding-top: 30px
  overflow: hidden

#YBG-footer
  display: inline-block
  float: left
  
.marquee 
  width: 100%
  overflow: hidden
  box-sizing: border-box
  position: relative
  margin: 0 auto


.marquee--inner 
  display: block
  width: 200%
  margin: 70px 0
  position: absolute
  animation: marquee 20s linear infinite


.marquee--inner:hover 
  animation-play-state: paused


span 
  float: left
  width: 50%


@keyframes marquee {
  0% { 
    left: 0; 
  }
  100% { 
    left: -100%; 
  }
}


</style>
