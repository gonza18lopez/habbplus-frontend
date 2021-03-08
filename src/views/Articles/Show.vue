<template>
	<Box v-if="article" :variant="article.category.color">
		<template v-slot:title>
			<strong>[{{ article.category.prefix }}]</strong> {{ article.title }}
		</template>

		<div class="box-body">
			{{ article.body }}
		</div>
	</Box>
</template>

<style lang="scss" scoped>

</style>

<script>
import Box from '@/components/Box'

export default {
	name: 'Single Article',

	components: {
		Box
	},

	data() {
		return {
			article: null
		}
	},

	created() {
		window.axios.get('/api/articles/' + this.$route.params.id)
			.then( ({ data }) => {
				this.article = data
			})
	},

	unmounted() {
		this.article = null
	}
}
</script>