<template lang="pug">
#tester(@click='goHome')
  #loader

</template>

<script>

export default {
    name: 'tester',
    methods:{ 
        goHome(){
            this.$router.push('/')
        }
    }
  }

</script>

<style scoped lang="stylus">



#loader {
  position: absolute
  z-index: 1;
  width: 100px;
  height: 100px;
  top:48%
  left: 45%
  transform: translateX(-350px)
  transform: translateY(-50px)
  background: url('../assets/loader.gif') no-repeat
  
}

</style>
