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
    template: `<p>{{ emittedData || text }}</p>`
}

