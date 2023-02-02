<template>
	<div class="containerInput">
		<input v-model="input" id="search" name="search" type="text" placeholder="Rechercher" />
		<label for="search"><img class="search" src="../assets/images/search.svg" alt="search" /></label>
	</div>
</template>

<script setup>
import { ref, watch } from 'vue';
const input = ref('');
let products = ref([]);

fetch('https://fakestoreapi.com/products')
	.then((response) => response.json())
	.then((data) => (products.value = data));
console.log(products);

watch(input, (newValue) => {
	let regex = RegExp(newValue);
	let test = products.value.filter((el) => regex.test(el.title));
	console.log(test);
});
</script>

<style scoped lang="scss">
.containerInput {
	padding: 0 20px;
	position: relative;
	display: flex;
	height: 80px;
	align-items: center;

	input {
		display: flex;
		align-items: center;

		padding: 0px 5px;
		width: 450px;
		height: 20px;
		font-size: 18px;

		border-radius: 5px;
		padding: 7px 2px;
		outline: white;
	}
	.search {
		margin-left: 15px;
		width: 40px;
		height: 25px;
		cursor: pointer;
	}
}
</style>
