<template>
	<button class="small-button" type="submit">
		<slot>Submit</slot>
	</button>
</template>

<style lang="scss" scoped>
.small-button {
	@extend .text-white;

	background-color: #0fbfec;
	border: 0;
	outline: 0;
	height: 33px;
	border-radius: 4px;
	font-size: .75rem;
	box-shadow: inset 0 -3px 0 rgba(black, .04), inset 0 3px 0 rgba(white, .24);
	text-shadow: 0 2px 0 rgba(black, .09);
	font-weight: 600;
	padding: 0 .8rem 0;
}
</style>