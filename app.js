    //* Definizione del componente globale
    const MyComponent = {
        template: `<div>Un semplice componente globale!</div>`
    };

    //* Creazione dell'applicazione Vue
    const App = Vue.createApp({});

    //* Registrazione del componente globale
    App.component('my-component', MyComponent);

    //* Montaggio dell'applicazione Vue sull'elemento del DOM
    App.mount('#app');

