export default Counter = {
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