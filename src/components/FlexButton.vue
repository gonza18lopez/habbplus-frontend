<template>
	<button class="flex-button" :class="variant" v-bind="$attrs" v-if="$attrs.to == undefined">
		<slot />
	</button>

	<router-link class="flex-button" :class="variant" v-bind="$attrs" v-else>
		<slot />
	</router-link>
</template>

<style lang="scss" scoped>
.flex-button {
	@extend .d-flex, .align-items-center, .text-white, .px-3;

	background-image: linear-gradient(transparent, rgba(black, .15));
	height: 43px;
	appearance: none;
	border-radius: 5px;
	border: 0;
	box-shadow: 5px 5px 0 rgba(black, .05), inset 0 -4px 0 rgba(black, .05);
	font-size: .9rem;
	text-decoration: none;
	text-shadow: 0 2px 0 rgba(black, .2);
	outline: none !important;

	&.blue {
		background-color: #04a3cb;

		&:hover {
			background-color: #00b5e2;
		}
	}

	&.red {
		background-color: #c25254;
		box-shadow: 5px 5px 0 rgba(black, .05), inset 0 -4px 0 rgba(black, .05), inset 0 2px 0 rgba(white, .2);

		&:hover {
			background-color: #e04f51;
		}
	}

	&:active {
		box-shadow: 3px 3px 0 rgba(black, .05), inset 0 0 10px rgba(black, .2);
		text-shadow: 0 -1px 0 rgba(black, .1);
		transform: translateY(2px);
	}
}
</style>

<script>
export default {
	props: {
		variant: {
			type: String,
			default: 'blue'
		}
	}
}
</script>