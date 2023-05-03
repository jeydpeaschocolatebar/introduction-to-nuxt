<template>
    <div>
        <h2>Product Details - {{ id }}</h2>

        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius repellendus impedit voluptate, maxime obcaecati
            modi at saepe veniam eos tempora error atque quam culpa quos vel, quidem illo! Obcaecati, consectetur!</p>
    </div>
</template>

<script setup>
const { id } = useRoute().params;

definePageMeta({
    layout: 'products'
})
</script>

<style scoped>
h2 {
    margin-bottom: 20px;
    font-size: 36px;
}
</style>