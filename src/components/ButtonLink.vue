<template>
	<a v-bind="$attrs" class="button-link" :class="{ active }" :disabled="active">
		<slot />
	</a>
</template>

<style lang="scss" scoped>
.button-link {
	@extend .d-flex, .align-items-center;

	background: #d4d4d4 linear-gradient(transparent, rgba(black, .05));
	height: 40px;
	border-radius: 5px;
	box-shadow: inset 0 2px 0 rgba(white, .2), inset 0 4px 6px rgba(black, .05);
	text-decoration: none;
	font-size: .8rem;
	color: rgba(black, .6)!important;
	text-shadow: 0 1px 0 rgba(white, .4);
	padding: 0 .8rem;

	&:hover {
		background-color: #c9c9c9;
	}

	&:active {
		box-shadow: inset 0 0 10px rgba(black, .2);
		text-shadow: none;
	}

	&.active {
		background: #d8d8d8;
		box-shadow: inset 0 0 3px 2px rgba(black, .05);
		text-shadow: none;
	}
}
</style>

<script>
export default {
	props: {
		active: {
			type: Boolean,
			default: false
		}
	}
}
</script>