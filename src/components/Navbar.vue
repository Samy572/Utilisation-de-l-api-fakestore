<template>
	<div>
		<div id="navbar">
			<div class="containerh1">
				<h1><RouterLink to="/">Moda Avenue</RouterLink></h1>
			</div>
			<ul>
				<li><RouterLink class="navigate" to="/">Home</RouterLink></li>
				<li><RouterLink class="navigate" to="/Shopping">Panier</RouterLink></li>
			</ul>
		</div>
	</div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>
<style scoped lang="scss">
#navbar {
	display: flex;
	flex-wrap: wrap;
	height: 150px;
	width: 100%;
	justify-content: space-between;
	align-items: center;
	color: #ffff;
}

h1 {
	letter-spacing: 10px;
	margin-left: 30px;
	a {
		text-decoration: none;
	}
}
.containerH1 {
	display: flex;
	justify-content: flex-start;
	min-width: 120px;
}

ul {
	width: 200px;
	margin-top: 10px;
	list-style-type: none;
	display: flex;

	justify-content: space-between;
}
a {
	padding: 5px;
	text-decoration: none;
	color: #ffff;
	font-size: 1.1em;
	transition: all 0.3s ease;
}
a:nth-child(1) {
	margin: 0 20px;
}
@media (hover: hover) {
	a:hover {
		background-color: rgba(22, 163, 74, 0.5);
	}
}
</style>
