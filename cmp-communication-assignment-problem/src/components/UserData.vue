<template>
  <form @submit.prevent="saveData">
    <div>
      <label>Username</label>
      <input type="text" v-model="newName" />
    </div>
    <div>
      <label>Age</label>
      <input type="number" v-model="newAge" />
    </div>
    <button>Update</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      newName: "",
      newAge: ""
    };
  },
  emits: ["update"],
  methods: {
    saveData() {
      this.$emit("update", this.newName, this.age);
    }
  }
};
</script>