<template lang="pug">
#formbackground
    b-row(align-h="center")
        b-col(cols=5 md=5)  
          form(name='mail-service' method='post' id="mailserviceform" data-netlify="true" data-netlify-honeypot="bot-field")  
            input(type='hidden' name='form-name' value='ask-question')
            b-form-row( id="input-group-1"  label-for="input-1" )
                b-col(cols="3" class="blackborder" )
                    label First Name
                b-col(class="nopadding")
                    input(type="text" name='firstname' required placeholder="Enter first name" @input='ev => updateName')
            b-form-row
                b-col(cols="10")
                b-col(cols="2" class="nopadding")
                    button(type="submit") Done?        
</template>

<script>
export default {
  name: "FormTest",
  methods: {
    updateName (ev) {
      this.currentName = ev.target.value
    }
  },
  data () {
    return {
      currentName: 'none'
    }
  }
}
</script>