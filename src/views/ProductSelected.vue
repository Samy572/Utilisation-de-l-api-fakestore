<template>
	<Navbar />
	<div class="container">
		<div class="container-product">
			<div class="product-image">
				<img :src="productSelected.image" alt="produits" />
			</div>
			<div class="container-description">
				<h2 class="product-title">{{ productSelected.title }}</h2>
				<p class="product-description">{{ productSelected.description }}</p>
				<div class="container-price">
					<span class="product-price">{{ Math.round(productSelected.price) * qtt }} €</span>
					<div class="container-btn">
						<label for="qtt">Quantité</label>
						<input v-model="qtt" type="number" id="qtt" min="1" max="20" />
					</div>
					<button class="add-product" title="ajouter au panier">Ajouter au panier</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { ref } from 'vue';
import Navbar from '../components/Navbar.vue';
const productSelected = ref('');
const route = useRoute();
const qtt = ref(1);

fetch(`https://fakestoreapi.com/products/${route.params.id}`)
	.then((response) => response.json())
	.then((data) => {
		productSelected.value = data;
	});
</script>

<style scoped lang="scss">
.container {
	width: 100%;
	max-height: 100vh;
	display: flex;
	justify-content: center;
	padding: 0 50px;
	
}
.container-product {
	padding: 5px 10px;
	margin-top: 150px;
	width: 750px;
	height: auto;
	background-color: #ffff;
	color: black;
	display: flex;
	box-shadow: rgba(255, 255, 255, 0.966) 0px 3px 8px;
}
.product-image {
	display: flex;
	align-self: center;
	justify-content: center;
	height: auto;
	width: 60%;
	img {
		max-width: 500px;
		height: 400px;
	}
}
.container-description {
	padding: 10px;
	width: 100%;
	height: auto;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	.product-title {
		letter-spacing: 6px;
		font-size: 1.7em;
	}
	.product-description {
		margin-bottom: 30px;
		font-size: 1.3em;
		text-transform: lowercase;
	}
	.container-price {
		margin-bottom: 20px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;

		.product-price {
			font-weight: 400;
		}
	}
	#qtt {
		padding: 0 5px;
		width: 50px;
		cursor: pointer;
		outline: none;
		margin-left: 5px;
	}

	.add-product {
		background-color: #14532d;

		border: none;
		right: 30px;
		color: white;
		padding: 7px;
		cursor: pointer;
		border-radius: 5px;
		transition: all 0.3s;
		&:hover {
			background-color: #0d7634;
		}
	}
}
</style>
