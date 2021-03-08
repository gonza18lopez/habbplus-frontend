<template>
	<div class="error-page-wrapper">
		<a href="" class="close" @click.prevent="$emit('clear')">
			<fa :icon="['fas', 'times']" />
		</a>

		<div class="container">
			<div class="error-page">
				<router-link :to="{ name: 'Home' }" class="error-page-icon" @click.prevent="$emit('clear')"></router-link>
			
				<div class="error-page-message">
					<span class="title">{{ title }}</span>

					<p class="description">{{ message }}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
.error-page-wrapper {
	@extend .position-fixed, .d-flex, .justify-content-center, .align-items-center;

	background: #00c2ea linear-gradient(transparent, rgba(black, .15));
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	z-index: 99999;

	.close {
		@extend .position-absolute;

		font-size: 1.5rem;
		color: #00586a;
		font-weight: 600;
		text-decoration: none;
		right: 1em;
		top: .5em;

		svg {
			filter: drop-shadow(0 2px 0 rgba(white, .45));
		}
	}

	.error-page {
		display: grid;
		grid-template-columns: 389px minmax(0, 1fr);
		gap: 3rem;

		.error-page-icon {
			@extend .d-block;

			background: url('../assets/images/error-icon.png') no-repeat;
			width: 389px;
			height: 306px;
		}

		.error-page-message {
			@extend .d-flex, .justify-content-center, .flex-column;

			font-family: 'Nunito', sans-serif;
			line-height: 1.2;

			.title {
				font-size: 2rem;
				color: #00586a;
				text-shadow: 0 2px 0 rgba(white, .45);
				font-weight: 600;
			}

			.description {
				@extend .text-white;
				
				text-shadow: 0 2px 0 rgba(black, .12);
				font-weight: 400;
				font-size: 1rem;
			}
		}
	}
}
</style>

<script>
export default {
	props: {
		title: String,
		message: String
	},

	emits: [ 'clear' ]
}
</script>