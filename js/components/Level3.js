export default {
    template: `
        <div>
            <h3>Livello 3</h3>
            <p v-if="providedMessage1">{{ providedMessage1 }}</p>
            <p v-if="providedMessage2">{{ providedMessage2 }}</p>
        </div>
    `,
    inject: ['providedMessage1', 'providedMessage2'],
};