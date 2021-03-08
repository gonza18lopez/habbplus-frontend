<template>
	<SlideBox title="Last Badges" variant="green" :prev="prev" :next="next">
		<div class="last-badges">
			<router-link to="/" class="badge">
				<img src="http://images.habbo.com/c_images/album1584/ACH_EasterCreatures10.gif" data-bs-toggle="popover" ref="popover" data-bs-trigger="hover" title="Hatched 20 Fairytale Creatures" data-bs-content="Found 10 minutes ago">
			</router-link>

			<div class="badge">
				<img src="http://images.habbo.com/c_images/album1584/ACH_EasterCreatures10.gif" data-bs-toggle="popover" data-bs-trigger="hover"  ref="popover" title="Hatched 20 Fairytale Creatures" data-bs-content="Found 10 minutes ago">
			</div>

			<div class="badge">
				<img src="http://images.habbo.com/c_images/album1584/ACH_EasterCreatures10.gif" data-bs-toggle="popover" data-bs-trigger="hover"  ref="popover" title="Hatched 20 Fairytale Creatures" data-bs-content="Found 10 minutes ago">
			</div>

			<div class="badge">
				<img src="http://images.habbo.com/c_images/album1584/ACH_EasterCreatures10.gif" data-bs-toggle="popover" data-bs-trigger="hover"  ref="popover" title="Hatched 20 Fairytale Creatures" data-bs-content="Found 10 minutes ago">
			</div>

			<div class="badge">
				<img src="http://images.habbo.com/c_images/album1584/ACH_EasterCreatures10.gif" data-bs-toggle="popover" data-bs-trigger="hover"  ref="popover" title="Hatched 20 Fairytale Creatures" data-bs-content="Found 10 minutes ago">
			</div>

			<div class="badge">
				<img src="http://images.habbo.com/c_images/album1584/ACH_EasterCreatures10.gif" data-bs-toggle="popover" data-bs-trigger="hover"  ref="popover" title="Hatched 20 Fairytale Creatures" data-bs-content="Found 10 minutes ago">
			</div>

			<div class="badge">
				<img src="http://images.habbo.com/c_images/album1584/ACH_EasterCreatures10.gif" data-bs-toggle="popover" data-bs-trigger="hover"  ref="popover" title="Hatched 20 Fairytale Creatures" data-bs-content="Found 10 minutes ago">
			</div>

			<div class="badge">
				<img src="http://images.habbo.com/c_images/album1584/ACH_EasterCreatures10.gif" data-bs-toggle="popover" data-bs-trigger="hover"  ref="popover" title="Hatched 20 Fairytale Creatures" data-bs-content="Found 10 minutes ago">
			</div>

			<div class="badge">
				<img src="http://images.habbo.com/c_images/album1584/ACH_EasterCreatures10.gif" data-bs-toggle="popover" data-bs-trigger="hover"  ref="popover" title="Hatched 20 Fairytale Creatures" data-bs-content="Found 10 minutes ago">
			</div>

			<div class="badge">
				<img src="http://images.habbo.com/c_images/album1584/ACH_EasterCreatures10.gif" data-bs-toggle="popover" data-bs-trigger="hover"  ref="popover" title="Hatched 20 Fairytale Creatures" data-bs-content="Found 10 minutes ago">
			</div>

			<div class="badge">
				<img src="http://images.habbo.com/c_images/album1584/ACH_EasterCreatures10.gif" data-bs-toggle="popover" data-bs-trigger="hover"  ref="popover" title="Hatched 20 Fairytale Creatures" data-bs-content="Found 10 minutes ago">
			</div>

			<div class="badge">
				<img src="http://images.habbo.com/c_images/album1584/ACH_EasterCreatures10.gif" data-bs-toggle="popover" data-bs-trigger="hover"  ref="popover" title="Hatched 20 Fairytale Creatures" data-bs-content="Found 10 minutes ago">
			</div>

			<div class="badge">
				<img src="http://images.habbo.com/c_images/album1584/ACH_EasterCreatures10.gif" data-bs-toggle="popover" data-bs-trigger="hover"  ref="popover" title="Hatched 20 Fairytale Creatures" data-bs-content="Found 10 minutes ago">
			</div>

			<div class="badge">
				<img src="http://images.habbo.com/c_images/album1584/ACH_EasterCreatures10.gif" data-bs-toggle="popover" data-bs-trigger="hover"  ref="popover" title="Hatched 20 Fairytale Creatures" data-bs-content="Found 10 minutes ago">
			</div>

			<div class="badge">
				<img src="http://images.habbo.com/c_images/album1584/ACH_EasterCreatures10.gif" data-bs-toggle="popover" data-bs-trigger="hover"  ref="popover" title="Hatched 20 Fairytale Creatures" data-bs-content="Found 10 minutes ago">
			</div>

			<div class="badge">
				<img src="http://images.habbo.com/c_images/album1584/ACH_EasterCreatures10.gif" data-bs-toggle="popover" data-bs-trigger="hover"  ref="popover" title="Hatched 20 Fairytale Creatures" data-bs-content="Found 10 minutes ago">
			</div>
		</div>
	</SlideBox>
</template>

<style lang="scss" scoped>
.last-badges {
	display: grid;
	grid-template-columns: repeat(4, minmax(0, 1fr));
	grid-template-rows: repeat(4, 65px);
	gap: 5px;

	.badge {
		@extend .d-flex, .align-items-center, .justify-content-center;

		background: #e8eced;
		border-radius: 5px;
	}

	a.badge {
		background: #83d268;
	}
}
</style>

<script>
import SlideBox from '@/components/SlideBox'

import { Popover } from 'bootstrap'

export default {
	components: {
		SlideBox
	},

	mounted() {
		for( let e of this.$el.querySelectorAll('[data-bs-toggle="popover"]') )
			new Popover(e, {
				placement: 'top'
			})
	},
	
	methods: {
		prev() {
			//
		},

		next() {
			//
		}
	}
}
</script>