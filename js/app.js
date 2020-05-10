let message = {
    props: {
        type: { type: String, default: 'success'},
        message: String
    },
    template: `<div class="ui message " :class="type">{{ message }}</div>`
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
    },
    methods: {
        demo: function() {
            console.log('demo')
        },
        demo2: function(){
            console.log('demo2')
        }
    }
   
})