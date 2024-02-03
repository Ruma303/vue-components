import Button from './components/Button.js';
import Text from './components/Text.js';
import Counter from './components/Counter.js';
import errorCaptured from './components/errorCaptured.js'

let app = {
    components: {
        'vue-button': Button,
        'vue-text': Text,
        'counter': Counter,
        'error-captured': errorCaptured
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
    },
    errorCaptured: (err, app, info) => { // Completa
        console.log(err);
        console.log(app);
        console.log(info);
        return false;
    }
};
Vue.createApp(app).mount('#app');