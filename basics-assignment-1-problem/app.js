const app = Vue.createApp({
    data() {
        return {
            name: "Elīna",
            age: 30,
            catPhotoUrl: ""
        }
    },
    methods: {
       getRandomNumber() {
           return Math.random();
       } 
    }

});

app.mount('#assignment');