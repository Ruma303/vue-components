export default {
    template: `<button @click="throwError">Lancia errore</button>`,
    beforeCreate() {
        throw new Error('Error');
    },
    props: {
        error: {
            type: [String, Boolean, Array],
            validator(val) {
                console.log('validator: ', val);
                return true;
            }
        }
    },
}