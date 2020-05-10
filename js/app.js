let message = {
    props: {
        type: { type: String, default: 'success'},
        message: String,
        header: String
    },
    template: `<div class="ui message " :class="type">
    <i class="close icon" @click.prevent="close"></i>
    <div class="header">{{ header }}</div>
    {{ message }}
    </div>`,
    methods: {
        close(){
            //this.$parent.$data.alert = false
            this.$emit('close')
        }
    }
}

let counter = {
    //function in data property due to the 2 counter must be independent to give 2 different state
    data: function() {
        return {
            count: 0
        }
    },
    props : {
        start: {type: Number, default: 0}
    },
    computed: {
        total: function(){
            return this.start + this.count
        }
    },
    methods: {
        increment: function() {
            this.count++
        }
    },
    template: `<button @click="increment">{{ total }}</button>`,
}

let vm = new Vue ({
    el: '#app',
    components: { message, counter },
    data: {
       message: 'Le meilleur best',
       alert: false
    },
    methods: {
      showAlert(){
        this.alert = true
      },
      hideAlert(){
        this.alert = false
      }
    }
   
})