let message = {
    props: {
        type: { type: String, default: 'success'},
        message: String,
        header: String
    },
    template: `<div class="ui message " :class="type">
    <i class="close icon" @click.prevent="close"></i>
    <div class="header">{{ header }}</div>
    {{ message }}
    </div>`,
    methods: {
        close(){
            //this.$parent.$data.alert = false
            this.$emit('close')
        }
    }
}

let counter = {
    //function in data property due to the 2 counter must be independent to give 2 different state
    data: function() {
        return {
            count: 0
        }
    },
    props : {
        start: {type: Number, default: 0}
    },
    computed: {
        total: function(){
            return this.start + this.count
        }
    },
    methods: {
        increment: function() {
            this.count++
        }
    },
    template: `<button @click="increment">{{ total }}</button>`,
}
let formUser = {
    props: {
        //value a la place de user car c'est v-model dans le form-user html
        value: Object
    },
    data() {
        //to isolate edit firstname and lastname to local component
        return {
            userLocal: {...this.value}
        } 
    },
    methods: {
        save() {
            this.$emit('input', this.userLocal)
        }
    },
    template: `
        <form class="ui form" @submit.prevent="save">
            <div class="field">
                <label for="">Prénom</label>
                <input type="text" v-model="userLocal.firstname">
            </div>
            <div class="field">
                <label for="">Nom</label>
                <input type="text" v-model="userLocal.lastname">
            </div>
            <button class="ui button" type="submit">Envoyer</button>
            <p>
            <slot></slot>
            </p>
        </form>
    `,
    mounted: function() {
        console.log(this)
    }
    
}

let vm = new Vue ({
    el: '#app',
    components: { message, counter, formUser },
    data: {
       message: 'Le meilleur best',
       alert: false,
       user: {
           firstname: 'Jean',
           lastname: 'DeLaTour'
       }
    },
    methods: {
      showAlert(){
        this.alert = true
      },
      hideAlert(){
        this.alert = false
      }
    }
   
})