<template>
    <div class="c-image-container" :class="class_string" >
        <img class="c-image" :src="url" :alt="alt" />
    </div>
</template>

<script>
    export default {
        name: 'ImageBordered',
        props: {
            class_string: String,
            url: String,
            alt: String,
        }
    }
</script>

<!-----
*
Style scoped
*
------>
<style lang="scss" scoped>
    .c-image-container {
        position: relative;
        z-index: 2;
        overflow: hidden;

        transition: transform 1s ease-in-out;

        &:not(:last-child) {
            margin-bottom: 22px;
        }

        &.--right {
            border-top-right-radius: 90px;
            border-bottom-left-radius: 90px;
        }

        &.--left {
            border-top-left-radius: 90px;
            border-bottom-right-radius: 90px;
        }

        height: 100%;

        &.--h300 {
            height: 292px;
        }

        .c-image {
            object-fit: cover;
            object-position: center;
            width: 100%;
            height: 100%;
        }
    }
</style>
