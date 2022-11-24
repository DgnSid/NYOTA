<template>
    <div class="c-image-container" :class="class_string" >
        <img class="c-image" :src="url" :alt="alt" />
    </div>
</template>

<script>
    export default {
        name: 'Image',
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
        background-color: red;
        position: relative;
        z-index: 2;
        overflow: hidden;

        &:not(:last-child) {
            margin-bottom: 22px;
        }

        &.--right {
            border-top-right-radius: 60px;
            border-bottom-left-radius: 60px;
        }

        &.--left {
            border-top-left-radius: 60px;
            border-bottom-right-radius: 60px;
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
