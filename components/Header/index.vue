<template>
	<header class="header bg-cyan-400 shadow-2xl p-4">
		<div class="container">
			<nav>
				<ul class="header__nav-list">
					<li>
						<NuxtLink to="/" class="header__nav-link">Главная</NuxtLink>
					</li>
					<li>
						<NuxtLink to="/products" class="header__nav-link">Товары</NuxtLink>
					</li>
					<li>
						<NuxtLink to="/about" class="header__nav-link">О нас</NuxtLink>
					</li>
				</ul>
			</nav>
		</div>
	</header>
</template>

<script setup lang="ts"></script>

<style scoped lang="postcss">
.header {
	&__nav-list {
		@apply flex items-center gap-x-4;
	}
	&__nav-link {
		@apply block
			bg-emerald-500
			rounded-2xl
			px-4
			py-2
			hover:bg-transparent
			border
			border-emerald-500
			transition
			duration-200
			ease-in-out;
	}
}
</style>
