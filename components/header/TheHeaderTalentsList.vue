<template>
    <header class="c-header-talentslist">
        <form>
            <div class="container">
                <h1 class="c-header-talentslist__title">{{ title }}</h1>
                <div class="c-header-talentslist__formtop">
                    <input type="text" :placeholder="placeholder" />
                    <input type="submit" value="" />
                </div>
                <div class="c-header-talentslist__results">55 resultats (non dynamisé)</div>                
            </div>
            <shape-ellipse class="c-header-talentslist__ellipse" :size="200" />
        </form>
        <div class="c-header-talentslist__bottom">
            <div class="c-header-talentslist__bottom__element">
                <span>Poste</span>
                <arrow-down />
            </div>
            <div class="c-header-talentslist__bottom__element">
                <span>Poste</span>
                <arrow-down />
            </div>
            <div class="c-header-talentslist__bottom__element">
                <span>Poste</span>
                <arrow-down />
            </div>
            <div class="c-header-talentslist__bottom__element">
                <span>Poste</span>
                <arrow-down />
            </div>
            <div class="c-header-talentslist__bottom__element">
                <span>Poste</span>
                <arrow-down />
            </div>
            <div class="c-header-talentslist__bottom__element">
                <span>Poste</span>
                <arrow-down />
            </div>
        </div>
    </header>
</template>

<script>
    import { gsap } from "gsap";
    import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
    import ShapeEllipse from '../ui/ShapeEllipse.vue';
    import ArrowDown from '../svg/ArrowDown.vue';

    if (process.client) {
        gsap.registerPlugin(ScrollTrigger);
    }

    export default {
        name: 'HeaderTalentList',
        components: { ShapeEllipse, ArrowDown },
        props: {
            title: String,
            placeholder: String,
        },
        mounted() {
            const gsap = this.$gsap;
            this.tl = new gsap.timeline({
                scrollTrigger: {
                    trigger: ".c-header-small",
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
    .c-header-talentslist {
        background-color: $white;
        background-image: url('/gradient-home.png');
        background-position: center;
        background-size: cover;
        position: relative;
        padding-top: 140px;

        .c-header-talentslist__ellipse {
            position: absolute;
            top: 50%;
            right: -72px;
            transform: translateY(-50%);
        }

        .c-header-talentslist__title {
            text-align: center;
            margin-bottom: 50px;
            color: $black;
            font-size: 4rem;
        }

        .c-header-talentslist__formtop {
            position: relative;
            display: table;
            margin: 0 auto;

            input[type="text"] {
                height: 72px;
                border: 1px solid $orange;
                background-color: transparent;
                width: 856px;
                border-radius: 90px;
                padding-left: 40px;
                padding-right: 70px;

                &::placeholder {
                    color: $orange;
                }

            }

            input[type="submit"] {
                position: absolute;
                right: 10px;
                cursor: pointer;
                top: 50%;
                transform: translateY(-50%);
                height: 56px;
                width: 56px;
                border-radius: 100%;
                background-color: $orange;
                border: 1px solid $orange;
                color: $white;
                background-image: url('/arrow.svg');
                background-repeat: no-repeat;
                background-position: center center;

                &:hover {
                    background-color: $white;
                    color: $orange;
                    background-image: url('/arrow-orange.svg');
                }
            }
        }

        .c-header-talentslist__results {
            color: $black;
            padding-left: 40px;
            padding-top: 16px;
            width: 856px;
            display: block;
            margin: 0 auto;
        }

        .c-header-talentslist__bottom {
            height: 90px;
            background-color: $white;
            border-bottom: 1px solid $grey;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 50px;

            .c-header-talentslist__bottom__element {
                display: flex;
                align-items: center;
                color: $black;
                cursor: pointer;

                span {
                    padding-right: 24px;
                    font-weight: 700;
                }

                &:not(:last-child) {
                    padding-right: 72px;
                }
            }
        }
    }
</style>
