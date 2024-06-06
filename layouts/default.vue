<template>
	<div class="layout">
		<Header />
		<slot />
		<Footer />
	</div>
</template>

<script setup lang="ts">
function sum(a: number, b: number) {
	return a + b
}
sum('1', 1)
</script>

<style scoped></style>
