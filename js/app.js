
//class generique car besoin compteur global qui evite de descendre composant apres composant
// classe isole les states qui seront partagées entre objets, des propritées
//que les mutations soient mieux détectées, un objet qu'on transvase
//Cet objet s'occupe des mutations
class NotificationsStore {
  constructor() {
      this.state = {
          count: 0
      }
  }  
  increment() {
      this.state.count+=2
  }
  decrement() {
    this.state.count--
  }
}
// on instancie la classe qu'une seule fois
let notifications_store = new NotificationsStore()

let Counter = {
    data: function(){
        return {
            state: notifications_store.state
        }
    },
    computed: {
        count: function() {
            return this.state.count
        }
    },
    methods: {
        increment: function(){
            notifications_store.increment()
        }
    },
    template : `<button @click="increment">{{ count }}</button>`
}

let Notifications ={
    components: {
        Counter
    },
    methods: {
        addNotification: function(){
            notifications_store.increment()
        }
    },
    template:  `<div>
    <counter></counter>
    <button @click="addNotification">Incrémenter</button> 
    </div>
    `
}




new Vue({
    el: '#app',
    components: {
        Notifications, Counter
    }
})