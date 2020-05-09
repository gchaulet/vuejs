new Vue ({
    el: '#app',
    data: {
       message : 'Salut les gens',
       link:'https://google.com',
       cls: 'success',
       persons: ['Jonathan', 'Marion', 'Jean', 'Patrick'],
       style: { background: '#0000'}
    },
    methods: {
        close: function(){

            this.success = false
        },
       
    }
})