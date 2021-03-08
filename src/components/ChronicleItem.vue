<template>
	<a v-bind="$attrs" class="chronicle" :class="{ active }">
		<figure class="chronicle-icon">
			<img :src="icon">
		</figure>

		<div class="chronicle-info">
			<span class="chronicle-name">{{ name }}</span>
			<span class="chronicle-text">{{ text }}</span>
		</div>
	</a>
</template>

<style lang="scss" scoped>
.chronicle {
	display: grid;
	grid-template-columns: 42px minmax(0, 1fr);
	grid-template-rows: 42px;
	gap: 5px;
	text-decoration: none;

	.chronicle-icon {
		@extend .p-0, .m-0;

		width: 42px;
		height: 42px;
	}

	.chronicle-info {
		@extend .px-2, .d-flex, .flex-column, .justify-content-center;

		background: #f0f3f3;
		border-radius: 5px;
		font-size: .85rem;
		line-height: 1.1;
		transition: background .3s;

		.chronicle-name {
			color: #c1745f;
		}

		.chronicle-text {
			color: #767676;
			font-size: .75rem;
		}
	}

	&:hover,
	&.active {
		.chronicle-info {
			@extend .bg-white;
		}
	}
}
</style>

<script>
export default {
	props: {
		name: String,
		text: String,
		icon: String,
		active: Boolean
	}
}
</script>