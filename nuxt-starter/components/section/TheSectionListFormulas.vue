<template>
    <section class="c-section-listformulas">
        <h2 class="c-section-listformulas__title">{{title}}</h2>
        <div class="container">
            <div class="row">
                <div class="col-lg-8 md-down-mb-xl" v-for="(element, index) in formulas" :key="index">
                    <cardFormula
                        :title="element.title"
                        :description="element.description"
                        :cta="element.cta"
                    />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import cardFormula from '../card/cardFormula.vue';

    export default {
        name: 'TheSectionListFormulas',
        components: { cardFormula },
        props: {
            title: String,
            formulas: Array,
        }
    }
</script>

<!-----
*
Style scoped
*
------>
<style lang="scss" scoped>
    .c-section-listformulas {
        padding: 60px 0;
        background-color: $white;

        .c-section-listformulas__title {
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
