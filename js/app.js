new Vue ({
    el: '#app',
    data: {
       message : 'Salut les gens',
       link:'https://google.com',
       success: true,
       persons: ['Jonathan', 'Marion', 'Jean', 'Patrick'],
       style: { background: '#0000'}
    },
    methods: {
        close: function(){
            this.message = "fermé"
            this.success = false
        },
        style: function(){
            if(this.success) {
               return {background: '#00FF00'} 
            } else {
                return { 
                    background: '#FF0000'
                }
            } 
        }
    }
})