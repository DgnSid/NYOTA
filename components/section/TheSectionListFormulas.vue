<template>
    <section class="c-section-listformulas">
        <div class="container p-r">            
            <h2 class="c-section-listformulas__title a-stagger-element__listformulas">
                {{title}}
            </h2>
            <thumbs-up class="c-section-listformulas__thumbs  a-stagger-element__listformulas" />
        </div>
        <div class="container p-r">
            <div class="row">
                <div class="col-lg-8 md-down-mb-xl" v-for="(element, index) in formulas" :key="index">
                    <cardFormula
                        :title="element.title"
                        :description="element.description"
                        :cta="element.cta"
                        class="a-stagger-element__listformulas"
                    />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import { gsap } from "gsap";
    import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

    if (process.client) {
        gsap.registerPlugin(ScrollTrigger);
    }

    import cardFormula from '../card/cardFormula.vue';

    import ThumbsUp from '@/components/svg/ThumbsUp.vue'

    export default {
        name: 'TheSectionListFormulas',
        components: { cardFormula, ThumbsUp },
        props: {
            title: String,
            formulas: Array,
        },
        mounted() {
            const gsap = this.$gsap;
            this.tl = new gsap.timeline({
                scrollTrigger: {
                    trigger: ".c-section-listformulas",
                }
            })

            this.tl.set('.a-stagger-element__listformulas', {autoAlpha: 0, y:30})
            this.tl.staggerTo('.a-stagger-element__listformulas', 0.6, {autoAlpha: 1, y:0, ease: "Power1.easeOut"}, .15, "=0.4")
                   
        },
    }
</script>

<!-----
*
Style scoped
*
------>
<style lang="scss" scoped>
    .c-section-listformulas {
        padding: 60px 0 150px 0;
        background-color: $white;
        .c-section-listformulas__title {
            font-weight: 400;
            font-family: $font-family-custom;
            font-size: 4.125rem;
            line-height: 4.5rem;
            text-align: center;
            color: $black;
            padding-bottom: 60px;
            max-width: 900px;
            margin: 0 auto;

            @include media-breakpoint-down(md) {
                font-size: 2.225rem;
                line-height: 2.5rem;
            }
        }

        .c-section-listformulas__thumbs {
            position: absolute;
            bottom: 60px;
            right: 0;

            @include media-breakpoint-down(md) {
                display: none;
            }
        }
    }
</style>
