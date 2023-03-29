<template>
    <section class="c-section-talent-curriculum">
        <div class="c-section-talent-curriculum__logo" >
            <svg width="344" height="451" viewBox="0 0 344 451" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M248.905 400.043C247.207 398.345 245.972 396.129 245.448 393.642L212.046 231.974L63.9571 211.497C58.3823 210.72 54.0013 206.393 53.1688 200.818C52.3364 195.243 55.2743 189.841 60.3776 187.53L195.709 125.802L119.178 49.9244L119.15 49.897C115.262 46.0087 114.32 40.1057 116.822 35.194C119.351 30.3098 124.727 27.6176 130.138 28.559L336.041 64.1668C341.507 65.1082 345.697 69.5163 346.447 75.0091C347.17 80.4745 344.259 85.795 339.238 88.0782L239.383 133.607L319.94 213.455L363.143 112.365C365.317 107.234 370.637 104.16 376.184 104.855C381.732 105.497 386.194 109.741 387.163 115.235L423.094 318.953C424.035 324.364 421.398 329.74 416.541 332.297C411.656 334.826 405.726 333.911 401.811 330.05L328.62 257.513L269.412 396.129C267.265 401.178 262.055 404.253 256.562 403.666C253.584 403.359 250.931 402.014 248.932 400.015M231.532 211.775C233.257 213.5 234.464 215.689 234.989 218.176L262.037 349.123L309.37 238.318L214.986 144.751L110.492 192.4L224.339 208.125C227.126 208.514 229.67 209.804 231.586 211.721M291.661 81.9854L165.425 60.1392L220.298 114.521L291.689 81.9582L291.661 81.9854ZM369.785 161.254L339.353 232.541L391.487 284.185L369.813 161.227L369.785 161.254Z" fill="white"/>
            </svg>
        </div>
        <div class="container">
            <div class="offset-lg-1 col-lg-23 md-down-p-0">
                <div class="c-section-talent-curriculum-container">
                    <nuxt-link class="c-section-talent-curriculum-container__back" :to="$t('pagetalentsingle.backtotalents_url')">
                        <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.76287 13.214C6.95814 13.4093 7.27472 13.4093 7.46998 13.214C7.66524 13.0188 7.66524 12.7022 7.46998 12.5069L2.46307 7.50002H15.5815C15.8577 7.50002 16.0815 7.27617 16.0815 7.00002C16.0815 6.72388 15.8577 6.50002 15.5815 6.50002H2.46307L7.46998 1.49311C7.66524 1.29785 7.66524 0.981267 7.46998 0.786005C7.27472 0.590743 6.95814 0.590743 6.76287 0.786005L0.902407 6.64647C0.80864 6.74024 0.75596 6.86742 0.75596 7.00002C0.75596 7.13263 0.80864 7.25981 0.902407 7.35358L0.902539 7.35371L6.76287 13.214Z" fill="url(#paint0_linear_2525_2170)"/>
                        <defs>
                        <linearGradient id="paint0_linear_2525_2170" x1="16.0815" y1="0.639558" x2="-1.14079" y2="9.79092" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#FF7A00"/>
                        <stop offset="0.645833" stop-color="#FB9B11"/>
                        </linearGradient>
                        </defs>
                        </svg>
                        <span>{{$t('pagetalentsingle.backtotalents_text')}}</span>
                    </nuxt-link>
                    <div class="c-section-talent-curriculum__top">
                         <div class="c-section-talent-curriculum__top__photo-container">
                                <img class="c-section-talent-curriculum__top__photo" :src="this.$config.API_URL + mutable_photo.contentUrl" :alt="'Avatar of' + data.firstname + ' ' + data.lastname " />
                         </div>
                         <h1 class="c-section-talent-curriculum__top__name">{{ data.firstname }} {{ data.lastname }}</h1>
                         <div class="c-section-talent-curriculum__top__school">{{ data.school }}</div>
                         <div class="c-section-talent-curriculum__top__location">{{ data.country.name }}</div>
                    </div>
                    <div class="c-section-talent-curriculum__bottom">
                        <div class="offset-lg-2 col-lg-20 p-0">
                            <div class="c-section-talent-curriculum__bottom-container">
                                <div class="row">
                                    <div class="col-lg-8">
                                        <div class="c-section-talent-curriculum__bottom-container__title">
                                            {{ $t('pagetalentsingle.formation') }}
                                        </div>
                                        <div class="c-section-talent-curriculum__bottom-container__text">
                                            {{ data.diploma }}
                                        </div>
                                    </div>
                                    <div class="col-lg-8">
                                        <div class="c-section-talent-curriculum__bottom-container__title">
                                            {{ $t('pagetalentsingle.experience') }}
                                        </div>
                                        <div class="c-section-talent-curriculum__bottom-container__text">
                                            {{ data.yearsOfExperience }} {{ $t('pagetalentsingle.years') }}
                                        </div>
                                    </div>
                                    <div class="col-lg-8">
                                        <div class="c-section-talent-curriculum__bottom-container__title">
                                            {{ $t('pagetalentsingle.post') }}
                                        </div>
                                        <div class="c-section-talent-curriculum__bottom-container__text">
                                            {{ data.contract.name }}
                                        </div>
                                    </div>
                                    <div class="col-lg-8">
                                        <div class="c-section-talent-curriculum__bottom-container__title">
                                            {{ $t('pagetalentsingle.sector') }}
                                        </div>
                                        <div class="c-section-talent-curriculum__bottom-container__list">
                                            <div class="c-section-talent-curriculum__bottom-container__list__element">
                                                {{ data.newIndustry.name }}
                                            </div>
                                        </div>
                                    </div>
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

    import Cta from '@/components/Cta.vue'
    import Logo from '../svg/Logo.vue';

    export default {
        name: 'HeaderTalentCurriculum',
        components: { Cta, Logo },
        data () {
            return {
                mutable_photo: {},
                mutable_country: '',
            }
        },
        props: {
            data: Object,
        },
        async mounted() {
            console.log('data ', this.$props.data)
            const gsap = this.$gsap;
            this.tl = new gsap.timeline({
                scrollTrigger: {
                    trigger: ".c-section-testimonials",
                }
            })

            await this.$axios.$get(this.$props.data.profilePicture)
            .then((res) => {
                console.log(res)
                this.mutable_photo = res
            })
            .catch((err) => {
                console.error(err)
            });

            await this.$axios.$get('/api/countries/' + this.$props.data.country)
            .then((res) => {
                console.log(res)
                this.mutable_country = res.name
            })
            .catch((err) => {
                console.error(err)
            });

            this.tl.set('.a-stagger-element__testimonials', {autoAlpha: 0, y:30})
            this.tl.staggerTo('.a-stagger-element__testimonials', 0.6, {autoAlpha: 1, y:0, ease: "Power1.easeOut"}, .15, "=0.4")
                   
        },
    }

</script>

<style lang="scss" scoped>

    .c-section-talent-curriculum {
        background-color: $white;
        background-image: url('/gradient-home.png');
        background-position: center;
        background-size: cover;
        padding-top: 200px;

        .c-section-talent-curriculum__logo {
            position: absolute;
            top: 0;
            right: 0;

            @include media-breakpoint-down(md) {
                display: none;
            }
        }
       

        .c-section-talent-curriculum-container {
            position: relative;
            background-color: $white;
            border-top-left-radius: 40px;
            border-top-right-radius: 40px;
            padding-top: 40px;
            padding-bottom: 48px;

            .c-section-talent-curriculum-container__back {
                color: $orange;
                position: absolute;
                top: 0;
                left: 0;
                padding-bottom: 20px;
                transform: translateY(-100%);

                span {
                    margin-left: 10px;
                }
            }
        }

        .c-section-talent-curriculum__top {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            .c-section-talent-curriculum__top__photo {
                object-fit: cover;
                object-position: center;
                height: 100%;
                width: 100%;
            }

            .c-section-talent-curriculum__top__photo-container {
                height: 100px;
                width: 100px;
                border-radius: 100%;
                background-color: $white;
                border: 4px solid $orange;
                overflow: hidden;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .c-section-talent-curriculum__top__name {
                color: $black;
                font-family: $font-family-custom;
                font-size: 4rem;
                line-height: 4rem;
                margin-bottom: 16px;
                font-weight: 400;
            }

            .c-section-talent-curriculum__top__school {
                color: $orange;
                margin-bottom: 0;
                font-size: 1.125rem;
                line-height: 1.125rem;
            }

            .c-section-talent-curriculum__top__location {
                color: $black;
                font-size: 1.5rem;
                font-weight: 200;
                margin-bottom: 50px;
            }
        }

        .c-section-talent-curriculum__bottom-container {
            padding: 48px 0;
            border-top: 1px solid $orange;
            border-bottom: 1px solid $orange;
            color: $black;

            @include media-breakpoint-down(md) {
                padding: 48px 10px;
            }

            .c-section-talent-curriculum__bottom-container__title {
                font-size: 2rem;
                line-height: 2rem;
                font-weight: 200;
                margin-bottom: 8px;
                font-family: $font-family-default;
            }

            .c-section-talent-curriculum__bottom-container__text {
                color: $orange;
                font-weight: 700;
                font-size: 1.125rem;
                line-height: 1.125rem;
                margin-bottom: 40px;
            }

            .c-section-talent-curriculum__bottom-container__list {
                display: flex;

                .c-section-talent-curriculum__bottom-container__list__element {
                    background: $gradientOrange;
                    color: $white;
                    border-radius: 40px;
                    text-transform: uppercase;
                    padding: 9px 16px;
                    font-weight: 700;
                    font-size: .8rem;

                    &:not(:last-child) {
                        margin-right: 8px;
                    }
                }
            }
        }
    }
</style>
