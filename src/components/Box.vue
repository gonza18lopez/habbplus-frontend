<template>
	<div class="box" :class="{ simple }">
		<template v-if="!simple">
			<div class="box-title" :class="variant" v-if="$attrs.to == undefined">
				<slot name="title">{{ title }}</slot>
			</div>

			<router-link :to="$attrs.to" class="box-title" :class="variant" v-else>			
				<slot name="title">{{ title }}</slot>
			</router-link>
		</template>

		<div class="box-content">
			<slot />
		</div>
	</div>
</template>

<style lang="scss">
.box {
	@extend .bg-white;
	
	border-radius: 5px;
	padding: 5px;
	display: grid;
	gap: 5px;

	&:not(.simple) {
		grid-template-rows: 46px minmax(0, 1fr);
	}

	&:has(.simple) {
		grid-auto-rows: auto;
	}

	.box-title {
		@extend .d-flex, .align-items-center, .px-3, .text-white;

		background: linear-gradient(transparent, rgba(black, .1));
		border-radius: 3px;
		text-shadow: 0 2px 0 rgba(black, .15);
		text-decoration: none;
		font-size: 1rem;
		gap: 5px;

		&.red {
			background-color: #e66156;
		}

		&.green {
			background-color: #62d784;
		}

		&.blue {
			background-color: #68aad2;
		}
	}

	.box-content {
		color: #272727;
		font-size: .9rem;
	}
}
</style>

<script>
export default {
	props: {
		variant: {
			type: String,
			default: 'red'
		},

		simple: {
			type: Boolean,
			default: false
		},

		title: String,
	}
}
</script>