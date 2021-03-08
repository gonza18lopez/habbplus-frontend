<template>
	<div class="user-area">
		<div class="user-area-body">
			<div class="user-actions">
				<div class="user-bubble-wrapper">
					<div class="user-bubble">
						{{ $t('header.user.bubble') }}
					</div>
				</div>

				<div class="user-buttons">
					<FlexButton to="register" variant="red">Housekeeping</FlexButton>
				</div>
			</div>

			<figure class="user-figure">
				<img src="https://www.habbo.fr/habbo-imaging/avatarimage?user=Titi-thib&action=wav&size=l&gesture=sml&direction=4&head_direction=3" alt="Titi-thib" class="user-figure-img">
			</figure>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.user-area {
	@extend .d-flex, .align-self-end;
	
	height: 141px;

	.user-area-body {
		display: grid;
		grid-template-columns: minmax(0, 1fr) 103px;
		gap: 15px;

		.user-actions {
			display: grid;
			grid-template-rows: repeat(2, 48px);
			gap: 8px;
			padding-top: 17px;

			.user-bubble-wrapper {
				@extend .d-flex, .justify-content-end;

				.user-bubble {
					@extend .d-flex, .align-items-center, .position-relative, .px-3;

					background: rgba(white, .75);
					border-radius: 7px;
					height: 37px;
					font-size: .75rem;
					color: rgba(black, .6);
					text-shadow: 0 1px 0 rgba(white, .7);
					font-weight: 500;
					box-shadow: 5px 5px 0 rgba(black, .05);

					&::after, &::before {
						@extend .position-absolute;

						content: "";
						width: 0;
						height: 0;
					}

					&::after {
						border-right: 7px solid rgba(white, .75);
						border-bottom: 7px solid transparent;
						bottom: -7px;
						right: 11px;
					}

					&::before {
						border-right: 7px solid rgba(black, .05);
						border-bottom: 7px solid transparent;
						bottom: -12px;
						right: 7px;
					}
				}
			}

			.user-buttons {
				@extend .d-flex, .justify-content-end;

				gap: 9px;
			}
		}

		.user-figure {
			@extend .m-0, .p-0;

			height: $header-body-height;
			overflow: hidden;

			.user-figure-img {
				margin: -1px 0 0 -21px;
			}
		}
	}
}
</style>

<script>
import FlexButton from '@/components/FlexButton'

export default {
	components: {
		FlexButton
	}
}
</script>