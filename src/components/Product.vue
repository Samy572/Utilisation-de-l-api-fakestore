<template>
	<div class="container-products">
		<RouterLink v-for="(product, id, index) in products" :key="id" :to="`Product/${product.id}`">
			<div class="products">
				<div class="products-items">
					<div class="product-image">
						<img :src="product.image" alt="produits" />
					</div>
					<h3>{{ product.title }}</h3>
					<p class="product-description">{{ product.description }}</p>
					<span class="product-price">{{ Math.round(product.price) }} €</span>
					<button class="product-selected" title="Ajouter au panier">Voir plus</button>
				</div>
			</div>
		</RouterLink>
	</div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { RouterLink } from 'vue-router';
let products = ref([]);

onMounted(() => {
	fetch('https://fakestoreapi.com/products')
		.then((response) => response.json())
		.then((data) => (products.value = data));
});
</script>

<style scoped lang="scss">
.container-products {
	padding: clamp(20px, 5vw, 50px) 20px 10px;
	display: grid;
	grid-gap: 10px;
	grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
	grid-auto-rows: 450px;
}

.products-items {
	position: relative;
	padding-top: 30px;
	padding: 10px;
	display: flex;
	flex-direction: column;
	border: solid 1px rgb(195, 177, 177);
	height: 430px;
	box-shadow: #d6e6253d 0px 3px 8px;
	cursor: pointer;

	.product-image {
		width: 100%;
		height: 200px;
		object-fit: cover;
		display: flex;
		justify-content: center;
		padding: 5px 0;

		img {
			z-index: 1;
			width: 240px;
			height: 160px;
			object-fit: cover;
		}
	}

	.product-description {
		margin: 20px 0;
		padding: 5px;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		text-transform: lowercase;
	}
	.product-price {
		position: absolute;
		bottom: 30px;
		font-weight: 700;
		padding: 5px;
	}
}
.product-selected {
	background-color: #14532d;
	position: absolute;
	bottom: 30px;
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
a {
	color: white;
	text-decoration: none;
}
</style>
