<template>
    <div>
        <div v-swiper="swiperOptions">
            <div class="swiper-wrapper">
                <slot name="slides"></slot>
            </div>
        </div>
        <div class="slider__navigation mt-md">
            <ul>
                <li>
                    <button class="slider__navigation-controls swiper__prev">
                        <svg width="5" height="8" viewBox="0 0 5 8" fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.03456 0.973174C3.98988 0.928375 3.9292 0.903198 3.86593 0.903198C3.80265 0.903198 3.74198 0.928375 3.69729 0.973174L0.839066 3.8314C0.794267 3.87609 0.76909 3.93676 0.76909 4.00003C0.76909 4.06331 0.794267 4.12399 0.839066 4.16867L3.69729 7.0269C3.79043 7.12003 3.94143 7.12003 4.03456 7.0269C4.1277 6.93376 4.1277 6.78276 4.03456 6.68963L1.3445 4.00003L4.03456 1.31044C4.07936 1.26576 4.10454 1.20508 4.10454 1.14181C4.10454 1.07853 4.07936 1.01786 4.03456 0.973174Z"/>
                        </svg>
                    </button>
                </li>
                <li>
                    <button class="slider__navigation-controls swiper__next">
                        <svg width="5" height="8" viewBox="0 0 5 8" fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.965438 0.973174C1.01012 0.928375 1.0708 0.903198 1.13407 0.903198C1.19735 0.903198 1.25802 0.928375 1.30271 0.973174L4.16093 3.8314C4.20573 3.87609 4.23091 3.93676 4.23091 4.00003C4.23091 4.06331 4.20573 4.12399 4.16093 4.16867L1.30271 7.0269C1.20957 7.12003 1.05857 7.12003 0.965438 7.0269C0.872304 6.93376 0.872304 6.78276 0.965438 6.68963L3.6555 4.00003L0.965438 1.31044C0.92064 1.26576 0.895462 1.20508 0.895462 1.14181C0.895462 1.07853 0.92064 1.01786 0.965438 0.973174Z"/>
                        </svg>
                    </button>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>

    import { directive } from 'vue-awesome-swiper'

    export default {
        directives: {
            swiper: directive
        },
        data() {
            return {
                swiperOptions: {
                    slidesPerView: 1,
                    spaceBetween: 30,
                    speed: 1000,
                    navigation: {
                        nextEl: '.swiper__next',
                        prevEl: '.swiper__prev',
                    },
                    breakpoints: {
                        767: {
                            slidesPerView: 3,
                            spaceBetween: 30
                        }
                    }
                }
            }
        },
    }

</script>

<style lang="scss" scoped>

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
    
    .slider__navigation-controls {
        display: flex;
        align-items: center;
        justify-content: center;

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
