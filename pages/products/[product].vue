<template>
	<div>Страница товара {{ route.params.product }}</div>
</template>

<script setup lang="ts">
const route = useRoute()
</script>

<style scoped></style>
