<template>
	<div class="foot">
		<footer>
			<p>Tous droits reservés © Moda Avenue 2023</p>
		</footer>
	</div>
</template>

<script setup></script>

<style lang="scss">
.foot {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 150px;
	color: white;
	background: rgb(0, 0, 0);
	animation: loading 3s ease;
}

@keyframes loading {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}
</style>
