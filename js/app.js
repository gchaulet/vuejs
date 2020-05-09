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