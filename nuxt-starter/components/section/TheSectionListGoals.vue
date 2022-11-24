<template>
    <section class="c-section-listgoals" :class="background ? '--background' : ''">
        <h2 class="c-section-listgoals__title">{{title}}</h2>
        <div class="container">
            <div class="row jc-center">
                <div class="col-lg-8 md-down-mb-xl" v-for="(element, index) in goals" :key="index">
                    <cardGoal
                        :icon="element.icon"
                        :title="element.title"
                        :description="element.description"
                        :price="element.price"
                        :cta="element.cta"
                    />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import cardGoal from '../card/cardGoal.vue';

    export default {
        name: 'TheSectionListGoals',
        components: { cardGoal },
        props: {
            title: String,
            goals: Array,
            background: Boolean,
        }
    }
</script>

<!-----
*
Style scoped
*
------>
<style lang="scss" scoped>
    .c-section-listgoals {
        padding: 60px 0;
        background-color: $white;

        &.--background {
            background-image: url('/gradient-home.png');
            background-position: center;
            background-size: cover;
        }

        .c-section-listgoals__title {
            font-weight: 600;
            font-family: $font-family-custom;
            font-size: 4.125rem;
            line-height: 4.5rem;
            text-align: center;
            color: $black;
            padding-bottom: 60px;
            max-width: 900px;
            margin: 0 auto;

            @include media-breakpoint-down(md) {
                font-size: 3.125rem;
                line-height: 3.5rem;
            }
        }
    }
</style>
