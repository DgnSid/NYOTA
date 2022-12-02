<template>
    <article class="c-card-formula" :class="class_string" >
        <NuxtLink v-if="cta" class="c-card-formula__link" :to="cta.url"></NuxtLink>
        <h2 class="c-card-formula__title">
            {{title}}
        </h2>
        <div class="c-card-formula__description">
            {{description}}
        </div>
        <div class="c-card-formula__cta-container">
            <cta
                v-if="cta" 
                :url="cta.url"
                :title="cta.title"
                class="--bordered"
            />
        </div>
    </article>
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
    .c-card-formula {
        position: relative;
        border: 1px solid $orange;
        border-radius: 20px;
        padding: 40px 40px 80px 40px;
        height: 100%;

        .c-card-formula__link {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }

        .c-card-formula__title {
            font-family: $font-family-custom;
            font-style: italic;
            font-size: 2rem;
            line-height: 2.75rem;
            background: $gradientOrange;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            padding-bottom: 20px;
        }

        .c-card-formula__description {
            font-size: 1.125rem;
            line-height: 1.625rem;
            border-left: 1px solid $orange;
            color: $black;
            padding-left: 20px;
        }

        .c-card-formula__cta-container {
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translate(-50%, 50%);
            width: 240px;
        }
    }
</style>
