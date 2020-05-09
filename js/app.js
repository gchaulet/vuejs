let salut = function (el, binding){
        el.value = binding.value
        console.log('bind')
}

let vm = new Vue ({
    el: '#app',
    data: {
       success: false,
       message: 'Jean',
    },
    directives: {
        salut : salut
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