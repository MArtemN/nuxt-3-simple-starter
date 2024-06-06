<template>
	<footer class="footer">
		<div class="container">
			<nav>
				<ul class="footer__nav-list">
					<li>
						<NuxtLink to="/" class="footer__nav-link">Главная</NuxtLink>
					</li>
					<li>
						<NuxtLink to="/products" class="footer__nav-link">Товары</NuxtLink>
					</li>
					<li>
						<NuxtLink to="/about" class="footer__nav-link">О нас</NuxtLink>
					</li>
				</ul>
			</nav>
		</div>
	</footer>
</template>

<script setup lang="ts"></script>

<style scoped lang="postcss">
.footer {
	@apply bg-cyan-400 shadow-2xl p-4 w-full;

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
