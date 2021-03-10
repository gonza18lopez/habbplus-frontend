<template>
	<div class="hp-alert" v-bind="$attrs">
		<div class="alert-content">
			<figure class="frank"></figure>

			<div class="alert-message">
				{{ message }}
			</div>
		</div>
	</div>
</template>

<style lang="scss">
.hp-alert {
	@extend .d-flex, .align-items-center, .justify-content-center;
	
	background-color: #f4f0f0;

	.alert-content {
		@extend .d-flex, .align-items-center, .justify-content-center, .flex-row;

		gap: 15px;

		.frank {
			@extend .m-0, .p-0;

			background: url('../assets/images/frank-alert.png') no-repeat;
			width: 33px;
			height: 44px;
		}

		.alert-message {
			@extend .bg-white, .position-relative, .d-flex, .justify-content-center, .align-items-center, .text-center, .p-2;

			border-radius: 7px;
			max-width: 60%;
			color: #bd5a5a;
			font-size: .75rem;
			line-height: 1.15;
			box-shadow: 0 0 4px rgba(black, .05);

			&::before {
				@extend .position-absolute;

				content: "";
				width: 0;
				height: 0;
				border-top: 7px solid white;
				border-left: 7px solid transparent;
				top: 7px;
				left: -7px;
			}
		}
	}
}
</style>

<script>
export default {
	props: {
		message: String
	}
}
</script>