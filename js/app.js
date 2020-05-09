let vm = new Vue ({
    el: '#app',
    data: {
       success: false,
       message: '',
       fisrname: 'Jean',
       lastname: 'Delatour'
    },
    computed: {
        cls: function() {
            console.log('cls call')
            return this.success === true ? 'success' : 'error'
        }
    }
   
})