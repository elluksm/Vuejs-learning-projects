const app = Vue.createApp({
    data() {
        return {
            firstOuput: "",
            secondOutput: ""
        }
    },
    methods: {
        showAlert() {
            alert("Hello!");
        },
        getFirstOutput(event) {
            this.firstOuput = event.target.value;
        },
        getSecondOutput(event) {
            this.secondOutput = event.target.value;
        }
    }
  });
  
  app.mount('#assignment');
  