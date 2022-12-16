<template>
    <header class="c-header-profilecompany">
        <div class="container">
            <div class="c-header-profilecompany__content">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="c-header-profilecompany__left">
                            <div class="c-header-profilecompany__photocontainer a-stagger-element__header-profile-company">
                                <img v-if="photo" class="c-header-profilecompany__photo" :src="photo" alt="Avatar" />
                                <no-avatar v-else />
                            </div>
                            <h1 class="c-header-profilecompany__title a-stagger-element__header-profile-company">
                                {{company_name}}
                            </h1>
                            <div class="c-header-profilecompany__updatephoto a-stagger-element__header-profile-company">
                                Modifier ma photo de profil
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-12">
                        <div class="row">
                            <div class="col-lg-10 offset-lg-2">
                                <div class="c-header-profilecompany__content__infos">
                                    <h2 class="c-header-profilecompany__content__infos__title a-stagger-element__header-profile-company">Contact référent</h2>
                                    <div class="c-header-profilecompany__content__infos__name a-stagger-element__header-profile-company">{{contact_name}}</div>
                                    <div class="c-header-profilecompany__content__infos__role a-stagger-element__header-profile-company">{{contact_role}}</div>
                                    <a :href="'mailto:' + contact_mail" class="c-header-profilecompany__content__infos__phone a-stagger-element__header-profile-company">
                                        <IconPhone class="mr-xs" />
                                        <div>{{contact_mail}}</div>
                                    </a>
                                    <a :href="'tel:' + contact_phone" class="c-header-profilecompany__content__infos__mail a-stagger-element__header-profile-company">
                                        <IconMail class="mr-xs" />
                                        <div>{{contact_phone}}</div>
                                    </a>
                                    <cta
                                        url=""
                                        title="Modifier"
                                        class="--bordered a-stagger-element__header-profile-company"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
    import { gsap } from "gsap";
    import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

    import NoAvatar from '@/components/svg/NoAvatar.vue'
    import IconMail from '@/components/svg/Mail.vue'
    import IconPhone from '@/components/svg/Phone.vue'
    import Cta from '../Cta.vue';

    if (process.client) {
        gsap.registerPlugin(ScrollTrigger);
    }

    export default {
        name: 'HeaderProfileTalent',
        components: { NoAvatar, IconMail, IconPhone, Cta },
        props: {
            photo: String,
            company_name: String,
            contact_name: String,
            contact_role: String,
            contact_mail: String,
            contact_phone: String,
        },
        mounted() {
            const gsap = this.$gsap;
            this.tl = new gsap.timeline({
                scrollTrigger: {
                    trigger: ".c-header-profilecompany",
                }
            })

            this.tl.set('.a-stagger-element__header-profile-company', {autoAlpha: 0, y:30})
            this.tl.staggerTo('.a-stagger-element__header-profile-company', 0.6, {autoAlpha: 1, y:0, ease: "Power1.easeOut"}, .15, "=0.4")
                   
        },
    }
</script>

<!-----
*
Style scoped
*
------>
<style lang="scss" scoped>
    .c-header-profilecompany {
        position: relative;
        height: 512px;

        display: flex;
        align-items: center;

        background-color: $white;
        background-image: url('/gradient-home.png');
        background-position: center;
        background-size: cover;

        .c-header-profilecompany__content {
            .c-header-profilecompany__content__infos {
                .c-header-profilecompany__content__infos__title {
                    color: $black;
                    font-size: 2rem;
                    line-height: 2.25rem;
                    margin-bottom: 16px;
                }

                .c-header-profilecompany__content__infos__name {
                    font-size: 1.5rem;
                    line-height: 1.5rem;

                    background: $gradientOrange;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }

                .c-header-profilecompany__content__infos__role {
                    color: $black;
                    margin-bottom: 20px;
                }
                .c-header-profilecompany__content__infos__phone {
                    display: flex;
                    align-items: center;
                    color: $black;
                }

                .c-header-profilecompany__content__infos__mail {
                    display: flex;
                    align-items: center;
                    color: $black;
                    margin-bottom: 20px;
                }

                .c-header-profilecompany__content__infos__file {
                    display: flex;
                    align-items: center;
                    color: $black;

                    .c-header-profilecompany__content__infos__file__name {
                        word-break: break-all;
                    }

                    svg {
                        min-width: 32px;
                    }
                }
            }
        }

        .c-header-profilecompany__photo {
            object-fit: cover;
            object-position: center;
            height: 100%;
            width: 100%;
        }
        .c-header-profilecompany__left {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            border-right: 1px solid $light-grey;
            height: 100%;
        }
        .c-header-profilecompany__photocontainer {
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

        .c-header-profilecompany__title {
            font-family: $font-family-custom;
            font-size: 4rem;
            line-height: 4.5rem;
            font-weight: 800;
            margin-bottom: 24px;
            margin-right: 20px;
            color: $black;

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

        .c-header-profilecompany__updatephoto {
            color: $orange;
            text-decoration: underline;
            font-size: 1.125rem;
            cursor: pointer;
        }

        .c-header-profilecompany__logo {
            position: absolute;
            right: 0;
            top: 50%;
            transform: translate(0, -50%);

            @include media-breakpoint-down(md) {
                display: none;
            }
        }
    }
</style>
