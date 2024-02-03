export default {
    template: `
            <div>
                <h1>Livello 2</h1>
                <slot></slot>
            </div>`,
    provide() {
        return {
            providedMessage2: 'Hello from Level2!'
        };
    }
}