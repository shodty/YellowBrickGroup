<template lang="pug">
#tester //(@click='goHome')
  //#loader

  b-container
    b-row(class='bootsy')
      b-col(md=6 class='bootsy') Eu est est aliqua id adipisicing ullamco officia non anim nisi eiusmod pariatur irure labore. Eiusmod fugiat sit sint proident. Dolor incididunt aliqua esse ut ullamco et in laboris duis tempor amet. Fugiat dolor ea consequat magna laboris exercitation amet qui ad magna irure nulla aute. Amet mollit consectetur et in aute culpa mollit. Quis sunt dolor reprehenderit sint consequat eiusmod eu nostrud amet veniam aute. Occaecat irure irure ullamco deserunt voluptate esse aliqua reprehenderit.
      b-col(md=6 class='bootsy') Sunt ipsum eu laborum ea aute enim incididunt id duis occaecat proident ex eu elit. Velit mollit commodo et quis est cillum tempor magna. Cupidatat eu laboris irure amet reprehenderit. In voluptate ut fugiat consectetur labore anim aute mollit.
      b-col(md=6 class='bootsy') Sunt ipsum eu laborum ea aute enim incididunt id duis occaecat proident ex eu elit. Velit mollit commodo et quis est cillum tempor magna. Cupidatat eu laboris irure amet reprehenderit. In voluptate ut fugiat consectetur labore anim aute mollit.

    hr
    b-row(align-v="center" class=["height", "bootsy"])
      b-col(cols=4 class='bootsy') 1 of 3
      b-col(cols=4 class='bootsy') 2 of 3
      b-col(cols=4 class='bootsy') 3 of 3
    hr
    b-row(align-h="center" class='bootsy')
      b-col(cols=3 class='bootsy') 1 of 3
      b-col(cols=3 class='bootsy') 2 of 3
      b-col(cols=3 class='bootsy') 2 of 3
    hr  
    .row.bootsy(align-h="center")
      .col-md-5.bootsy test
      .col-md-5.col-md-offset-2.bootsy test
    hr
    .row.bootsy
      .col-md-4.bootsy
        .col-md-12.bootsy Some Content..
      .col-md-4.bootsy
        .col-md-12.bootsy Some Second Content..
      .col-md-4.bootsy
        .col-md-12.bootsy Some Second Content..          
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

.height
  min-height: 20rem
  background-color: gray
  text-align: center
hr
  border-color: white

#tester
  background: black 
  color: white
  height: 100%


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

.bootsy
  border: 1px solid red
  text-align: center
</style>
