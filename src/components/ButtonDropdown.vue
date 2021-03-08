<template>
    <div class="button-dropdown" v-bind="$attrs">
        <slot />
    </div>
</template>

<style lang="scss">
.button-dropdown {
    background: #f9f9f9;
    border-radius: 5px;
    height: 40px;
    padding: 10px .8rem 0;
    font-size: .8rem;
    color: rgba(black, .75);
    cursor: pointer;
    transition: background .2s;

    &:hover {
        @extend .bg-white;
    }

    &:active,
    &.active {
        @extend .bg-white;

        box-shadow: inset 0 0 5px rgba(black, .3);
    }
}
</style>

<script>
export default {
}
</script>