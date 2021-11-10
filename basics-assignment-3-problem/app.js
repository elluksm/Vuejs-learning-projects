const app = Vue.createApp({
    data() {
        return {
            value: 0
        }
    },
    methods: {
        add(val) {
            this.value+= val;
        }
    },
    computed: {
        result() {
            if (this.value < 37) {
                return "Not there yet";
            }
            if (this.value > 37) {
                return "Too much!";
            }
            return this.value;
        }
    },
    watch: {
        result(value) {
            setTimeout(() => this.value = 0, 5000);
        }
    }
  });
  
  app.mount('#assignment');
  