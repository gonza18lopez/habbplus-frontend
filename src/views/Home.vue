<template>
	<div class="articles">
		<div class="menu-buttons">
			<ButtonLink href="#" active>
				All
			</ButtonLink>

			<ButtonLink href="#">
				Categories
			</ButtonLink>

			<ButtonLink href="#">
				Articles
			</ButtonLink>

			<ButtonDropdown>
				Newest <fa :icon="['fas', 'angle-down']" />
			</ButtonDropdown>
		</div>

		<Box v-for="article in articles.data" :variant="article.category.color" :to="{ name: 'show article', params: { id: article.id } }" v-bind:key="article.id">
			<template v-slot:title>
				<strong>[{{ article.category.prefix }}]</strong> {{ article.title }}
			</template>

			<div class="box-body">
				<img :src="article.image">	

				<div class="article-description">
					{{ article.description }}
				</div>
			</div>

			<div class="box-info">
				<router-link to="/" class="info">
					<fa :icon="['fas', 'at']" /> {{ article.user.name }}
				</router-link>

				<div class="info">
					<fa :icon="['far', 'calendar-alt']" /> {{ parseTime(article.createdAt) }}
				</div>

				<div class="info right">
					<fa :icon="['fas', 'comments']" /> {{ article.comments }} comments
				</div>
			</div>
		</Box>
	</div>
</template>

<style lang="scss" scoped>
.articles {
	display: grid;
	grid-template-rows: 40px;
	grid-auto-rows: auto;
	gap: 5px;

	.menu-buttons {
		@extend .d-flex;

		gap: 5px;

		.button-dropdown {
			margin-left: auto;
		}

		@include media-breakpoint-down(md) {
			flex-wrap: nowrap;
			
			.button-dropdown {
				margin: 0;
			}
		}
	}

	.box {
		.box-content {
			.box-body {
				display: grid;
				grid-template-columns: 143px minmax(0, 1fr);
				gap: 1rem;
			}

			.box-info {
				@extend .d-flex;

				gap: 5px;
				margin-top: 5px;

				.info {
					@extend .px-2, .py-1;

					background: #ececec linear-gradient(transparent, rgba(black, .05));
					border-radius: 3px;
					box-shadow: inset 0 2px 0 rgba(white, .15), inset 0 -4px 0 rgba(black, .025);
					font-size: .75rem;
					color: #828282;
					text-shadow: 0 1px 0 rgba(white, .65);
					text-decoration: none;

					&.right {
						margin-left: auto;
					}

					svg {
						margin-top: -3px;
					}
				}

				a.info:hover {
					background-color: #e2e2e2;
				}
			}
		}
	}
}
</style>

<script>
import moment from 'moment'

import ButtonLink from '@/components/ButtonLink'
import ButtonDropdown from '@/components/ButtonDropdown'
import Box from '@/components/Box'

export default {
	name: 'Home',

	components: {
		ButtonLink,
		ButtonDropdown,
		Box
	},

	data() {
		return {
			articles: []
		}
	},

	mounted() {
		this.load()
	},

	methods: {
		load() {
			window.axios.get('/api/articles')
				.then( ({ data }) => {
					this.articles = data
				})
		},

		parseTime(seconds) {
			return moment.unix(seconds).format('DD/MM/YYYY')
		}
	}
}
</script>
