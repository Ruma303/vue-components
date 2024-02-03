export default {
    template: `
        <div>
            <h1>Livello 1</h1>
            <slot></slot>
        </div>
    `,
    provide() {
        return {
            providedMessage1: 'Hello from Level1!'
        };
    },
};