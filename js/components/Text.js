import myMixin from '../mixins/myMixin.js';
import count from '../mixins/counter.js';

export default {
    mixins: [myMixin, count],
    template: `<p>{{ mixinData }}</p>
    <p>{{ capitalized.toLowerCase() }}</p>
    {{ count }}
    <button @click="increment()">Incrementa da Text.vue</button>`
}