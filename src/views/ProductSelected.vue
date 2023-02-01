<template>
	<Navbar />
	<h2>{{ productSelected.title }}</h2>
</template>

<script setup>
import { useRoute } from 'vue-router';
import {  ref } from 'vue';
import Navbar from '../components/Navbar.vue';
const route = useRoute();
const productSelected = ref();

	 fetch(`https://fakestoreapi.com/products/${route.params.id}`)
		.then((response) => response.json())
		.then((data) => {
			productSelected.value = data
		});


</script>

<style scoped lang="scss"></style>
 