<template>
    <section class="c-section-twocols" :class="background ? '--background' : ''">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 p-r order-md-2 order-sm-2 order-2" :class="is_image_left ? 'order-lg-1' : 'offset-lg-2 order-lg-2'">
                    <ImageBordered 
                        :url="this.$config.API_URL + image.url"
                        :alt="image.alt"
                        class_string="--right a-stagger-element__twocols"
                    />
                </div>
                <div class="col-lg-14 order-md-1 order-sm-1 order-1" :class="is_image_left ? 'offset-lg-2 order-lg-2' : 'order-lg-1'">
                    <h2 class="c-section-twocols__title a-stagger-element__twocols">
                        {{title}}
                    </h2>
                    <div class="c-section-twocols__subtitle a-stagger-element__twocols">
                        {{subtitle}}
                    </div>
                    <div class="c-section-twocols__text a-stagger-element__twocols" v-html="text"></div>
                    <cta v-if="cta"
                        :url="cta.url"
                        :title="cta.title"
                        class=""
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
    
    import Cta from '../Cta.vue';
    import ImageBordered from '../ImageBordered.vue';

    export default {
        name: 'TheSectionTwoCols',
        components: { Cta, ImageBordered },
        props: {
            title: String,
            subtitle: String,
            text: String,
            image: Object,
            cta: Object,
            is_image_left: Boolean,
            background: Boolean,
        },
        mounted() {
            const gsap = this.$gsap;
            this.tl = new gsap.timeline({
                scrollTrigger: {
                    trigger: ".c-section-twocols",
                }
            })

            this.tl.set('.a-stagger-element__twocols', {autoAlpha: 0, y:30})
            this.tl.staggerTo('.a-stagger-element__twocols', 0.6, {autoAlpha: 1, y:0, ease: "Power1.easeOut"}, .15, "=0.4")
                   
        },
    }
</script>

<!-----
*
Style scoped
*
------>
<style lang="scss" scoped>
    .c-section-twocols {
        background-color: $white;
        padding: 120px 0;

        &.--background {
            background-image: url('/gradient-home.png');
            background-position: center;
            background-size: cover;
        }

        .c-section-twocols__title {
            font-family: $font-family-custom;
            font-weight: 600;
            
            font-size: 4.125rem;
            line-height: 4.5rem;

            @include media-breakpoint-down(md) {
                font-size: 2.825rem;
                line-height: 3rem;
            }
            
            color: $black;

            margin-bottom: 16px;
        }

        .c-section-twocols__subtitle {
            font-family: $font-family-custom;
            font-weight: 400;
            font-style: italic;
            
            font-size: 2rem;
            line-height: 2.375rem;

            background: $gradientOrange;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;

            margin-bottom: 40px;
        }

        .c-section-twocols__text {
            color: $black;

            ::v-deep p {
                margin-bottom: 20px;
            }
        }
    }
</style>
