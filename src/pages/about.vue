<template>
    <div>
        <h2>About</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni provident expedita sed rem ratione facere
            consequatur. Sapiente aspernatur voluptatibus voluptates sunt quis saepe libero expedita totam, illo ex,
            repudiandae blanditiis!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni provident expedita sed rem ratione facere
            consequatur. Sapiente aspernatur voluptatibus voluptates sunt quis saepe libero expedita totam, illo ex,
            repudiandae blanditiis!</p>

        <div>{{ data }}</div>
    </div>
</template>

<script setup>
const { data } = await useFetch('/api/currency/GBP')
</script>

<style scoped>
h2 {
    margin-bottom: 20px;
    font-size: 36px;
}

p {
    margin: 20px 0;
}
</style>