<!-----
*
Template
*
------>
<template>
    <div class="c-popup-register" :class="{ active: isActive }">
        <div class="c-popup-register__cover" @click="closePopup"></div>
        <div class="c-popup-register__content">
            <div class="c-popup-register__content__close" @click="closePopup" >
                <close />
            </div>
            <div class="c-popup-register__content__left">
                <h2 class="c-popup-register__content__left__title">{{ $t('popup_register.talent.type') }}</h2>
                <div class="c-popup-register__content__left__intro">{{ $t('popup_register.talent.title') }}</div>
                <div class="c-popup-register__content__left__text">{{ $t('popup_register.talent.text') }}</div>
                <div @click="closePopup">
                    <cta
                        :url="$t('popup_register.talent.cta_url')"
                        :title="$t('popup_register.talent.cta_title')"
                        class="c-popup-register__content__left__cta"
                    />
                </div>
            </div>
            <div class="c-popup-register__content__right">
                <h2 class="c-popup-register__content__right__title">{{ $t('popup_register.company.type') }}</h2>
                <div class="c-popup-register__content__right__intro">{{ $t('popup_register.company.title') }}</div>
                <div class="c-popup-register__content__right__text">{{ $t('popup_register.company.text') }}</div>
                <div @click="closePopup">
                    <cta
                        :url="$t('popup_register.company.cta_url')"
                        :title="$t('popup_register.company.cta_title')"
                        class="c-popup-register__content__right__cta --bordered"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<!-----
*
Script
*
------>
<script>
    import Cta from '../Cta.vue';
    import Close from '../svg/Close';

    import Link from '@/components/svg/Link';

    import { eventHub } from '@/plugins/eventhub'

    export default {
        name: 'popupRegister',
        components: { Cta, Close },
        data: function () {
            return {
                isActive: false
            }
        },
        mounted: function () {
            eventHub.$on('open-popup', (data) => {
                console.log('onnnn')
                this.isActive = data
            })
        },
        methods: {
            closePopup() {
                this.isActive = false
                eventHub.$emit('close-popup', false)
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
    .c-popup-register {
        position: fixed;
        height: 100vh;
        width: 100vw;
        top: 0;
        left: 0;
        background-color: rgba($black, .2);

        display: flex;
        justify-content: center;
        align-items: center;

        opacity: 0;
        visibility: hidden;
        display: none;

        &.active {
            display: flex;
            opacity: 1;
            visibility: visible;
        }

        .c-popup-register__cover {
            height: 100%;
            width: 100%;
            position: absolute;
            top: 0;
            left: 0;
        }

        .c-popup-register__content {
            position: relative;
            display: flex;
            max-width: 90%;
            width: 1000px;
            background-color: $white;
            border-radius: 32px;
            overflow: hidden;

            @include media-breakpoint-down(md) {
                flex-direction: column;
                max-height: calc(90vh - 140px);
                margin-top: 20px;
                overflow-y: auto;
            }

            .c-popup-register__content__close {
                position: absolute;
                top: 15px;
                right: 15px;
                cursor: pointer;
            }

            .c-popup-register__content__left {
                width: 50%;
                background-color: $blue-alt;
                color: $white;
                padding: 80px 60px;

                @include media-breakpoint-down(md) {
                    width: 100%;
                    padding: 20px 10px;
                }

                .c-popup-register__content__left__title {
                    font-size: 1.25rem;
                    margin-bottom: 4px;
                    color: $white;

                    @include media-breakpoint-down(md) {
                        font-size: 1.1rem;
                    }
                }

                .c-popup-register__content__left__intro {
                    font-size: 2rem;
                    line-height: 2.375rem;
                    margin-bottom: 10px;
                    font-family: $font-family-custom;
                    font-weight: 400;

                    @include media-breakpoint-down(md) {
                        font-size: 1.5rem;
                        line-height: 1.8rem;
                    }
                }
                .c-popup-register__content__left__text {
                    font-size: 1rem;
                    margin-bottom: 30px;
                }

                .c-popup-register__content__left__cta {
                    display: table;
                }
            }

            .c-popup-register__content__right {
                width: 50%;
                color: $black;
                padding: 80px 60px;

                @include media-breakpoint-down(md) {
                    width: 100%;
                    padding: 20px 10px;
                }

                .c-popup-register__content__right__title {
                    font-size: 1.25rem;
                    margin-bottom: 4px;
                    color: $orange;

                    @include media-breakpoint-down(md) {
                        font-size: 1.1rem;
                    }
                }

                .c-popup-register__content__right__intro {
                    font-size: 2rem;
                    line-height: 2.375rem;
                    margin-bottom: 10px;
                    font-family: $font-family-custom;
                    font-weight: 400;

                    @include media-breakpoint-down(md) {
                        font-size: 1.5rem;
                        line-height: 1.8rem;
                    }
                }
                .c-popup-register__content__right__text {
                    font-size: 1rem;
                    margin-bottom: 30px;
                }

                .c-popup-register__content__right__cta {
                    display: table;
                }
            }
        }
    }
</style>