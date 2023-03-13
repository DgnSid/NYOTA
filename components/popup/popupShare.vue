<!-----
*
Template
*
------>
<template>
    <div class="c-popup-share" :class="{ active: isActive }">
        <div class="c-popup-share__cover" @click="closePopupShare"></div>
        <div class="c-popup-share__content">
            <div class="c-popup-share__content__close" @click="closePopupShare" >
                <close />
            </div>
            <div class="c-popup-share__content__links">
                <div class="c-popup-share__content__links__element" :data-link="currentpage_url" @click="copyLink()">
                    <Link />
                </div>
                <a class="c-popup-share__content__links__element" :href="'https://www.facebook.com/sharer/sharer.php?u=' + currentpage_url" target="blank_" rel="noopener noreferrer">
                    <Facebook />
                </a>
                <a class="c-popup-share__content__links__element" :href="'https://twitter.com/intent/tweet?url=' + currentpage_url" target="blank_" rel="noopener noreferrer">
                    <Twitter />
                </a>
                <a class="c-popup-share__content__links__element" :href="'http://www.linkedin.com/shareArticle?mini=true&url='+ currentpage_url" target="blank_" rel="noopener noreferrer">
                    <Linkedin />
                </a>
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
    import Facebook from '@/components/svg/Facebook';
    import Twitter from '@/components/svg/Twitter';
    import Linkedin from '@/components/svg/Linkedin';

    import { eventHub } from '@/plugins/eventhub'

    export default {
        name: 'popupShare',
        components: { Cta, Close, Link, Facebook, Twitter, Linkedin},
        data: function () {
            return {
                isActive: false,
                currentpage_url: window.location.href
            }
        },
        mounted: function () {
            eventHub.$on('open-popup-share', (data) => {
                console.log('on open-popup-share')
                this.isActive = data
            })
        },
        methods: {
            closePopupShare() {
                this.isActive = false
                eventHub.$emit('close-popup-share', false)
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
    .c-popup-share {
        position: fixed;
        height: 100vh;
        width: 100vw;
        top: 0;
        left: 0;
        background-color: rgba($black, .2);
        z-index: 2;

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

        .c-popup-share__cover {
            height: 100%;
            width: 100%;
            position: absolute;
            top: 0;
            left: 0;
        }

        .c-popup-share__content {
            position: relative;
            display: flex;
            max-width: 90%;
            padding: 50px;
            background-color: $white;
            border-radius: 32px;
            overflow: hidden;

            @include media-breakpoint-down(md) {
                flex-direction: column;
                max-height: calc(90vh - 140px);
                margin-top: 20px;
                overflow-y: auto;
            }

            .c-popup-share__content__close {
                position: absolute;
                top: 15px;
                right: 15px;
                cursor: pointer;
            }

            .c-popup-share__content__links {
                display: flex;
                justify-content: center;
                flex-wrap: wrap;

                .c-popup-share__content__links__element {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 56px;
                    min-width: 56px;
                    border-radius: 100%;
                    background: $gradientOrange;
                    margin: 0 8px 8px 0;
                    border: 1px solid $orange;

                    &:hover {
                        background: rgba($orange, .5);                        
                    }
                }
            }
        }
    }
</style>