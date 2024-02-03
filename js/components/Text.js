export default {
    props: {
        text: {
            type: String,
            required: true
        },
        emittedData: {
            type: String,
        }
    },
    template: `<p>{{ emittedData || text }}</p>`,
    beforeCreate() {
        console.log(this.$props);
    },
    watch: {
        emittedData(newVal, prevVal) {
            console.log(prevVal + ' -> ' + newVal);
        }
    }
}