<template>
    <section>
        <h2>{{ userName }}</h2>
        <h3>{{ age }} Years</h3>   
    </section>
</template>

<script>
export default {
    props: {
        userName: String,
        age: Number
    }
}
</script>