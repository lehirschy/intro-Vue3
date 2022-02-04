const app = {
    data() {
        return{
            title:"Eden",
            counter: 0,
        };
    },
    methods: {
        add() {
            this.counter++;
        },
        rest() {
            this.counter--;
        },
    },
};

Vue.createApp(app).mount("#app");