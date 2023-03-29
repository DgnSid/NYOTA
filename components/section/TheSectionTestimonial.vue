<template>
    <section class="c-section-testimonials">
        <h2 class="c-section-testimonials__title a-stagger-element__testimonials">{{title}}</h2>
        
        <div class="container">
            <div class="row no-gutters">
                <div class="col-lg-22 offset-lg-1 a-stagger-element__testimonials">
                    <div v-swiper="swiperOptions">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide" v-for="(element, index) in slides" :key="index">
                                <cardTestimonial
                                    :quote="element.quote"
                                    :firstname="element.name"
                                    :role="element.job"
                                    :image="element.photo"
                                />
                            </div>
                        </div>
                    </div>
                    <button class="slider__navigation-controls swiper__prev">
                        <svg width="5" height="8" viewBox="0 0 5 8" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.03456 0.973174C3.98988 0.928375 3.9292 0.903198 3.86593 0.903198C3.80265 0.903198 3.74198 0.928375 3.69729 0.973174L0.839066 3.8314C0.794267 3.87609 0.76909 3.93676 0.76909 4.00003C0.76909 4.06331 0.794267 4.12399 0.839066 4.16867L3.69729 7.0269C3.79043 7.12003 3.94143 7.12003 4.03456 7.0269C4.1277 6.93376 4.1277 6.78276 4.03456 6.68963L1.3445 4.00003L4.03456 1.31044C4.07936 1.26576 4.10454 1.20508 4.10454 1.14181C4.10454 1.07853 4.07936 1.01786 4.03456 0.973174Z"/>
                        </svg>
                    </button>
                    <button class="slider__navigation-controls swiper__next">
                        <svg width="5" height="8" viewBox="0 0 5 8" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.965438 0.973174C1.01012 0.928375 1.0708 0.903198 1.13407 0.903198C1.19735 0.903198 1.25802 0.928375 1.30271 0.973174L4.16093 3.8314C4.20573 3.87609 4.23091 3.93676 4.23091 4.00003C4.23091 4.06331 4.20573 4.12399 4.16093 4.16867L1.30271 7.0269C1.20957 7.12003 1.05857 7.12003 0.965438 7.0269C0.872304 6.93376 0.872304 6.78276 0.965438 6.68963L3.6555 4.00003L0.965438 1.31044C0.92064 1.26576 0.895462 1.20508 0.895462 1.14181C0.895462 1.07853 0.92064 1.01786 0.965438 0.973174Z"/>
                        </svg>
                    </button>

                    
                    <div class="swiper-pagination"></div>
                </div>
            </div>
        </div>
        

        <div class="c-section-testimonials__cta-container a-stagger-element__testimonials">
            
            <cta v-if="cta"
                :url="cta.url"
                :title="cta.title"
                class="--bordered"
            />
            
        </div>

        <div class="swiper-pagination-bullet"></div>
    </section>
</template>

<script>
    import { gsap } from "gsap";
    import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

    if (process.client) {
        gsap.registerPlugin(ScrollTrigger);
    }

    import Cta from '../Cta.vue';
    import cardTestimonial from '../card/cardTestimonial.vue';
    import { directive } from 'vue-awesome-swiper'

    export default {
        directives: {
            swiper: directive
        },
        components: { Cta, cardTestimonial },
        props: {
            title: String,
            slides: Array,
            cta: Object,
        },
        data() {
            return {
                swiperOptions: {
                    autoplay: {
                        delay: 10000,
                    },
                    watchOverflow: true,
                    loop: true,
                    slidesPerView: 1,
                    slidesPerGroup: 2,
                    spaceBetween: 30,
                    speed: 1000,
                    pagination: {
                        el: '.swiper-pagination',
                        type: 'bullets',
                        clickable: true,
                    },
                    navigation: {
                        nextEl: '.swiper__next',
                        prevEl: '.swiper__prev',
                    },
                    breakpoints: {
                        767: {
                            slidesPerView: 2,
                            spaceBetween: 25
                        }
                    },
                    on: {
                        init: function () {
                            console.log(this)

                            if(window.innerWidth >= 767) {
                                if (this.slides.length - this.loopedSlides*2 <= 2) {                
                                    this.el.closest(".a-stagger-element__testimonials").querySelector(".swiper-container").style.pointerEvents = "none";
                                    this.el.closest(".a-stagger-element__testimonials").querySelector(".swiper__prev").setAttribute('hidden', '');
                                    this.el.closest(".a-stagger-element__testimonials").querySelector(".swiper__next").setAttribute('hidden', '');
                                    this.el.closest(".a-stagger-element__testimonials").querySelector(".swiper-pagination").setAttribute('hidden', '');
                                    this.params.autoplay.enabled = false
                                }
                            }
                        }
                    }
                }
            }
        },
        mounted() {
            const gsap = this.$gsap;
            this.tl = new gsap.timeline({
                scrollTrigger: {
                    trigger: ".c-section-testimonials",
                }
            })

            this.tl.set('.a-stagger-element__testimonials', {autoAlpha: 0, y:30})
            this.tl.staggerTo('.a-stagger-element__testimonials', 0.6, {autoAlpha: 1, y:0, ease: "Power1.easeOut"}, .15, "=0.4")
                   
        },
    }

</script>

<style lang="scss" scoped>

    .c-section-testimonials {
        background-color: $white;
        padding: 80px 0;

        @include media-breakpoint-down(md) {
            padding: 20px 20px;
        }

        .c-section-testimonials__title {
            font-family: $font-family-custom;
            text-align: center;
            color: $black;
            font-size: 4rem;
            line-height: 4.25rem;
            margin-bottom: 80px;
            max-width: 925px;
            margin: 0 auto;
            font-weight: 400;

            @include media-breakpoint-down(md) {
                font-size: 2.225rem;
                line-height: 2.5rem;
            }
        }

        .swiper-slide {
            margin-top: 40px;
            height: auto;
            display: flex;
        }
    }

    .c-section-testimonials__cta-container {
        display: table;
        margin: 40px auto 0 auto;
    }

    .slider__navigation {

        ul {
            display: flex;
            align-items: center;

            li {

                & + li {
                    margin-left: 15px;
                }
            }
        }
    }
    
    .swiper-pagination {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);     
    }

    .slider__navigation-controls {
        display: flex;
        align-items: center;
        justify-content: center;

        position: absolute;

        
        top: 50%;
        transform: translateX(-50%);
        z-index: 2;

        &.swiper__next {
            background: $gradientOrange;
            transform: translateX(50%);
            right: 0;
        }

        &.swiper__prev {
            background: $gradientOrange;

            left: 0;
        }

        width: 40px;
        height: 40px;

        border: solid 1px $white;

        border-radius: 100%;

        cursor: pointer;

        transition: background-color 0.3s ease-out;

        svg {
            transition: fill 0.3s ease-out;
        }

        &:hover {
            background-color: $white;

            svg {
                fill: $black;
            }
        }
    }

</style>
