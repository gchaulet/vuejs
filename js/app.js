let vm = new Vue ({
    el: '#app',
    data: {
       success: false,
       message: '',
       firstname: 'Jean',
       lastname: 'Delatour'
    },
    computed: {
        fullname:  {
           get: function(){
            return this.firstname + ' ' + this.lastname
           }, 
           set: function(value){
            let parts = value.split(' ')
            this.firstname = parts[0]
            this.lastname = parts[1]
           }
        }
    }
   
})