import Level1 from './components/Level1.js';
import Level2 from './components/Level2.js';
import Level3 from './components/Level3.js';

let app = {
    components: {
        'level1': Level1,
        'level2': Level2,
        'level3': Level3,
    }
};
Vue.createApp(app).mount('#app');