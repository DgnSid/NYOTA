<template>
    <section class="c-section-figures">
        <div class="c-section-figures__container">
            <div class="c-section-figures__container__cover"></div>
            <div class="c-section-figures__container__image"></div>
            <div class="c-section-figures__container__content">
                <div class="container">
                    <div class="row ai-center">
                        <div class="col-lg-9 offset-lg-1">
                            <h2 class="c-section-figures__title a-stagger-element__figures" v-html="title"></h2>
                        </div>
                        <div class="col-lg-6 offset-lg-2 md-down-mb-sm a-stagger-element__figures pt-xl md-down-pt-0">
                            <cardFigure v-for="(element, index) in key_numbers.slice(0,2)"
                                :key="index"
                                :title="element.number"
                                :description="element.description"
                                :key_index="index"
                            />
                        </div>
                        <div class="col-lg-6 a-stagger-element__figures">
                            <cardFigure v-for="(element, index) in key_numbers.slice(2,4)"
                                :key="index"
                                :title="element.number"
                                :description="element.description"
                                :key_index="index + 2"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <logo-figures class="c-section-figures__logo" />
    </section>
</template>

<script>
    import { gsap } from "gsap";
    import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

    if (process.client) {
        gsap.registerPlugin(ScrollTrigger);
    }

    import cardFigure from '../card/cardFigure.vue';
    import LogoFigures from "../svg/LogoFigures.vue";

    export default {
        name: 'TheSectionFigures',
        components: {
          cardFigure,
          LogoFigures,
        },
        props: {
            title: String,
            key_numbers: Array,
        },
        mounted() {
            const gsap = this.$gsap;
            this.tl = new gsap.timeline({
                scrollTrigger: {
                    trigger: ".c-section-figures",
                }
            })

            this.tl.set('.a-stagger-element__figures', {autoAlpha: 0, y:30})
            this.tl.staggerTo('.a-stagger-element__figures', 0.6, {autoAlpha: 1, y:0, ease: "Power1.easeOut"}, .15, "=0.4")                   
        },
    }
</script>

<!-----
*
Style scoped
*
------>
<style lang="scss" scoped>
    .c-section-figures {
        position: relative;
        background-color: $white;

        .c-section-figures__title {
            font-size: 4.125rem;
            line-height: 4.5rem;

            @include media-breakpoint-down(md) {
                font-size: 3.125rem;
                line-height: 3.5rem;
                margin-bottom: 40px;
            }
        }

        .c-section-figures__container {
            border-top-left-radius: 100px;
            border-bottom-right-radius: 100px;
            overflow: hidden;
            position: relative;

            .c-section-figures__container__cover {
                width: 100%;
                height: 100%;
                position: absolute;
                z-index: 2;
                top: 0;
                left: 0;
                background-color: rgba($blue, .5);
            }

            .c-section-figures__container__image {
                position: absolute;
                top: 0;
                left: 0;
                background-image: url('/bkg-figures.png');
                background-size: cover;
                width: 100%;
                height: 100%;
            }

            .c-section-figures__container__content {
                position: relative;
                z-index: 3;
                padding: 60px 0;
            }
        }

        .c-section-figures__logo {
            position: absolute;
            bottom: 0;
            left: 0;
            z-index: 2;

            @include media-breakpoint-down(md) {
                display: none;
            }
        }
    }
</style>
