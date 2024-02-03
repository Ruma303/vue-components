import Text from './components/Text.js';
import myMixin from './mixins/myMixin.js';
import counter from './mixins/counter.js';

let app = {
    mixins: [myMixin, counter],
    template: `
    <div>{{ mixinData }}</div>
    {{ count }}
    <button @click="increment()">Incrementa da App.vue</button>
    <vue-text />
    `,
    data() {
        return {
            mixinData: 'Rome',
        }
    },
    components: {
        'vue-text': Text,
    },
};
Vue.createApp(app).mount('#app');