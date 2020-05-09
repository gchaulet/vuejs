let capitalize = function (value, prefix, suffix){
    return prefix + value.toUpperCase() + suffix
}

Vue.filter ('reverse', function(value){
    return value.split('').reverse().join('')
})

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
    filters: {
        capitalize
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