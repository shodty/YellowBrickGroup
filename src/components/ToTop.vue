<template lang="pug">
#to-top(@click="goToTop")
    img(src="../assets/top.png"  width="40px")


</template>

<script>

export default {
  name: 'to-top',
  data(){
    return {
        faceColor: 'black'
    }
  },
  components: {
  },
  methods: {
    goToTop(){
        window.scrollTo(0,0);
    }
  }
}

</script>

<style scoped lang="stylus">

*
  margin: 0px
  
#to-top
    position: fixed
    bottom: 0
    right: 3vw
    padding 35px


</style>
