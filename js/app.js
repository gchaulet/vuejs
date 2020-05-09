let vm = new Vue ({
    el: '#app',
    data: {
       success: false,
       message: '',
       firstname: 'Jean',
       lastname: 'Delatour',
       fullname: ''
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