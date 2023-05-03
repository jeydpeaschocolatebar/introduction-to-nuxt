<template>
    <div>
        <header class="shadow-sm bg-white">
            <nav class="container mx-aut p-4">
                <NuxtLink to="/" class="font-bold ">Tanglad Merch</NuxtLink>
            </nav>
        </header>

        <!-- output the page content -->
        <div class="container mx-auto p-4">
            <slot />
        </div>

        <footer class="container mx-auto p-4 flex justify-between border-t-2">
            <ul class="flex gap-4">
                <li>
                    <NuxtLink to="/">Home</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/about">About</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/products">Products</NuxtLink>
                </li>
            </ul>
        </footer>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'products'
})
</script>

<style scoped>
.router-link-exact-active {
    color: #12b488
}
</style>
