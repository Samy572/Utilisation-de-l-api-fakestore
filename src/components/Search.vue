<template>
	<div class="containerInput">
		<input v-model="input" id="search" name="search" type="text" placeholder="Rechercher" />
		<div v-for="(product, index) in searchProduct" :key="index" class="containerSearch">
			<RouterLink :to="`Product/${product.id}`">
				<div class="wrapperImg">
					<img :src="product.image" :alt="product.title"/>
				</div>
				<h3>{{ product.title }}</h3>
			</RouterLink>
		</div>
	</div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { RouterLink } from 'vue-router';
const input = ref('');
let products = ref([]);
let searchProduct = ref([]);

fetch('https://fakestoreapi.com/products')
	.then((response) => response.json())
	.then((data) => (products.value = data));
console.log(products);

watch(input, (newValue) => {
	let regex = RegExp(newValue.toLowerCase());
	let newSearchProduct = products.value.filter((el) => regex.test(el.title.toLowerCase()));
	searchProduct = newSearchProduct;
	if (searchProduct.value === 0 || searchProduct.value >= 20) {
		return (searchProduct.value = []);
	} else return searchProduct.value;
});
function redirect(productId) {
	router.push(`/home`);
}
</script>

<style scoped lang="scss">
.containerInput {
	padding: 0 20px;
	display: flex;
	height: 80px;
	align-items: center;
	flex-direction: column;

	input {
		display: flex;
		align-self: flex-start;
		padding: 0px 5px;
		width: 450px;
		height: 20px;
		font-size: 18px;
		border-radius: 5px;
		padding: 7px 2px;
		outline: white;
	}
}

.containerSearch {
	padding-left: 10px;
	display: flex;
	align-self: flex-start;
	cursor: pointer;
	border-bottom: 1px solid #5d5959;
	background-color: rgb(240, 236, 236);
	display: flex;
	align-items: center;
	height: 100px;
	font-size: 12px;
	width: 445px;
	z-index: 2;
	&:hover {
	background: #9c9696;
}
}

h3 {
	color: black;
	padding-left: 10px;
	overflow: hidden;
	text-transform: ellipsis;
}
a {
	text-decoration: none;
	display: flex;
	align-self: center;
}

.wrapperImg {
	padding: 3px;
	width: 50px;
	height: 50px;
	display: flex;

	img {
		width: 100%;
		height: auto;
	}
}
</style>
