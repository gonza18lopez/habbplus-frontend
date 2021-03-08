<template>
	<AppHeader>
		<template v-slot:user-area>
			<UserArea />
		</template>

		<template v-slot:navigation>
			<AppNav />
		</template>
	</AppHeader>

	<main class="container">
		<div class="wrapper">
			<AppCarousel />
			
			<div class="layout-grid">
				<div class="left-column">
					<router-view />
				</div>

				<div class="right-column">
					<RadioPlayer />
					<EventsPlugin />
					<LastBadges />
				</div>
			</div>
		</div>
	</main>

	<AppFooter></AppFooter>

	<ErrorPage v-if="pageErrorData.show" :title="pageErrorData.title" :message="pageErrorData.message" @clear="clearPageErrorData" />
</template>

<style lang="scss">
@include media-breakpoint-down(md) {
	main.container {
		padding: 0;
	}

	.wrapper {
		border-radius: 0!important;
	}
}

.wrapper {
	@extend .position-relative;

	background: #ececec linear-gradient(rgba(black, .0075) 10%, transparent 20%);
	box-shadow: 0 0 3px 4px rgba(black, .1);
	border-radius: 0 0 7px 7px;
	padding: 5px;
	z-index: 1;
	display: grid;
	grid-template-rows: 250px minmax(0, 1fr);
	gap: 5px;

	.layout-grid {
		display: grid;
		gap: 5px;

		@include media-breakpoint-up(lg) {
			grid-template-columns: minmax(0, 1fr) 300px;
		}

		@include media-breakpoint-down(md) {
			grid-template-rows: repeat(2, minmax(0, 1fr));
		}

		.right-column {
			@extend .d-flex, .flex-column;

			gap: 1px;
		}
	}
}
</style>

<script>
import AppHeader from '@/components/AppHeader'
import AppNav from '@/components/AppNav'
import AppCarousel from '@/components/AppCarousel'
import AppFooter from '@/components/AppFooter'
import UserArea from '@/components/AppUserArea'
import RadioPlayer from '@/components/RadioPlayer'
import EventsPlugin from '@/components/EventsPlugin'
import LastBadges from '@/components/LastBadges'

import ErrorPage from '@/components/ErrorPage'

export default {
	components: {
		AppHeader,
		UserArea,
		AppNav,
		AppCarousel,
		RadioPlayer,
		EventsPlugin,
		LastBadges,
		AppFooter,
		ErrorPage
	},

	data() {
		return {
			pageErrorData: {
				show: false,
				title: null,
				message: null
			}
		}
	},

	mounted() {
		this.bus.on('router-error', error => {
			this.pageErrorData = {
				show: true,
				title: error.title,
				message: error.message
			}

			document.querySelector('body').style.overflow = 'hidden'
		})
	},

	methods: {
		clearPageErrorData() {
			this.pageErrorData = {
				show: false,
				title: null,
				message: null
			}

			document.querySelector('body').style.overflow = 'auto'
		}
	}
}
</script>