<template>
    <div class="c-card-goal" :class="class_string" >
        <img v-if="icon" class="c-card-goal__icon" :src="this.$config.API_URL + icon.url" :alt="icon.alt" />
        <h2 class="c-card-goal__title">
            {{title}}
        </h2>
        <div class="c-card-goal__description" v-html="description"></div>
        <div class="c-card-goal__price">{{price}}</div>
        <div class="c-card-goal__cta-container">
            <cta
                v-if="cta" 
                :url="cta.url"
                :title="cta.title"
                class="--bordered"
            />
        </div>
    </div>
</template>

<script>
    import Cta from '../Cta.vue';

    export default {
        name: 'cardGoal',
        components: { Cta },
        props: {
            class_string: String,
            icon: Object,
            title: String,
            description: String,
            cta: Object,
            price: String,
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
        padding: 40px 20px 40px 20px;
        height: 100%;

        .c-card-goal__icon {
            margin: 0 auto;
            display: block;
            padding-bottom: 20px;
            height: 80px;
        }
        .c-card-goal__title {
            font-family: $font-family-custom;
            font-style: italic;
            font-size: 2rem;
            line-height: 2.375rem;
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

        .c-card-goal__price {
            font-family: $font-family-custom;
            font-size: 4rem;
            line-height: 4rem;
            color: $orange;
            text-align: center;
            margin-top: 24px;
            margin-bottom: 24px;
        }
    }
</style>
