<template>
    <section class="c-section-listfeatures-alt" :class="background ? '--background' : ''">
        <div class="container">
            <h2 class="c-section-listfeatures-alt__title a-stagger-element__listfeatures-alt">
                {{title}}
            </h2>
            <div class="row">
                <div v-for="(element, index) in features" :key="index">
                    <div class="col-lg-18 offset-lg-3 a-stagger-element__listfeatures-alt">                  
                        <div class="c-section-listfeatures-alt__element">
                            <div class="c-section-listfeatures-alt__element__figure">0{{index + 1}}.</div>
                            <div class="c-section-listfeatures-alt__element__title">{{element.title}}</div>
                            <div class="c-section-listfeatures-alt__element__text">{{element.text}}</div>
                        </div>
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

        .c-section-listfeatures-alt__title {
            font-size: 4.125rem;
            line-height: 4.5rem;
            text-align: center;
            color: $black;
            padding-bottom: 60px;

            @include media-breakpoint-down(md) {
                font-size: 3.125rem;
                line-height: 3.5rem;
            }
        }

        .c-section-listfeatures-alt__element {
            display: flex;
            border-bottom: 1px solid $orange;
            padding-bottom: 32px;
            margin-bottom: 32px;

            .c-section-listfeatures-alt__element__figure {
                font-size: 2rem;
                line-height: 2.25rem;
                background: $gradientOrange;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                font-weight: 200;
                width: 10%;
            }

            .c-section-listfeatures-alt__element__title {
                font-size: 2rem;
                line-height: 2.25rem;
                font-family: $font-family-custom;
                background: $gradientOrange;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                max-width: 45%;
            }

            .c-section-listfeatures-alt__element__text {
                color: $black;
                max-width: 45%;
            }
        }
    }
</style>
