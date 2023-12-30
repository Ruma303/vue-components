//% Importare i Componenti


import Button from './components/Button';
import Text from './components/Text';
import Counter from './components/Counter';
let app = {
    components: {
        'vue-button': Button,
        'vue-text': Text,
        'counter': Counter
    },
};
Vue.createApp(app).mount('#app');
