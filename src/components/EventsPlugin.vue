<template>
	<SlideBox title="Today" :prev="prev" :next="next">
		<div class="events">
			<router-link
				:to="{ name: 'show ' + animation.category, params: { id: animation.target } }"
				class="event-item" v-for="animation in animations" v-bind:key="'animation-' + animation.id"
			>
				<div class="event-time">
					<span>{{ animation.startAt }}</span>
					<span>{{ animation.finishAt }}</span>
				</div>

				<div class="event-info">
					<span class="event-name">{{ animation.name }}</span>
					<span class="event-target">{{ capitalize(animation.category) }}</span>
				</div>
			</router-link>
		</div>
	</SlideBox>
</template>

<style lang="scss" scoped>
.events {
	display: grid;
	grid-auto-rows: 53px;
	gap: 3px;

	.event-item {
		display: grid;
		grid-template-columns: 53px minmax(0, 1fr);
		gap: 3px;
		text-decoration: none;

		.event-time {
			@extend .d-flex, .flex-column, .justify-content-center, .align-items-center;

			background: #ebebeb;
			width: 53px;
			height: 53px;
			font-size: .8rem;
			line-height: 1.2;
			color: rgba(black, .75);
		}

		.event-info {
			@extend .px-3, .py-2, .d-flex, .flex-column, .justify-content-center;

			background-color: #f3f3f3;
			line-height: 1.2;

			.event-name {
				color: #00a6d0;
				font-size: .9rem;
			}
			
			.event-target {
				color: #888787;
				font-size: .75rem;
				font-weight: 400;
			}
		}

		&:hover {
			.event-time {
				background-color: #e6e6e6;
			}

			.event-info {
				background-color: #f0f0f0;
			}
		}
	}
}
</style>

<script>
import { capitalize } from 'lodash'
import SlideBox from '@/components/SlideBox'

export default {
	components: {
		SlideBox,
	},

	data() {
		return {
			events: [],
			current: 'today'
		}
	},

	created() {
		this.load()
	},

	methods: {
		load() {
			window.axios.get('/api/animations')
				.then( ({ data }) => {
					this.events = data
				})
		},

		capitalize(string) {
			return capitalize(string)
		},

		prev() {
			console.log('prev')
		},

		next() {
			console.log('next')
		}
	},

	computed: {
		animations() {
			return this.events[ this.current ]
		}
	}
}
</script>