const app = Vue.createApp({
    data() {
        return {
            boxASelected: false
        }
    },
    methods: {
        selectBox() {
            this.boxASelected = !this.boxASelected;
        }
    }
  });
  
  app.mount('#styling');
  