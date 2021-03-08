<template>
	<div class="radio">
		<div class="player">
			<div class="action">
				<fa :icon="['fas', 'play']" />
			</div>

			<div class="volume">
				<div class="action">
					<fa :icon="['fas', 'volume-up']" />
				</div>

				<input type="range" name="volume" class="volume-range">
			</div>

			<a href="https://red.habbstars.org" target="_blank" class="player-text">ReD</a>
		</div>

		<div class="stats">
			<img class="figure" src="https://www.habbo.fr/habbo-imaging/avatarimage?user=ImPower-&direction=4&head_direction=4" alt="ImPower-">

			<div class="stat-label">
				<div class="stat-icon">
					<fa :icon="['fas', 'music']" />
				</div>

				<div class="stat-text">
					Skrillex - Make it Bun Dem
				</div>
			</div>

			<div class="stat-info">
				<div class="stat-label">
					<div class="stat-icon">
						<fa :icon="['fas', 'microphone']" />
					</div>

					<div class="stat-text">
						TheLastDark
					</div>
				</div>

				<div class="radio-links">
					<a href="javascript:void(0)" class="radio-link-label">
						<fa :icon="['fas', 'envelope']" /> Ask for a song
					</a>

					<span class="radio-link-label no-event">
						<fa :icon="['fas', 'headphones-alt']" /> 21
					</span>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.radio {
	display: grid;
	grid-template-rows: 45px auto;
	gap: 1px;

	.player {
		@extend .d-flex, .flex-nowrap, .text-white;

		background: #717bc9 linear-gradient(transparent, rgba(black, .05));
		padding: 11px 14px;
		font-size: .9rem;
		gap: 11px;

		svg {
			filter: drop-shadow(2px 2px 0 rgba(black, .2))
		}

		.action {
			@extend .d-flex, .align-items-center;

			padding-right: 11px;
			cursor: pointer;
			border-right: 1px solid rgba(black, .15);
			box-shadow: 1px 0 0 rgba(white, .15);
			line-height: 0;
		}

		.volume {
			@extend .d-flex, .align-items-center, .justify-content-between, .w-100;
			
			.action {
				border: none;
				box-shadow: none;
			}

			.volume-range {
				@extend .w-100;

				appearance: none;
				height: 1px;
				background: rgba(black, .4);
				box-shadow: 0 1px 0 rgba(white, .2);
				outline: none;

				&::-webkit-slider-thumb {
					appearance: none;
					background: #eab025;
					width: 10px;
					height: 16px;
					border-radius: 3px;
					box-shadow: inset 0 0 0 1px #eab025, inset 2px -2px 0 rgba(black, .1), inset -2px 2px 0 rgba(white, .2), 0 2px 0 1px rgba(black, .2);
				}
			}
		}
		
		.player-text {
			@extend .d-flex, .align-items-center, .justify-content-center, .text-white, .px-3;

			width: 75px;
			background: rgba(black, .2);
			border-radius: 2px;
			text-decoration: none;
			font-size: .7rem;
			text-shadow: 0 1px 0 rgba(black, .75);
			box-shadow: 0 1px 0 rgba(white, .2);
		}
	}

	.stats {
		@extend .position-relative;

		background: #b077d4 linear-gradient(transparent, rgba(black, .05));
		padding: 5px 5px 0;
		display: grid;
		grid-template-rows: 37px 70px;
		gap: 5px;
		overflow: hidden;

		.stat-label {
			@extend .text-white;

			background: rgba(black, .2);
			border-radius: 3px;
			box-shadow: 0 1px 0 rgba(white, .1);
			display: grid;
			grid-template-columns: 35px minmax(0, 1fr);
			text-shadow: 0 2px 0 rgba(black, .25);
			font-size: .8rem;
			padding: 5px 0;

			.stat-icon,
			.stat-text {
				@extend .d-flex, .align-items-center;
			}

			.stat-icon {
				@extend .justify-content-center;

				box-shadow: inset -1px 0 0 rgba(black, .2), 1px 0 0 rgba(white, .2);
				
				svg {
					filter: drop-shadow(2px 2px 0 rgba(black, .25));
				}
			}

			.stat-text {
				@extend .px-2;
			}
		}

		.stat-info {
			width: calc(100% - 74px);
			display: grid;
			grid-template-rows: 37px 25px;
			gap: 5px;
		}

		.figure {
			@extend .position-absolute;

			right: 5px;
			bottom: -25px;
			filter: drop-shadow(-1px 0 0 rgba(white, .5)) drop-shadow(4px 0 0 rgba(black, .2));
		}

		.radio-links {
			@extend .d-flex, .flex-row, .flex-nowrap;

			gap: 5px;

			.radio-link-label {
				@extend .px-2, .d-flex, .align-items-center;
				
				background: rgba(white, .35);
				border-radius: 3px;
				font-size: .75rem;
				color: #66447c;
				line-height: 1;
				gap: 5px;

				svg {
					@extend .text-white;

					filter: drop-shadow(-1px 0 0 #66447c)
							drop-shadow(1px 0 0 #66447c)
							drop-shadow(0 -1px 0 #66447c)
							drop-shadow(0 1px 0 #66447c);
				}

				&.no-event {
					pointer-events: none;
				}
			}

			a.radio-link-label {
				text-decoration: none;

				&:hover {
					@extend .bg-white;
				}

				&:active {
					box-shadow: inset 0 0 3px 1px rgba(black, .2);
				}
			}
		}
	}
}
</style>

<script>
export default {
	
}
</script>