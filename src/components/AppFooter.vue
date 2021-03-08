<template>
	<footer class="hp-footer">
		<div class="footer-wrapper container">
			<div class="disclaimer">
				<router-link to="" class="footer-logo"></router-link>

				<span class="disclaimer-text">
					Habbplus version 9.1 © 2011 - {{ (new Date()).getFullYear() }}. HabbPlus is not affiliated with, endorsed, sponsored, or specifically approved by Sulake Corporation Oy or its Affiliates. HabbPlus may use the trademarks and other intellectual property of Habbo, which is permitted under Habbo Fan Site Policy.
				</span>
			</div>

			<div class="social-links">
				<a href="http://" target="_blank" rel="noopener noreferrer" class="social-icon">
					<fa :icon="['fab', 'facebook']" />
				</a>

				<a href="http://" target="_blank" rel="noopener noreferrer" class="social-icon">
					<fa :icon="['fab', 'twitter']" />
				</a>
			</div>
		</div>
	</footer>
</template>

<style lang="scss" scoped>
.hp-footer {
	@extend .position-relative;

	background-color: #05bfee;
	margin-top: -41px;
	box-shadow: inset 0 3px 3px rgba(black, .1);
	z-index: 0;

	&::after {
		@extend .position-absolute;

		background: $header-clouds bottom repeat-x;
		content: "";
		height: $header-clouds-height;
		top: 0;
		left: 0;
		right: 0;
		animation: clouds $clouds-speed linear infinite;
		transform: scaleY(-1);
	}

	.footer-wrapper {
		display: grid;
		gap: 1em;

		.disclaimer {
			@extend .d-flex, .align-items-center;

			gap: 15px;

			.footer-logo {
				background: url('../assets/images/HP.png') no-repeat;
				width: 46px;
				height: 35px;
			}

			span.disclaimer-text {
				@extend .text-white, .d-flex, .align-items-center;
				
				width: calc(100% - 61px);
				height: 100%;
				font-size: .8rem;
				line-height: 1.2;
				text-shadow: 0 -1px 0 rgba(black, .1);
			}
		}

		.social-links {
			@extend .d-flex;

			gap: 15px;

			.social-icon {
				@extend .text-white;

				text-decoration: none;
				font-size: 2rem;
				line-height: 1;
			}
		}
	}

	@include media-breakpoint-up(lg) {
		height: 200px;

		.footer-wrapper {
			padding-top: 130px;
			grid-template-columns: minmax(0, 1fr) minmax(0, 30%);

			.social-links {
				justify-content: flex-end;
			}
		}
	}

	@include media-breakpoint-down(lg) {
		.footer-wrapper {
			padding: 130px 1rem 50px;
			grid-template-rows: repeat(2, minmax(0, 1fr));

			.social-links {
				justify-content: center;
			}
		}
	}
}
</style>

<script>
export default {
}
</script>