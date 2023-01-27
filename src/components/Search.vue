<template>
 <div class="containerInput">
				<input @input ="search" v-model="input" id="search" name="search" type="text" placeholder="Rechercher" />
        <label for="search"><img  class="search" src="../assets/images/search.svg" alt="search" ></label>
			</div>

</template>

<script setup>
import { ref } from 'vue';
const input = ref('');
function search(){
console.log(products.value);
}
</script>

<style scoped lang="scss">
.containerInput{
  padding: 0 20px;
  position: relative;
  display: flex;
  height: 80px;
  align-items: center;
 
  input{
    display: flex;
    align-items: center;
    
    padding: 0px 5px;
    width:450px;
    height:20px;
    font-size: 18px;
    
    
    border-radius: 5px;
    padding: 7px 2px;
    outline: white;
  }
  .search{
    margin-left: 15px;
    width:40px;
    height:25px;
    cursor: pointer;
  }
}


</style>