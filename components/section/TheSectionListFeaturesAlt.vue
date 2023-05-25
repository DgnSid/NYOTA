<template>
    <section class="c-section-listfeatures-alt" :class="background ? '--background' : ''">
        <div class="container">
            <h2 class="c-section-listfeatures-alt__title a-stagger-element__listfeatures-alt">
                {{title}}
            </h2>
            <div class="c-section-listfeatures-alt__list row p-r">
                <div class="c-section-listfeatures-alt__decoration-container col-lg-18 offset-lg-2 a-stagger-element__listfeatures-alt">
                    <div class="c-section-listfeatures-alt__decoration"></div>
                </div>
                <div class="col-lg-18 offset-lg-3 a-stagger-element__listfeatures-alt" v-for="(element, index) in features" :key="index">
                    <div class="c-section-listfeatures-alt__element">
                        <div class="c-section-listfeatures-alt__element__figure">0{{index + 1}}.</div>
                        <div class="c-section-listfeatures-alt__element__title">{{element.title}}</div>
                        <div class="c-section-listfeatures-alt__element__text" v-html="element.description"></div>
                    </div>
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

    export default {
        name: 'TheSectionListFeaturesAlt',
        props: {
            title: String,
            features: Array,
            background: Boolean,
        },
        mounted() {
            const gsap = this.$gsap;
            this.tl = new gsap.timeline({
                scrollTrigger: {
                    trigger: ".c-section-listfeatures-alt",
                }
            })

            this.tl.set('.a-stagger-element__listfeatures-alt', {autoAlpha: 0, y:30})
            this.tl.staggerTo('.a-stagger-element__listfeatures-alt', 0.6, {autoAlpha: 1, y:0, ease: "Power1.easeOut"}, .15, "=0.4")
                   
        },
    }
</script>

<!-----
*
Style scoped
*
------>
<style lang="scss" scoped>
    .c-section-listfeatures-alt {
        padding: 60px 0;
        background-color: $white;

        &.--background {
            background-image: url('/gradient-home.png');
            background-position: center;
            background-size: cover;
        }


        .c-section-listfeatures-alt__decoration-container {
            height: 100%;
            width: 100%;
            position: absolute;
            top: 0;
        }
        .c-section-listfeatures-alt__decoration {
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 140px;
            background-color: $white;
            border-top-right-radius: 90px;
            border-bottom-left-radius: 90px;

            @include media-breakpoint-down(md) {
                left: 10px;
            }
        }

        .c-section-listfeatures-alt__title {
            font-size: 4.125rem;
            line-height: 4.5rem;
            text-align: center;
            color: $black;
            font-weight: 400;

            @include media-breakpoint-down(md) {
                font-size: 2.225rem;
                line-height: 2.5rem;
            }
        }

        .c-section-listfeatures-alt__list {
            padding-top: 60px;
        }

        .c-section-listfeatures-alt__element {
            display: flex;
            justify-content: space-between;
            border-bottom: 1px solid $orange;
            padding-bottom: 32px;
            margin-bottom: 32px;

            @include media-breakpoint-down(md) {
                flex-direction: column;
            }

            .c-section-listfeatures-alt__element__figure {
                font-size: 2rem;
                line-height: 2.25rem;
                background: $gradientOrange;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                font-weight: 200;
                width: 10%;

                @include media-breakpoint-down(md) {
                    width: 100%;
                }
            }

            .c-section-listfeatures-alt__element__title {
                font-size: 2rem;
                line-height: 2.25rem;
                font-family: $font-family-custom;
                background: $gradientOrange;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                max-width: 45%;
                min-width: 45%;
                padding-right: 60px;

                font-style: italic;

                @include media-breakpoint-down(md) {
                    max-width: 90%;
                }
            }

            .c-section-listfeatures-alt__element__text {
                color: $black;
                max-width: 45%;

                @include media-breakpoint-down(md) {
                    max-width: 90%;
                }
            }
        }
    }
</style>
