<template>
	<div class="feature-box" :class="{ onlycontent, nopadding }">
		<div class="box-title" :class="variant" v-if="!onlycontent">
			<slot name="title">
				{{ title }}
			</slot>
		</div>

		<div class="box-content">
			<slot />
		</div>
	</div>
</template>

<style lang="scss">
.feature-box {
	display: grid;
	grid-template-rows: 43px minmax(0, 1fr);
	gap: 1px;

	&.onlycontent {
		grid-template-rows: minmax(0, 1fr);
		gap: 0;
	}

	.box-title {
		@extend .d-flex, .align-items-center, .text-white;

		background: linear-gradient(transparent, rgba(black, .05));
		height: 43px;
		font-size: .95rem;
		text-shadow: 0 1px 0 rgba(black, .2);

		&.red { background-color: #d27e68; }
		&.blue { background-color: #68aad2; }
		&.green { background-color: #83d268; }
	}
	
	.box-content {
		background: #d9e0e1;
		padding: 5px;
	}

	&:not(.nopadding) {
		.box-title {
			@extend .px-3;
		}
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

		title: String,

		onlycontent: {
			type: Boolean,
			default: false
		},

		nopadding: {
			type: Boolean,
			default: false
		}
	}
}
</script>