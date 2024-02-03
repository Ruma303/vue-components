export default {
    //, Inline $emit
    /* template: `<button @click="$emit('my-event', this.someData)">
        Emetti evento</button>`,
    data() {
        return {
            someData: 'Dati da parte del componente figlio'
        }
    }, */

    //, Function $emit
    template: `<button @click="functionEmit">Emetti evento</button>`,
    methods: {
        functionEmit () {
            return this.$emit('my-event', this.someData);
        }
    },
    data() {
        return {
            someData: 'Dati da parte del componente figlio'
        }
    },

    //, $attr
    /* template: `<button :$attrs>Invia $attrs</button>`, */
}