<template>
	<FeatureBox :variant="variant" nopadding>
		<template v-slot:title>
			<div class="arrow" @click="prev" :class="{ disabled: disabled.prev}">
				<fa :icon="['fas', 'angle-left']" />
			</div>

			<div class="title">
				{{ title }}
			</div>

			<div class="arrow" @click="next" :class="{ disabled: disabled.next}">
				<fa :icon="['fas', 'angle-right']" />
			</div>
		</template>

		<slot />
	</FeatureBox>
</template>

<style lang="scss">
.feature-box {
	.box-title {
		display: grid!important;
		grid-template-columns: 43px minmax(0, 1fr) 43px;

		.title {
			@extend .text-white, .text-center;
		}

		.arrow {
			@extend .d-flex, .align-items-center, .justify-content-center;

			cursor: pointer;
			height: 43px;

			&.disabled {
				opacity: .5;
				pointer-events: none;
			}

			svg {
				filter: drop-shadow(0 1px 0 rgba(black, .2));
			}

			&:hover {
				background: rgba(black, .1) linear-gradient(transparent, rgba(black, .05));
			}

			&:active {
				box-shadow: inset 0 0 6px 0 rgba(black, .3);

				svg {
					filter: none;
				}
			}
		}
	}
}
</style>

<script>
import FeatureBox from '@/components/FeatureBox'

export default {
	props: {
		variant: {
			type: String,
			default: 'blue'
		},

		title: String,

		prev: Function,
		next: Function,

		disabled: {
			type: Object,
			default() {
				return {
					prev: false,
					next: false
				}
			}
		}
	},

	components: {
		FeatureBox
	}
}
</script>