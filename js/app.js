import Button from './components/Button.js';
import Text from './components/Text.js';
import Counter from './components/Counter.js';

let app = {
    components: {
        'vue-button': Button,
        'vue-text': Text,
        'counter': Counter,
    },
    methods: {
        eventEmitted(data) {
            console.log(data);
            this.emittedData = data;
        }
    },
    data() {
        return {
            emittedData: null,
        }
    }
};
Vue.createApp(app).mount('#app');

