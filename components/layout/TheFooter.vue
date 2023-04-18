<!-----
*
Template
*
------>
<template>
    <div class="c-footer">       
        <div class="container">
            <div class="c-footer__top">
                <nuxt-link class="c-footer__top__logo a-stagger-element__footer" :to="'/' + currentLang">
                    <img src="/logo-nyota.svg" alt="Nyota logo" />
                </nuxt-link>
                <div  class="c-footer__top__text a-stagger-element__footer">
                    {{$t('footer.baseline')}}
                </div>
                <div  class="c-footer__top__menu a-stagger-element__footer">
                    <nuxt-link :to="$t('footer.menu.about_url')">
                        <span class="c-footer__top__menu__element">{{$t('footer.menu.about')}}</span>
                    </nuxt-link>
                    <nuxt-link :to="$t('footer.menu.talent_url')">
                        <span class="c-footer__top__menu__element">{{$t('footer.menu.talent')}}</span>
                    </nuxt-link>
                    <nuxt-link :to="$t('footer.menu.company_url')">
                        <span class="c-footer__top__menu__element">{{$t('footer.menu.company')}}</span>
                    </nuxt-link>
                </div>
                <div class="c-footer__top__social a-stagger-element__footer">
                    <a :href="$t('footer.menu.facebook_url')">
                        <div class="c-footer__top__social__element">
                            <Facebook />
                        </div>
                    </a>
                    <a :href="$t('footer.menu.instagram_url')">
                        <div class="c-footer__top__social__element">
                            <Instagram />
                        </div>
                    </a>
                    <a :href="$t('footer.menu.linkedin_url')">
                        <div class="c-footer__top__social__element">
                            <Linkedin />
                        </div>
                    </a>
                </div>
                <div class="a-stagger-element__footer">
                    <cta 
                        url="/contact"
                        :title="$t('footer.contact')"
                        class="--bordered"
                    />
                </div>
            </div>
        </div>
        <div class="c-footer__bottom">
            <span class="c-footer__bottom__element a-stagger-element__footer">© {{current_year}} Nyota</span>
            <nuxt-link class="c-footer__bottom__element a-stagger-element__footer" :to="$t('footer.mentions_url')">{{$t('footer.mentions')}}</nuxt-link>
            <nuxt-link class="c-footer__bottom__element a-stagger-element__footer" :to="$t('footer.rgpd_url')">{{$t('footer.rgpd')}}</nuxt-link>
        </div>
    </div>
</template>

<!-----
*
Script
*
------>
<script>
    import { gsap } from "gsap";
    import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

    if (process.client) {
        gsap.registerPlugin(ScrollTrigger);
    }

    import Facebook from '@/components/svg/Facebook';
    import Instagram from '@/components/svg/Instagram';
    import Linkedin from '@/components/svg/Linkedin';
    import Cta from '../Cta.vue';
    
    export default {
        components: { Cta, Facebook, Instagram, Linkedin },
        data: () => {
            return {
                current_year: new Date().getFullYear(),
            }
        },
        mounted() {
            const gsap = this.$gsap;
            this.tl = new gsap.timeline({
                scrollTrigger: {
                    trigger: ".c-footer",
                }
            })

            this.tl.set('.a-stagger-element__footer', {autoAlpha: 0, y:30})
            this.tl.staggerTo('.a-stagger-element__footer', 0.6, {autoAlpha: 1, y:0, ease: "Power1.easeOut"}, .15, "=0.4")
                   
        },
        computed: {
            currentLang () {
                return this.$i18n.locale == 'en' ? this.$i18n.locale : ''
            },
        }
    };
</script> 

<!-----
*
Style scoped
*
------>
<style lang="scss" scoped>
    .c-footer {
        background: $white;

        .c-footer__top {
            padding-top: 50px;
            padding-bottom: 20px;
            display: flex;
            justify-content: space-between;
            color: $black;

            @include media-breakpoint-down(md) {
                flex-direction: column;
                padding: 20px 0;
            }

            .c-footer__top__logo {
                @include media-breakpoint-down(md) {
                    margin: 0 auto;
                }
            }

            .c-footer__top__text {
                width: 300px;

                @include media-breakpoint-down(md) {
                    text-align: center;
                    margin: 20px auto;
                }
            }

            .c-footer__top__menu {
                display: flex;
                flex-direction: column;

                @include media-breakpoint-down(md) {
                    align-items: center;
                }

                .c-footer__top__menu__element {
                    display: block;
                    color: $dark-grey;
                    text-transform: uppercase;
                    font-size: .75rem;
                    letter-spacing: 2px;
                    

                    transition: transform .2s ease-out;

                    &:hover {
                        color: $orange;
                    }
                }
            }

            .c-footer__top__social {
                display: flex;

                @include media-breakpoint-down(md) {
                    justify-content: center;
                    padding: 20px 0;
                }
                .c-footer__top__social__element {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 48px;
                    width: 48px;
                    border-radius: 100%;
                    background: $gradientOrange;
                    margin: 0 5px;
                    border: 1px solid $orange;

                    &:hover {
                        background: rgba($orange, .5);
                        
                    }
                }                
            }
        } 

        .c-footer__bottom {
            color: $black;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 66px;
            border-top: 1px solid $grey;

            @include media-breakpoint-down(md) {
                height: auto;
                padding: 20px 0;
                flex-direction: column;
            }

            .c-footer__bottom__element {
                padding: 0 30px;
                font-size: 0.75rem;

                &:first-child {
                    color: $orange;
                }
            }

            a {
                color: $black;
                transition: color .2s ease-out;

                &:hover {
                    color: $orange;
                }
            }
        }
    }
</style>