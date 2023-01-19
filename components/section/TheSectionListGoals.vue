<template>
    <section class="c-section-listgoals" :class="background ? '--background' : ''">
        <target v-if="target" class="c-section-listgoals__target a-stagger-element__listgoals" />
        <h2 class="c-section-listgoals__title a-stagger-element__listgoals">{{title}}</h2>
        <div class="container">
            <div class="row jc-center">
                <div class="col-lg-8 md-down-mb-xl" v-for="(element, index) in goals" :key="index">
                    <cardGoal
                        :icon="element.icon"
                        :title="element.title"
                        :description="element.description"
                        :price="element.price"
                        :cta="element.cta"
                        class="a-stagger-element__listgoals"
                    />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import { gsap } from "gsap";
    import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

    import Target from '@/components/svg/Target.vue'

    if (process.client) {
        gsap.registerPlugin(ScrollTrigger);
    }

    import cardGoal from '../card/cardGoal.vue';

    export default {
        name: 'TheSectionListGoals',
        components: { cardGoal, Target },
        props: {
            title: String,
            goals: Array,
            background: Boolean,
            target: Boolean,
        },
        mounted() {
            const gsap = this.$gsap;
            this.tl = new gsap.timeline({
                scrollTrigger: {
                    trigger: ".c-section-listgoals",
                }
            })

            this.tl.set('.a-stagger-element__listgoals', {autoAlpha: 0, y:30})
            this.tl.staggerTo('.a-stagger-element__listgoals', 0.6, {autoAlpha: 1, y:0, ease: "Power1.easeOut"}, .15, "=0.4")
                   
        },
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
        .c-section-listgoals__target {
            display: block;
            margin: 0 auto;
        }

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
                font-size: 2.825rem;
                line-height: 3rem;
            }
        }
    }
</style>
