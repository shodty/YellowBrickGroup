<template lang="pug">
#formbackground
    b-row(align-h="center")
        b-col(cols=5 md=5)  
          b-form(name='mail-service' method='post' id="mailserviceform" data-netlify="true" data-netlify-honeypot="bot-field")  
            input(type='hidden' name='form-name' value='ask-question')
            b-form-row( id="input-group-1"  label-for="input-1" )
                b-col(cols="3" class="blackborder" )
                    p First Name
                b-col(class="nopadding")
                    b-form-input(id="input-1" type="text" required placeholder="Enter first name" @input='ev => updateName')
            b-form-row
                b-col(cols="10")
                b-col(cols="2" class="nopadding")
                    b-button(type="submit" variant="primary" class="btn-block white tanbackground") Done?        
</template>

<script>
export default {
  name: "QAForm",
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