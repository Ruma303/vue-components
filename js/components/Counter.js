export default {
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
            this.$emit('count', this.count);
        }
    },
    template: `<button @click="increment">Increment</button>`
}