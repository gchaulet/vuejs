Vue.directive('salut', {
    bind: function (el, binding, vnode){
        el.value = binding.value
        console.log('bind')
    },
    update: function (el, binding, vnode, oldvnode){
        console.log('update')
    }
})
let vm = new Vue ({
    el: '#app',
    data: {
       success: false,
       message: 'Jean',
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