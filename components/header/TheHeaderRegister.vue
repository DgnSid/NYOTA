<template>
    <header class="c-header-register">
        <div class="container">
            <div class="c-header-register__content">
                <div class="row">
                    <div class="offset-lg-6 col-lg-12">
                        <h1 class="c-header-register__title a-stagger-element__header-small">
                            {{title}}
                        </h1>
                        <div class="c-header-register__text a-stagger-element__header-small">
                            {{text}}
                        </div>
                    </div>
                </div>
            </div>
        </div>        
        <div v-if="logo" class="c-header-register__logo a-stagger-element__header-small">
            <svg width="339" height="513" viewBox="0 0 339 513" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M248.905 462.043C247.207 460.345 245.972 458.129 245.448 455.642L212.046 293.974L63.9571 273.497C58.3823 272.72 54.0013 268.393 53.1688 262.818C52.3364 257.243 55.2743 251.841 60.3776 249.53L195.709 187.802L119.178 111.924L119.15 111.897C115.262 108.009 114.32 102.106 116.822 97.194C119.351 92.3098 124.727 89.6176 130.138 90.559L336.041 126.167C341.507 127.108 345.697 131.516 346.447 137.009C347.17 142.475 344.259 147.795 339.238 150.078L239.383 195.607L319.94 275.455L363.143 174.365C365.317 169.234 370.637 166.16 376.184 166.855C381.732 167.497 386.194 171.741 387.163 177.235L423.094 380.953C424.035 386.364 421.398 391.74 416.541 394.297C411.656 396.826 405.726 395.911 401.811 392.05L328.62 319.513L269.412 458.129C267.265 463.178 262.055 466.253 256.562 465.666C253.584 465.359 250.931 464.014 248.932 462.015M231.532 273.775C233.257 275.5 234.464 277.689 234.989 280.176L262.037 411.123L309.37 300.318L214.986 206.751L110.492 254.4L224.339 270.125C227.126 270.514 229.67 271.804 231.586 273.721M291.661 143.985L165.425 122.139L220.298 176.521L291.689 143.958L291.661 143.985ZM369.785 223.254L339.353 294.541L391.487 346.185L369.813 223.227L369.785 223.254Z" fill="white"/>
            </svg>
        </div>
    </header>
</template>

<script>
    import { gsap } from "gsap";
    import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

    if (process.client) {
        gsap.registerPlugin(ScrollTrigger);
    }

    export default {
        name: 'HeaderRegister',
        components: { },
        props: {
            title: String,
            text: String,
            logo: Boolean,
        },
        mounted() {
            const gsap = this.$gsap;
            this.tl = new gsap.timeline({
                scrollTrigger: {
                    trigger: ".c-header-register",
                }
            })

            this.tl.set('.a-stagger-element__header-small', {autoAlpha: 0, y:30})
            this.tl.staggerTo('.a-stagger-element__header-small', 0.6, {autoAlpha: 1, y:0, ease: "Power1.easeOut"}, .15, "=0.4")
                   
        },
    }
</script>

<!-----
*
Style scoped
*
------>
<style lang="scss" scoped>
    .c-header-register {
        position: relative;
        height: 380px;

        display: flex;
        align-items: center;

        background-color: $white;
        background-image: url('/gradient-home.png');
        background-position: center;
        background-size: cover;

        .c-header-register__content {
            padding-top: 60px;
        }

        .c-header-register__title {
            font-family: $font-family-default;
            font-size: 5.75rem;
            line-height: 4.875rem;
            font-weight: 800;
            margin-bottom: 24px;
            margin-right: 20px;
            color: $black;
            text-align: center;

            strong, b {
                background: $gradientOrange;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }

            @include media-breakpoint-down(md) {
                display: flex;
                flex-direction: column;

                font-size: 4.75rem;
                line-height: 3.875rem;
            }

            @include media-breakpoint-down(sm) {
                font-size: 3.75rem;
                line-height: 2.875rem;
            }
        }

        .c-header-register__text {
            color: $black;
            text-align: center;
            max-width: 600px;
        }

        .c-header-register__logo {
            position: absolute;
            position: absolute;
            right: 0;
            bottom: -200px;

            @include media-breakpoint-down(md) {
                display: none;
            }
        }
    }
</style>
