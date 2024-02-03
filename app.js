//% Componente
/* //* Definizione del componente globale
 const MyComponent = {
     template: <div>Un semplice componente globale!</div>`
 };

 //* Creazione dell'applicazione Vue
 const App = Vue.createApp({});

 //* Registrazione del componente globale
 App.component('my-component', MyComponent);

 //* Montaggio dell'applicazione Vue sull'elemento del DOM
 App.mount('#app'); */


//% Altre sintassi



//, Multi Components
/* let app = {
    components: {
        'vue-button': {
            template: `<button>Click</button>`,
        },
        'vue-text': {
            template: `<p><slot></p>`,
        },
    },
}; */



//, Single Component
let Counter = {
    data() {
        return {
            count: 0
        };
    },
    computed: {
        doubleCount() {
            return this.count * 2;
        }
    },
    methods: {
        increment() {
            this.count++;
        }
    },
    template: `
            <div>
            <p>{{ count }}</p>
            <p>Double: {{ doubleCount }}</p>
            <button @click="increment">Increment</button>
            </div>
        `
}

let app = {
    components: {
        'vue-button': {
            template: `<button>Click</button>`,
        },
        'vue-text': {
            template: `<p><slot></p>`,
        },
        'counter': Counter
    },
};

Vue.createApp(app).mount('#app');