<template>
    <section class="c-section-listnews">
        <div class="container">
            <h2 class="c-section-listnews__title a-stagger-element__listnews">{{title}}</h2>
            <div class="row">
                <div class="col-lg-12 a-stagger-element__listnews" v-for="(element, index) in news.slice(0, 2)" :key="index">
                    <cardNews
                        :image_url="element.image.url"
                        :image_alt="element.image.alt"
                        image_style="--right"
                        :date="element.publicationDate|date('DD.MM.YYYY')"
                        :title="element.title"
                        :url="element.url"
                    />
                </div>
                <div class="col-lg-12 a-stagger-element__listnews" v-for="(element, index) in news.slice(2, 4)" :key="index">
                    <cardNews
                        :image_url="element.image.url"
                        :image_alt="element.image.alt"
                        image_style="--left"
                        :date="element.publicationDate|date('DD.MM.YYYY')"
                        :title="element.title"
                        :url="element.url"
                    />
                </div>
            </div>

            <div class="c-section-listnews__cta-container a-stagger-element__listnews">
                <cta 
                    :url="cta.url"
                    :title="cta.title"
                    class=""
                />
            </div>

            <div v-if="hook_title">
                <div class="row">
                    <div class="col-lg-22 offset-lg-1">
                        <div class="c-section-listnews__hook a-stagger-element__listnews">
                            <div class="c-section-listnews__hook__image-container">
                                <img class="c-section-listnews__hook__image" :src="hook_image.url" :alt="hook_image.alt" />                                
                            </div>
                            <div class="c-section-listnews__hook__text-container">
                                <h2 class="c-section-listnews__hook__title" v-html="hook_title"></h2>
                                <div class="c-section-listnews__hook__cta-container">
                                    <cta 
                                        :url="hook_cta_first.url"
                                        :title="hook_cta_first.title"
                                        class="--bordered"
                                    />
                                    <cta 
                                        :url="hook_cta_second.url"
                                        :title="hook_cta_second.title"
                                        class="--bordered --white"
                                    />
                                </div>
                            </div>
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

    import cardNews from '../card/cardNews.vue';
    import Cta from '../Cta.vue';

    export default {
        name: 'TheSectionListNews',
        components: { Cta, cardNews },
        props: {
            title: String,
            news: Array,
            cta: Object,
            hook_title: String,
            hook_cta_first: Object,
            hook_image: Object,
            hook_cta_second: Object,
        },
        mounted() {
            const gsap = this.$gsap;
            this.tl = new gsap.timeline({
                scrollTrigger: {
                    trigger: ".c-section-listnews",
                }
            })

            this.tl.set('.a-stagger-element__listnews', {autoAlpha: 0, y:30})
            this.tl.staggerTo('.a-stagger-element__listnews', 0.6, {autoAlpha: 1, y:0, ease: "Power1.easeOut"}, .15, "=0.4")
                   
        },
    }
</script>

<!-----
*
Style scoped
*
------>
<style lang="scss" scoped>
    .c-section-listnews {
        padding: 60px 0;
        background-color: $white;
        background-image: url('/gradient-home.png');
        background-position: center;
        background-size: cover;

        .c-section-listnews__title {
            font-size: 4.125rem;
            line-height: 4.5rem;
            color: $black;
            padding-bottom: 60px;
            text-align: center;

            @include media-breakpoint-down(md) {
                font-size: 3.125rem;
                line-height: 3.5rem;
            }
        }

        .c-section-listnews__cta-container {
            display: table;
            margin: 0 auto;
        }

        .c-section-listnews__hook {
            background-color: $white;
            border-radius: 40px;
            width: 100%;
            display: flex;
            align-items: center;
            padding: 40px;
            margin-top: 50px;

            @include media-breakpoint-down(md) {
                flex-direction: column;
                padding: 10px;
            }

            .c-section-listnews__hook__image-container {
                height: 370px;
                width: 430px;
                border-radius: 40px;
                overflow: hidden;
                margin-right: 50px;

                @include media-breakpoint-down(md) {
                    width: 100%;
                    height: 300px;
                    margin: 0;
                }

                .c-section-listnews__hook__image {
                    object-fit: cover;
                    object-position: center;
                    width: 100%;
                    height: 100%;
                }
            }

            .c-section-listnews__hook__text-container {
                .c-section-listnews__hook__title {
                    color: $black;
                    font-size: 4rem;
                    line-height: 4.2rem;
                    font-family: $font-family-custom;
                    margin-bottom: 40px;
                }

                .c-section-listnews__hook__cta-container {
                    display: flex;

                    @include media-breakpoint-down(md) {
                        flex-direction: column;
                    }
                }
            }
        }
    }
</style>
