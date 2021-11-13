const app = Vue.createApp({
    data() {
        return {
            isVisible: true,
            firstInput: "",
            secondInput: ""
        }
    },
    computed: {
        styleClass() {
            return this.firstInput;
        }
    },
    methods: {
        toggleVisibility() {
            this.isVisible = !this.isVisible;
        }
    }
  });
  
  app.mount('#assignment');
  