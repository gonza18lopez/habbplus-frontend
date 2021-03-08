<template>
	<nav class="navbar navbar-expand-lg navbar-light">
		<div class="container-fluid pe-0 pe-md-1">
			<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapse" aria-controls="collapse" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>

			<div class="collapse navbar-collapse" id="collapse">
				<ul class="navbar-nav me-auto mb-2 mb-lg-0">
					<li class="nav-item home">
						<router-link class="nav-link" to="/" exact>
							{{ $t('nav.home') }}
						</router-link>
					</li>

					<li class="nav-item habbo">
						<router-link class="nav-link" to="/habbo">
							{{ $t('nav.habbo') }}
						</router-link>
					</li>
					
					<li class="nav-item community">
						<router-link class="nav-link" to="/community">
							{{ $t('nav.community') }}
						</router-link>
					</li>

					<li class="nav-item forum">
						<router-link class="nav-link" to="/forum">
							{{ $t('nav.forum') }}
						</router-link>
					</li>

					<li class="nav-item radio">
						<router-link class="nav-link" to="/radio">
							{{ $t('nav.radio') }}
						</router-link>
					</li>

					<li class="nav-item extras">
						<router-link class="nav-link" to="/extras">
							{{ $t('nav.extras') }}
						</router-link>
					</li>
				</ul>

				<form class="search">
					<input class="form-control me-1" type="search" :placeholder="$t('nav.form.placeholder')" :aria-label="$t('nav.form.placeholder')">

					<small-button>{{ $t('nav.form.submit') }}</small-button>
				</form>
			</div>
		</div>
	</nav>
</template>

<style lang="scss" scoped>
@include media-breakpoint-down(md) {
	.navbar {
		border-radius: 0!important;

		.nav-link {
			box-shadow: none!important;
		}
	}
}

@include media-breakpoint-up(lg) {
	.navbar {
		height: $nav-height;
	}
}

.navbar {
	background: #ececec linear-gradient(transparent, rgba(black, .0075));
	border-radius: 7px 7px 0 0;
	box-shadow: 0 -2px 0 #f7f7f7, 0 0 3px 4px rgb(black, .1);

	.navbar-nav {
		font-size: .95rem;

		li.nav-item {
			&.home {
				a.nav-link {
					&.active,
					&:hover {
						box-shadow: inset 0 2px 0 #07a5cc;
						color: #07a5cc !important;
					}
				}
			}

			&.habbo {
				a.nav-link {
					&.active,
					&:hover {
						box-shadow: inset 0 2px 0 #eeb005;
						color: #eeb005 !important;
					}
				}
			}

			&.community {
				a.nav-link {
					&.active,
					&:hover {
						box-shadow: inset 0 2px 0 #ee05a0;
						color: #ee05a0 !important;
					}
				}
			}

			&.forum {
				a.nav-link {
					&.active,
					&:hover {
						box-shadow: inset 0 2px 0 #11b627;
						color: #11b627 !important;
					}
				}
			}

			&.radio {
				a.nav-link {
					&.active,
					&:hover {
						box-shadow: inset 0 2px 0 #ee0505;
						color: #ee0505 !important;
					}
				}
			}

			&.extras {
				a.nav-link {
					&.active,
					&:hover {
						box-shadow: inset 0 2px 0 #9105ee;
						color: #9105ee !important;
					}
				}
			}

			a.nav-link {
				@extend .px-2, .mx-1;

				color: #5c5c5c;
				text-shadow: 0 1px 0 rgba(white, .6);
				font-weight: 400;
			}
		}
	}

	.search {
		@extend .d-flex;

		height: 33px;
		margin-right: 2px;

		.form-control {
			border: 0;
			border-radius: 7px 5px 5px 7px;
			outline: none!important;
			appearance: none;
			font-size: .75rem;
			color: #999999;
			padding-top: 8px;

			&::placeholder {
				font-style: italic;
			}

			&:focus {
				box-shadow: 0 0 0 2px rgba($header-bg, .25);
			}
		}

		.small-button {
			border-radius: 5px 7px 7px 5px;
		}
	}
}
</style>

<script>
import SmallButton from './ButtonSmall'

export default {
	components: {
		SmallButton
	}
}
</script>