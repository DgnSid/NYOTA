<!-----
*
Template
*
------>
<template>
    <aside class="navigation">
        <ul>
            <li class="navigation__item">
                <nuxt-link :to="$t('menu.about_url')" class="header__inner__menu__element a-stagger-element__header">{{$t('menu.about_title')}}</nuxt-link>
            </li>
            <li class="navigation__item">
                <nuxt-link :to="$t('menu.talent_url')" class="header__inner__menu__element a-stagger-element__header">{{$t('menu.talent_title')}}</nuxt-link>
            </li>
            <li class="navigation__item">
                <nuxt-link :to="$t('menu.company_url')" class="header__inner__menu__element a-stagger-element__header">{{$t('menu.company_title')}}</nuxt-link>
            </li>
            <li class="navigation__item">
                <nuxt-link :to="$t('menu.contact_url')" class="header__inner__menu__element a-stagger-element__header">{{$t('menu.contact_title')}}</nuxt-link>
            </li>
            <li class="navigation__item">
                <nuxt-link :to="$t('menu.news_url')" class="header__inner__menu__element a-stagger-element__header">{{$t('menu.news_title')}}</nuxt-link>
            </li>
            <li>
                <nuxt-link
                    v-for="locale in availableLocales"
                    :key="locale.code"
                    :to="switchLocalePath(locale.code)"
                >
                    <span>{{ locale.code }}</span>
                    <arrow-down />
                </nuxt-link>
            </li>
        </ul>
        <div  class="navigation__bottom">
            <div v-if="this.$auth.loggedIn" class="header__inner__menu__element --orange">
                <nuxt-link v-if="currentUser.user_type == 'Talent'" :to="$t('menu.profile_talent_url') + currentUser.user_id" class="a-stagger-element__header">{{$t('menu.profile_title')}}</nuxt-link>
                <nuxt-link v-else :to="$t('menu.profile_company_url') + user_id" class="a-stagger-element__header">{{$t('menu.profile_title')}}</nuxt-link>
                <span class="mx-xs a-stagger-element__header">|</span>
                <span @click="logOut" :to="$t('menu.disconnect_url')" class="a-stagger-element__header">{{$t('menu.disconnect_title')}}</span>
            </div>
            <div v-else class="header__inner__menu__element --orange">
                <span class="a-stagger-element__header" @click="openPopup">
                    <span>{{$t('menu.register_title')}}</span>
                    <arrow-down />
                </span>
                <span class="mx-xs a-stagger-element__header">|</span>
                <nuxt-link :to="$t('menu.login_url')" class="a-stagger-element__header">{{$t('menu.login_title')}}</nuxt-link>
            </div>
        </div>
    </aside>
</template>

<!-----
*
Script
*
------>
<script>

    import { mapMutations } from 'vuex'

    import ArrowDown from '@/components/svg/ArrowDown'

    import { eventHub } from '@/plugins/eventhub'

    export default {
        data() {
            return {
                tl: null,
                isOpen: false
            }
        },
        components: { ArrowDown },
        created() {
            this.$nuxt.$on('burgerClicked', ($event) => {
                this.handleAnimation($event);
                this.toggleHiddenOnBody();
            })
        },
        methods: {
            handleAnimation(e) {

                if (this.isOpen) {
                    this.tl.reverse();
                    this.isOpen = false;
                } else {
                    this.tl.play();
                    this.isOpen = true;
                }
                
            },
            ...mapMutations('burger', ['closeBurger']),
			openPopup() {
                eventHub.$emit('open-popup', true)
            },
        },
        mounted() {
            const gsap = this.$gsap;
            this.tl = new gsap.timeline({ paused: true})

            this.tl.set('.navigation', {display: "flex"}, "start")
                   .from('.navigation', 0.6, {scaleY: 0, ease: "Power2.easeOut"}, "+=0.2")
                   .staggerFrom('.navigation ul li', 0.6, {autoAlpha: 0, y:30, ease: "Power1.easeOut"}, 0.15, "-=0.4")
                   
        },
        watch: {
            '$route' () {
                this.tl.reverse();
                this.isOpen = false;
                this.closeBurger();
                this.removeHiddenOnBody();
            }
        },
        computed: {
            availableLocales () {
                return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
            }
        },
    };
</script> 

<!-----
*
Style scoped
*
------>
<style lang="scss" scoped>

    .navigation {
        position: fixed;

        top: 0;
        left: 0;

        width: 100%;
        height: 100%;

        background-color: $white;

        color: $white;

        display: none;
        align-items: center;
        justify-content: center;
        
        z-index: 8;

        will-change: transform;
        transform-origin: top left;

        ul {
            margin-bottom: 0;

            li {
                text-align: center;

                & + li {
                    margin-top: 30px;
                }

                a {
                    font-size: 24px;
                    color: $black;

                    opacity: 0.6;

                    transition: opacity 0.3s ease;

                    &:hover {
                        opacity: 1;
                    }
                }
            }
        }

        .navigation__bottom {
            position: absolute;
            bottom: 10px;
            left: 50%;
            transform: translateX(-50%);

            color: $orange;

            a {
                color: $orange;
            }
        }
    }

</style>