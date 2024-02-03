export default {
    created() {
        console.log('Il mixin counter.js è stato creato!');
    },
    data() {
        return {
            count: 0
        };
    },
    methods: {
        increment() {
            this.count++
        }
    }
};