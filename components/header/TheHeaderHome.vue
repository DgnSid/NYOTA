<template>
    <header class="c-header-home">
        <div class="container">
            <div class="row">
                <div :class="big ? 'col-lg-11 offset-lg-1' : list ? 'col-lg-10 offset-lg-1' : 'col-lg-13 offset-lg-1'">
                    <h1 class="c-header-home__title" :class="class_title">
                        <span class="--intro_title a-stagger-element">{{small_title}}</span>
                        <span v-html="big_title" class="a-stagger-element"></span>
                        <b class="a-stagger-element">{{big_title_alt}}</b>
                    </h1>
                    <div class="c-header-home__text a-stagger-element" v-html="text"></div>
                    <div v-if="cta_left" class="c-header-home__ctas">
                        <cta
                            v-if="cta_left" 
                            :url="cta_left.url"
                            :title="cta_left.title"
                            class="a-stagger-element"
                        />
                        <cta
                            v-if="cta_right"
                            :url="cta_right.url"
                            :title="cta_right.title"
                            class="a-stagger-element"
                        />
                    </div>
                    <div v-if="list" class="c-header-home__list-container a-stagger-element">
                        <div class="c-header-home__list-element" v-for="(element, index) in list" :key="index">
                            <svg class="c-header-home__list-element__icon" width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M29 10L15 24L8 17" stroke="url(#paint0_linear_2427_4495)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <defs>
                                <linearGradient id="paint0_linear_2427_4495" x1="8" y1="24" x2="29.0491" y2="10.0742" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#FF7A00"/>
                                <stop offset="0.645833" stop-color="#FB9B11"/>
                                </linearGradient>
                                </defs>
                            </svg>
                            <span class="c-header-home__list-element__text">{{element}}</span>
                        </div>
                        <div v-if="list" class="c-header-home__list-cta-container">
                            <cta
                                v-if="cta"
                                :url="cta.url"
                                :title="cta.title"
                                class="--bordered"
                            />
                        </div>
                    </div>
                </div>
                <div v-if="bulb" class="c-header-home__bulb a-stagger-element">
                    <light-bulb />
                </div>
                <div :class="big ? 'col-lg-7 offset-lg-5' : list ? 'col-lg-7 offset-lg-5' : 'col-lg-7 offset-lg-2'" class="c-header-home__images md-down-mt-md a-stagger-element">
                    <ImageBordered 
                        :url="this.$config.API_URL + image_top.url"
                        :alt="image_top.alt"
                        class_string="--right --h300"
                    />
                    <ImageBordered 
                        :url="this.$config.API_URL + image_bottom.url"
                        :alt="image_bottom.alt"
                        class_string="--left --h300"
                    />
                </div>
                <div v-if="ellipse" class="c-header-home__ellipse a-stagger-element">
                    <ShapeEllipse
                        :size="358"
                    />
                </div>
                <div v-if="logo" class="c-header-home__logo a-stagger-element">
                    <Logo />
                </div>
            </div>
        </div>
        <span class="c-header-home__share" v-if="share">
            <a href="#" class="" >
                <IconShare />
            </a>
        </span>
    </header>
</template>

<script>
    import Cta from '../Cta.vue';
    import ImageBordered from '../ImageBordered.vue';
    import LightBulb from '@/components/svg/LightBulb';
    import Logo from '@/components/svg/Logo';
    import IconShare from '@/components/svg/IconShare';
    import ShapeEllipse from '../ui/ShapeEllipse';

    export default {
        name: 'HeaderHome',
        components: { Cta, ImageBordered, LightBulb, Logo, ShapeEllipse, IconShare },
        props: {
            small_title: String,
            class_title: String,
            big_title: String,
            big_title_alt: String,
            text: String,
            image_top: Object,
            image_bottom: Object,
            cta: Object,
            list: Array,
            cta_left: Object,
            cta_right: Object,
            ellipse: Boolean,
            bulb: Boolean,
            logo: Boolean,
            big: Boolean,
            share: Boolean,
        },
        mounted() {
            const gsap = this.$gsap;
            this.tl = new gsap.timeline()

            this.tl.set('.a-stagger-element', {autoAlpha: 0, y:30})
            this.tl.staggerTo('.a-stagger-element', 0.6, {autoAlpha: 1, y:0, ease: "Power1.easeOut"}, .15, "=0.4")
        },
    }
</script>

<!-----
*
Style scoped
*
------>
<style lang="scss" scoped>
    .c-header-home {
        position: relative;
        z-index: 2;
        height: 100vh;

        display: flex;
        align-items: center;

        background-color: $white;
        background-image: url('/gradient-home.png');
        background-position: center;
        background-size: cover;

        @media screen and (max-height: 800px) {
            height: calc(100vh + 180px);
        }

        .c-header-home__share {
            cursor: pointer;
            position: absolute;
            bottom: 0;
            right: 40px;
            transform: translateY(50%);
            height: 90px;
            width: 90px;
            border-radius: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: $orange;
            z-index: 2;
            border: 1px $orange solid;

            &:hover {
                background-color: $white;

                svg {
                    filter: invert(1);
                }
            }
        }

        @include media-breakpoint-down(md) {
            height: auto;
            padding-top: 120px;
        }

        .c-header-home__title {
            font-family: $font-family-default;
            font-size: 5.75rem;
            line-height: 4.875rem;
            font-weight: 800;
            margin-bottom: 24px;
            color: $black;

            span.--intro_title {
                display: block;
                font-family: $font-family-custom;
                font-weight: 400;
                font-size: 1.75rem;
                line-height: 2.375rem;
                margin-bottom: 10px;
                background: $gradientOrange;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }

            strong, b {
                background: $gradientOrange;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }

            &.--small {
                font-size: 3.6rem;
                line-height: 3.688rem;

                @include media-breakpoint-down(md) {
                    font-size: 2.125rem;
                    line-height: 2.5rem;
                }
            }

            @include media-breakpoint-down(md) {
                display: flex;
                flex-direction: column;

                font-size: 2.525rem;
                line-height: 2.6rem;
            }

            @include media-breakpoint-down(sm) {
                font-size: 2.825rem;
                line-height: 3rem;
            }
        }

        .c-header-home__text {
            font-size: 1.125rem;
            line-height: 1.5rem;
            margin-bottom: 44px;
            color: $dark-grey;

            ::v-deep b,
            ::v-deep strong,
            ::v-deep span {
                background: $gradientOrange;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }
        }

        .c-header-home__ctas {
            display: flex;
            position: relative;
            z-index: 1;

            @include media-breakpoint-down(sm) {
               flex-direction: column;
               align-items: flex-start;
            }
        }

        .c-header-home__list-container {
            position: relative;
            background-color: $white;
            border-radius: 40px;
            padding: 40px;

            @include media-breakpoint-down(md) {
                margin-bottom: 60px;
            }

            .c-header-home__list-element {
                display: flex;
                
                &:not(:last-child) {
                    margin-bottom: 10px;
                }
                .c-header-home__list-element__icon {
                    margin-right: 20px;
                }
                .c-header-home__list-element__text {
                    color: $black;
                }
            }
        }

        .c-header-home__list-cta-container {
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
        }

        .c-header-home__ellipse {
            position: absolute;
            right: -100px;
            top: 50%;
            transform: translateY(-50%);

            @include media-breakpoint-down(md) {
                display: none;
            }
        }

        .c-header-home__images {
            z-index: 2;
            position: relative;

            @include media-breakpoint-down(md) {
                display: flex;

                .c-image-container:first-child {
                    margin-right: 10px;
                }
            }
        }

        .c-header-home__bulb {
            position: absolute;
            left: 55%;
            top: 50%;
            transform: translate(-50%, -50%);

            @include media-breakpoint-down(md) {
                display: none;
            }
        }

        .c-header-home__logo {
            position: absolute;
            left: 60%;
            bottom: 0;
            transform: translate(-50%, 0);

            @include media-breakpoint-down(md) {
                display: none;
            }
        }
    }
</style>
