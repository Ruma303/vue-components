export default {
    created() {
        console.log('Il mixin myMixin è stato creato!');
    },
    data() {
        return {
            mixinData: 'Codice dal mixin!'
        };
    },
    computed: {
        capitalized() {
            return this.mixinData.toUpperCase();
        }
    },
    methods: {
        mixinMethod() {
            console.log('Questo metodo viene dal mixin!');
        }
    }
};