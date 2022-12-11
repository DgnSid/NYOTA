<!-----
*
Template
*
------>
<template>
    <header class="header" ref="header">
        <div class="container">            
            <div class="header__inner">
                <nuxt-link class="a-stagger-element__header" to="/">
                    <img src="/logo.png" alt="Nyota logo" />
                </nuxt-link>
                <div class="header__inner__menu">
                    <nuxt-link :to="$t('menu.about_url')" class="header__inner__menu__element a-stagger-element__header">{{$t('menu.about_title')}}</nuxt-link>
                    <nuxt-link :to="$t('menu.talent_url')" class="header__inner__menu__element a-stagger-element__header">{{$t('menu.talent_title')}}</nuxt-link>
                    <nuxt-link :to="$t('menu.company_url')" class="header__inner__menu__element a-stagger-element__header">{{$t('menu.company_title')}}</nuxt-link>
                    <nuxt-link :to="$t('menu.contact_url')" class="header__inner__menu__element a-stagger-element__header">{{$t('menu.contact_title')}}</nuxt-link>
                    <nuxt-link :to="$t('menu.news_url')" class="header__inner__menu__element a-stagger-element__header">{{$t('menu.news_title')}}</nuxt-link>
                    <div class="header__inner__menu__element --orange">
                        <nuxt-link class="a-stagger-element__header" to="/">
                            <span>{{$t('menu.register')}}</span>
                            <arrow-down />
                        </nuxt-link>
                        <span class="mx-xs a-stagger-element__header">|</span>
                        <nuxt-link to="/" class="a-stagger-element__header">{{$t('menu.login')}}</nuxt-link>
                    </div>
                    <nuxt-link
                        class="header__inner__menu__element a-stagger-element__header"
                        v-for="locale in availableLocales"
                        :key="locale.code"
                        :to="switchLocalePath(locale.code)">
                        
                        <span>{{ locale.code }}</span>
                        <arrow-down />
                    </nuxt-link>
                </div>
                <the-burger  class="header__inner__burger" />
            </div>
        </div>
    </header>
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

    import ArrowDown from '@/components/svg/ArrowDown';

    export default {
        components: { ArrowDown },
        beforeMount () {
            window.addEventListener('scroll', this.handleScroll);
        },
        beforeDestroy () {
            window.removeEventListener('scroll', this.handleScroll);
        },
        data: function () {
            return {
                active: false
            }
        },
        mounted: function () {
            if(window.scrollY) {
                this.$refs.header.classList.value = this.$refs.header.classList.value + ' active'
            }

            const gsap = this.$gsap;
            this.tl = new gsap.timeline({
                scrollTrigger: {
                    trigger: ".header",
                }
            })

            this.tl.set('.a-stagger-element__header', {autoAlpha: 0, y:30})
            this.tl.staggerTo('.a-stagger-element__header', 0.6, {autoAlpha: 1, y:0, ease: "Power1.easeOut"}, .15, "=0.4")
        },
        methods: {
            handleScroll(e) {
                if(window.scrollY && !this.active) {
                    this.$refs.header.classList.value = this.$refs.header.classList.value + ' active'
                    this.active = true
                } else if(!window.scrollY) {
                    this.$refs.header.classList.remove('active')
                    this.active = false
                }
            }
        },
        computed: {
            availableLocales () {
                return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
            }
        }
    };
</script> 

<!-----
*
Style scoped
*
------>
<style lang="scss" scoped>

    .header {
        position: fixed;

        top: 0;
        left: 0;

        z-index: 9;

        width: 100%;

        padding: 15px 0;

        background-color: transparent;

        transition: background-color .2s ease-out;

        &.active {
            background-color: $white;
        }
    }

    .header__inner {
        display: flex;
        align-items: center;
        justify-content: space-between;

        

        .header__inner__menu {
            display: flex;
            align-items: center;
            color: $black;

            @include media-breakpoint-down(md) {
                display: none;
            }

            .header__inner__menu__element {
                display: flex;
                align-items: center;
                color: $black;
                text-transform: uppercase;
                letter-spacing: 2px;
                font-size: 0.75rem;

                &:hover {
                    color: $orange;
                }

                &:not(:last-child) {
                    padding-right: 48px;
                }

                &.--orange {
                    a {
                        font-weight: 700;
                        color: $orange;
                        display: flex;
                        align-items: center;
                    }

                    span {
                        color: $orange;
                    }
                }
            }
        }

        .header__inner__burger {
            display: none;

            @include media-breakpoint-down(md) {
                display: flex;
                flex-direction: column;
                align-items: center;
                filter: invert(1);
            }
        }
    }

</style>