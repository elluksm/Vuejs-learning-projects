<template>
  <section>
    <active-user v-bind="userData"></active-user>
    <user-data @update="updateData"></user-data>
  </section>
</template>

<script>
export default {
  data() {
    return {
      userData: {
        userName: "Someone",
        age: 30
      }
    };
  },
  methods: {
    updateData(name, age) {
      this.userData = {
        userName: name,
        age: +age
      };
    }
  }
};
</script>