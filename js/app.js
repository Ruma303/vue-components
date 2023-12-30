//% Importare i Componenti
import Text from './components/Text.js';
import Counter from './components/Counter.js';

let app = {
    components: {
        'vue-text': Text,
        'counter': Counter
    },
};
Vue.createApp(app).mount('#app');

