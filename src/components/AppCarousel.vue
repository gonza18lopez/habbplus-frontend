<template>
	<div class="carousel-container">
		<div class="carousel slide carousel-fade" id="carousel" data-bs-ride="carousel" ref="carousel">
			<ol class="carousel-indicators">
				<li data-bs-target="#carousel" data-bs-slide-to="0" class="active"></li>
				<li data-bs-target="#carousel" data-bs-slide-to="1"></li>
				<li data-bs-target="#carousel" data-bs-slide-to="2"></li>
			</ol>

			<div class="carousel-inner">
				<div class="carousel-item active" style="background-image: url(/images/carousel/1.png)">
					<router-link to="" class="item-body">
						<h2 class="caption">I bloat, you bloat, verybody bloats!</h2>

						<p class="description">
							Remind yourself it’s okay to just be you. Even in Habbo, where we can choose how we look, let’s help normalize normal bodies and encourage self-love. Be part of the body positive movement.
						</p>
					</router-link>
				</div>

				<div class="carousel-item" style="background-image: url(/images/carousel/2.png)">
					<router-link to="" class="item-body">
						<h2 class="caption">I bloat, you bloat, verybody bloats!</h2>

						<p class="description">
							Remind yourself it’s okay to just be you. Even in Habbo, where we can choose how we look, let’s help normalize normal bodies and encourage self-love. Be part of the body positive movement.
						</p>
					</router-link>
				</div>

				<div class="carousel-item" style="background-image: url(/images/carousel/3.png)">
					<router-link to="" class="item-body">
						<h2 class="caption">I bloat, you bloat, verybody bloats!</h2>

						<p class="description">
							Remind yourself it’s okay to just be you. Even in Habbo, where we can choose how we look, let’s help normalize normal bodies and encourage self-love. Be part of the body positive movement.
						</p>
					</router-link>
				</div>
			</div>
		</div>

		<div class="carousel-categories">
			<FeatureBox title="Categories" onlycontent>
				<ChronicleItem href="#" data-bs-target="#carousel" data-bs-slide-to="0" icon="/images/icons/chronicle.png" name="I bloat, you bloat, verybody bloats!" text="TheLastDark - 04/17/2020" :active="activeItem == 0" />
				<ChronicleItem href="#" data-bs-target="#carousel" data-bs-slide-to="1" icon="/images/icons/chronicle.png" name="I bloat, you bloat, verybody bloats!" text="TheLastDark - 04/17/2020" :active="activeItem == 1" />
				<ChronicleItem href="#" data-bs-target="#carousel" data-bs-slide-to="2" icon="/images/icons/chronicle.png" name="I bloat, you bloat, verybody bloats!" text="TheLastDark - 04/17/2020" :active="activeItem == 2" />
				<ChronicleItem href="#" data-bs-target="#carousel" data-bs-slide-to="3" icon="/images/icons/chronicle.png" name="No article here, nevermind..." text="TheLastDark - 04/17/2020" :active="activeItem == 3" />
				<ChronicleItem href="#" data-bs-target="#carousel" data-bs-slide-to="4" icon="/images/icons/chronicle.png" name="No article here, nevermind..." text="TheLastDark - 04/17/2020" :active="activeItem == 4" />
			</FeatureBox>
		</div>
	</div>
</template>

<style lang="scss">
.carousel-container {
	display: grid;
	grid-template-columns: minmax(0, 1fr) 300px;
	gap: 5px;

	@include media-breakpoint-down(lg) {
		grid-template-columns: minmax(0, 1fr);
		gap: 0;
	}

	.carousel {
		height: 250px;

		.carousel-item {
			background-position: right;
			height: 250px;

			.item-body {
				@extend .p-2, .p-md-3;

				width: 65%;
				height: 100%;
				text-decoration: none;

				h2.caption {
					@extend .text-white, .p-2, .p-md-3;

					font-size: 1.5rem;
					font-weight: 500;
					text-shadow: 0 0 5px rgba(black, .2);
				}

				p.description {
					@extend .text-white, .px-2, .p-md-3;

					font-size: .9rem;
					list-style: 1.2;
					text-shadow: 0 1px 0 rgba(black, .2);
				}

				@include media-breakpoint-down(md) {
					background: rgba(black, .5);
					width: 100%;
				}

				&.dark {
					.caption {
						color: rgba(black, .65);
					}
					
					.description {
						color: rgba(black, .65);
						text-shadow: 0 1px 0 rgba(white, .2);
					}
				}
			}
		}
	}

	.carousel-categories {
		@extend .d-none, .d-lg-block;

		.feature-box {
			.box-content {
				@extend .d-flex, .flex-column;

				gap: 7.5px;
			}
		}
	}
}
</style>

<script>
import FeatureBox from '@/components/FeatureBox'
import ChronicleItem from '@/components/ChronicleItem'

export default {
	data() {
		return {
			activeItem: 0
		}
	},

	components: {
		FeatureBox,
		ChronicleItem
	},

	mounted() {
		this.listenCarouselEvents(
			this.$refs.carousel
		)
	},

	methods: {
		listenCarouselEvents(carousel) {
			carousel.addEventListener('slide.bs.carousel', ({ to }) => {
				this.activeItem = to
			})
		}
	}
}
</script>