<template>
    <section class="c-section-podcast">
        <div class="c-section-podcast-container container p-r">
            <shape-ellipse :size="144" color="#fb9b11" class="c-section-podcast__ellipse-top" />
            <div class="row">
                <div class="col-lg-16 offset-lg-4">
                    <h2 class="c-section-podcast__title a-stagger-element__podcast">
                        {{title}}
                    </h2>
                </div>
                <div class="col-lg-7 offset-lg-3 p-r order-md-2 order-sm-2 order-2 order-lg-1 a-stagger-element__podcast p-r">
                    
                        <ImageBordered 
                            :url="this.$config.API_URL + image.url"
                            :alt="image.alt"
                            class_string="--right"
                        />
                        <shape-ellipse :size="148" color="#fb9b11" class="c-section-podcast__ellipse-image" />
                </div>
                <div class="col-lg-11 order-md-1 order-sm-1 order-1 offset-lg-2 order-lg-2 a-stagger-element__podcast">
                    <div class="c-section-podcast__text" v-html="text"></div>
                    <cta v-if="cta"
                        :url="cta.url"
                        :title="cta.title"
                        class="--bordered"
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
    import ShapeEllipse from '@/components/ui/ShapeEllipse.vue';

    export default {
        name: 'TheSectionPodcast',
        components: { Cta, ImageBordered, ShapeEllipse },
        props: {
            title: String,
            text: String,
            image: Object,
            cta: Object,
        },
        mounted() {
            const gsap = this.$gsap;
            this.tl = new gsap.timeline({
                scrollTrigger: {
                    trigger: ".c-section-podcast",
                }
            })

            this.tl.set('.a-stagger-element__podcast', {autoAlpha: 0, y:30})
            this.tl.staggerTo('.a-stagger-element__podcast', 0.6, {autoAlpha: 1, y:0, ease: "Power1.easeOut"}, .15, "=0.4")
                   
        },
    }
</script>

<!-----
*
Style scoped
*
------>
<style lang="scss" scoped>
    .c-section-podcast {
        background-color: $white;
        .c-section-podcast-container {
            padding: 120px 0;

            @include media-breakpoint-down(md) {
                padding: 60px 0;
            }
        }

        .c-section-podcast__title {
            font-family: $font-family-custom;
            font-weight: 400;
            
            font-size: 4.125rem;
            line-height: 4.5rem;

            @include media-breakpoint-down(md) {
                font-size: 2.825rem;
                line-height: 3rem;
            }
            
            color: $black;
            text-align: center;

            margin-bottom: 50px;
        }

        .c-section-podcast__text {
            color: $black;

            ::v-deep p {
                margin-bottom: 20px;
            }

            @include media-breakpoint-down(md) {
                padding: 0 10px;
            }
        }

        .c-section-podcast__ellipse-top {
            position: absolute;
            right: 0;
            top: 0;
            z-index: 2;

            @include media-breakpoint-down(md) {
                display: none;
            }
        }
        .c-section-podcast__ellipse-image {
            position: absolute;
            left: 0;
            bottom: 0;
            z-index: 2;
            transform: translate(-50%, 50%);

            @include media-breakpoint-down(md) {
                display: none;
            }
        }
    }
</style>
