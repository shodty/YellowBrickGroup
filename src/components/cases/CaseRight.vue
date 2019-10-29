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
</template>

<script>


export default {
  name: 'case-left',
  data(){
    return {
    }
  },
  props: {
    bg : String
  },
  components: {

  },
  methods: {

    },
}

</script>

<style scoped lang="stylus">

*
  margin: 0px
  padding 0px

#case-right
    display: inline-block
    width: 65%
    float: right 
    padding-right: 65px

</style>
