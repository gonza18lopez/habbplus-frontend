<template>
	<header>
		<div class="header-container">
			<!-- header body -->
			<div class="header-body">
				<!-- logo -->
				<div class="logo-wrapper">
					<router-link to="/" class="logo"></router-link>
				</div>

				<!-- header right side -->
				<div class="header-right">
					<slot name="user-area"></slot>
				</div>
			</div>

			<div class="nav-wrapper">
				<!-- navigation -->
				<slot name="navigation"></slot>
			</div>
		</div>
	</header>
</template>

<style lang="scss" scoped>
header {
	@extend .position-relative;
	
	background-color: $header-bg;
	z-index: 2;

	&::before {
		@extend .position-absolute, .container;
		
		background: $header-image left bottom no-repeat;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		content: "";
	}

	&::after {
		@extend .position-absolute;

		background: $header-clouds bottom repeat-x;
		content: "";
		height: $header-clouds-height;
		bottom: 0;
		left: 0;
		right: 0;
		animation: clouds $clouds-speed linear infinite;
	}

	.header-container {
		@extend .position-relative, .container;

		display: grid;
		z-index: 1;

		.header-body {
			display: grid;

			@include media-breakpoint-up(lg) {
				grid-template-columns: 305px minmax(0, 1fr);
				height: $header-body-height;
			}

			@include media-breakpoint-down(md) {
				grid-template-rows: repeat(2, minmax(0, 1fr));
			}

			.logo-wrapper {
				@extend .d-flex, .align-items-center, .justify-content-center;

				a.logo {					
					background: url('../assets/images/logo.png') no-repeat;
					width: 249px;
					height: 71px;
				}
			}

			.header-right {
				@extend .d-flex, .justify-content-end;
			}
		}

		@include media-breakpoint-up(lg) {
			grid-template-rows: $header-body-height $nav-height;

			.nav-wrapper {
				height: $nav-height;
			}
		}

		@include media-breakpoint-down(md) {
			grid-auto-rows: minmax(0, 1fr);
			overflow: hidden;

			.nav-wrapper {
				position: absolute;
				top: 0;
				left: 0;
				right: 0;
			}
		}
	}
}

@include media-breakpoint-down(md) {
	header {
		
		.header-container {
			padding: 56px 0 0 0!important;
		}

		&::before {
			background: $header-image left top no-repeat;
		}
	}
}

@include media-breakpoint-up(lg) {
	header {
		overflow: hidden;
	}
}
</style>

<script>
export default {
}
</script>