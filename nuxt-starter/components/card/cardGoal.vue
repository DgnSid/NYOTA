<template>
    <div class="c-card-goal" :class="class_string" >
        <h2 class="c-card-goal__title">
            {{title}}
        </h2>
        <div class="c-card-goal__description">
            {{description}}
        </div>
    </div>
</template>

<script>
    import Cta from '../Cta.vue';

    export default {
        name: 'cardFeature',
        components: { Cta },
        props: {
            class_string: String,
            icon: Object,
            title: String,
            description: String,
            cta: Object,
        }
    }
</script>

<!-----
*
Style scoped
*
------>
<style lang="scss" scoped>
    .c-card-goal {
        position: relative;
        border: 1px solid $orange;
        border-radius: 20px;
        padding: 40px 40px 40px 40px;
        height: 100%;

        .c-card-goal__title {
            font-family: $font-family-custom;
            font-style: italic;
            font-size: 2rem;
            line-height: 2.75rem;
            background: $gradientOrange;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            padding-bottom: 20px;
            text-align: center;
        }

        .c-card-goal__description {
            font-size: 1.125rem;
            line-height: 1.625rem;
            color: $black;
            text-align: center;
        }
    }
</style>
