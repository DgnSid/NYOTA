<template>
    <header class="c-header-profiletalent">
        <div class="container">
            <div class="c-header-profiletalent__content">
                <div class="row">
                    <div class="col-lg-9">
                        <div class="c-header-profiletalent__left">
                            <div class="c-header-profiletalent__photocontainer">
                                <img v-if="photo" class="c-header-profiletalent__photo" :src="photo" alt="Avatar" />
                                <no-avatar v-else />
                            </div>
                            <h1 class="c-header-profiletalent__title a-stagger-element__header-profile-talent">
                                {{name}}
                            </h1>
                            <div class="c-header-profiletalent__updatephoto a-stagger-element__header-profile-talent">
                                Modifier ma photo de profil
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-13 offset-lg-2">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="c-header-profiletalent__content__infos">
                                    <h2 class="c-header-profiletalent__content__infos__title">Informations personnelles</h2>
                                    <div class="c-header-profiletalent__content__infos__name">{{name}}</div>
                                    <div class="c-header-profiletalent__content__infos__mail">
                                        <IconMail class="mr-xs" />
                                        <div>{{mail}}</div>
                                    </div>
                                    <cta
                                        url=""
                                        title="Modifier"
                                        class="--bordered"
                                    />
                                </div>
                            </div>
                            <div class="col-lg-8 offset-lg-4">
                                <div class="c-header-profiletalent__content__infos">
                                    <h2 class="c-header-profiletalent__content__infos__title">CV</h2>
                                    <div class="c-header-profiletalent__content__infos__file">
                                        <IconFile class="mr-xs" />
                                        <div class="c-header-profiletalent__content__infos__file__name">{{file}}</div>
                                    </div>
                                    <div class="my-lg" style="color: red">File upload TODO</div>
                                    <cta
                                        url=""
                                        title="Valider"
                                        class="--bordered"
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
    import IconFile from '@/components/svg/File.vue'
    import Cta from '../Cta.vue';

    if (process.client) {
        gsap.registerPlugin(ScrollTrigger);
    }

    export default {
        name: 'HeaderProfileTalent',
        components: { NoAvatar, IconMail, IconFile, Cta },
        props: {
            photo: String,
            name: String,
            mail: String,
            file: String,
        },
        mounted() {
            const gsap = this.$gsap;
            this.tl = new gsap.timeline({
                scrollTrigger: {
                    trigger: ".c-header-profiletalent",
                }
            })

            this.tl.set('.a-stagger-element__header-profile-talent', {autoAlpha: 0, y:30})
            this.tl.staggerTo('.a-stagger-element__header-profile-talent', 0.6, {autoAlpha: 1, y:0, ease: "Power1.easeOut"}, .15, "=0.4")
                   
        },
    }
</script>

<!-----
*
Style scoped
*
------>
<style lang="scss" scoped>
    .c-header-profiletalent {
        position: relative;
        height: 512px;

        display: flex;
        align-items: center;

        background-color: $white;
        background-image: url('/gradient-home.png');
        background-position: center;
        background-size: cover;

        .c-header-profiletalent__content {
            .c-header-profiletalent__content__infos {
                .c-header-profiletalent__content__infos__title {
                    color: $black;
                    font-size: 2rem;
                    line-height: 2.25rem;
                    margin-bottom: 16px;
                }

                .c-header-profiletalent__content__infos__name {
                    font-size: 1.5rem;
                    line-height: 1.5rem;
                    margin-bottom: 20px;

                    background: $gradientOrange;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }

                .c-header-profiletalent__content__infos__mail {
                    display: flex;
                    align-items: center;
                    color: $black;
                    margin-bottom: 80px;
                }

                .c-header-profiletalent__content__infos__file {
                    display: flex;
                    align-items: center;
                    color: $black;

                    .c-header-profiletalent__content__infos__file__name {
                        word-break: break-all;
                    }

                    svg {
                        min-width: 32px;
                    }
                }
            }
        }

        .c-header-profiletalent__photo {
            object-fit: cover;
            object-position: center;
            height: 100%;
            width: 100%;
        }
        .c-header-profiletalent__left {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            border-right: 1px solid $light-grey;
        }
        .c-header-profiletalent__photocontainer {
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

        .c-header-profiletalent__title {
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

        .c-header-profiletalent__updatephoto {
            color: $orange;
            text-decoration: underline;
            font-size: 1.125rem;
            cursor: pointer;
        }

        .c-header-profiletalent__logo {
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
