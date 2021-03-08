module.exports = {
	devServer: {
		proxy: {
			'/api': {
				target: 'http://habbplus.test',
				ws: true,
				changeOrigin: true
			},

			'/storage': {
				target: 'http://habbplus.test',
				ws: true,
				changeOrigin: true
			}
		}
	},

	css: {
		loaderOptions: {
			sass: {
				prependData: `@import "@/assets/scss/app.scss";`,
			},
		},
	},

	pwa: {
		name: 'HabbPlus',
		themeColor: '#05bfee',
		msTileColor: '#000000',
		appleMobileWebAppCapable: 'yes',
		appleMobileWebAppStatusBarStyle: 'white',
		
		iconPaths: {
			favicon32: 'images/icons/favicon-32x32.png',
			favicon16: 'images/icons/favicon-16x16.png',
		},

		manifestOptions: {
			name: 'HabbPlus',
			short_name: 'HP+',
			theme_color: '#05bfee',
			icons: [
				{
					src: "./images/icons/android-chrome-192x192.png",
					sizes: "192x192",
					type: "image/png"
				},
				{	src: "./images/icons/android-chrome-512x512.png",
					sizes: "512x512",
					type: "image/png"
				},
				{
					src: "./images/icons/android-chrome-maskable-192x192.png",
					sizes: "192x192",
					type: "image/png",
					purpose: "maskable"
				},
				{
					src: "./images/icons/android-chrome-maskable-512x512.png",
					sizes: "512x512",
					type: "image/png",
					purpose: "maskable"
				}
			],
			start_url: '/',
			display: 'standalone',
			background_color: '#FFFFFF'
		}
	}
};