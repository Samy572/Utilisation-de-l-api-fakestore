<template>
  <div class="container-products">
    <div class="products" v-for="(product, index) in products" :key="index">
      <div class="products-items">
        <div class="product-image">
          <img :src="product.image" alt="produits" />
        </div>
        <h3>{{ product.title }}</h3>
        <p class="product-description">{{ product.description }}</p>
        <span class="product-price">{{ product.price }}€</span>
        <button class="product-selected" title="Ajouter au panier">Ajouter</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
const products = ref([]);

onMounted(() => {
  fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((data) => (products.value = data));
  console.log(products);
});
</script>

<style scoped lang="scss">
.container-products {
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
      width: 240px;
      height: 160px;
      object-fit: cover;
      transition: transform 0.3s;
       &:hover {
        transform: scale(1.1);
      }
    }
  }

  .product-description {
    padding: 5px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    text-transform: lowercase;
  }
  .product-price {
    font-weight: 700;
    padding: 5px;
  }
}
.product-selected{
  background-color:#16a34a ;
  position: absolute;
  bottom: 30px;
  right: 30px;
  color:white;
  padding: 7px;
  cursor: pointer;
  border-radius: 5px;
}
</style>
