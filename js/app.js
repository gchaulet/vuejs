let message = {
    props: {
        type: { type: String, default: 'success'},
        message: String
    },
    template: `<div class="ui message " :class="type">{{ message }}</div>`
}

let vm = new Vue ({
    el: '#app',
    components: { message },
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