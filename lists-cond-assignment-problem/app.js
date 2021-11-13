const app = Vue.createApp({
    data() {
        return {
            tasks: [],
            enteredTask: "",
            tasksVisible: true
        }
    },
    methods: {
        addTask() {
            this.tasks.push(this.enteredTask);
        },
        toggleTaskVisibility() {
            this.tasksVisible = !this.tasksVisible;
        }
    }
  });
  
  app.mount('#assignment');
  