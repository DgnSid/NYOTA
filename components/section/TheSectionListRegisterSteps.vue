<template>
    <div class="c-section-listregistersteps">
        <div class="c-section-listregistersteps__list">
            <div v-if="step == 1" class="c-section-listregistersteps__list__element active">
                <div class="c-section-listregistersteps__list__element__number">1</div>
                <div class="c-section-listregistersteps__list__element__text">{{ $t("registerform.steps.one.title") }}</div>
            </div>
            <div v-else class="c-section-listregistersteps__list__element done">
                <div class="c-section-listregistersteps__list__element__number">
                    <checkmark />
                </div>
                <div class="c-section-listregistersteps__list__element__text">{{ $t("registerform.steps.one.title") }}</div>
            </div>


            <div v-if="step == 2" class="c-section-listregistersteps__list__element active">
                <div class="c-section-listregistersteps__list__element__number">2</div>
                <div class="c-section-listregistersteps__list__element__text">{{ $t("registerform.steps.two.title") }}</div>
            </div>
            <div v-else-if="step > 2" class="c-section-listregistersteps__list__element done">
                <div class="c-section-listregistersteps__list__element__number">
                    <checkmark />
                </div>
                <div class="c-section-listregistersteps__list__element__text">{{ $t("registerform.steps.two.title") }}</div>
            </div>
            <div v-else class="c-section-listregistersteps__list__element">
                <div class="c-section-listregistersteps__list__element__number">2</div>
                <div class="c-section-listregistersteps__list__element__text">{{ $t("registerform.steps.two.title") }}</div>
            </div>
            
            
            <div v-if="step == 3" class="c-section-listregistersteps__list__element active">
                <div class="c-section-listregistersteps__list__element__number">3</div>
                <div class="c-section-listregistersteps__list__element__text">{{ $t("registerform.steps.three.title") }}</div>
            </div>
            <div v-else-if="step > 3" class="c-section-listregistersteps__list__element done">
                <div class="c-section-listregistersteps__list__element__number">
                    <checkmark />
                </div>
                <div class="c-section-listregistersteps__list__element__text">{{ $t("registerform.steps.three.title") }}</div>
            </div>
            <div v-else class="c-section-listregistersteps__list__element">
                <div class="c-section-listregistersteps__list__element__number">3</div>
                <div class="c-section-listregistersteps__list__element__text">{{ $t("registerform.steps.three.title") }}</div>
            </div>
            
            <div v-if="step == 4" class="c-section-listregistersteps__list__element active">
                <div class="c-section-listregistersteps__list__element__number">4</div>
                <div class="c-section-listregistersteps__list__element__text">{{ $t("registerform.steps.four.title") }}</div>
            </div>
            <div v-else class="c-section-listregistersteps__list__element">
                <div class="c-section-listregistersteps__list__element__number">4</div>
                <div class="c-section-listregistersteps__list__element__text">{{ $t("registerform.steps.four.title") }}</div>
            </div>
        </div>

        <div v-if="step == 1" class="c-section-listregistersteps__progress --quarter"></div>
        <div v-else-if="step == 2" class="c-section-listregistersteps__progress --half"></div>
        <div v-else-if="step == 3" class="c-section-listregistersteps__progress --thirdquarter"></div>
        <div v-else-if="step == 4" class="c-section-listregistersteps__progress --full"></div>
    </div>
</template>

<script>
    import { gsap } from "gsap";
    import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
    import Checkmark from "@/components/svg/Checkmark.vue"

    if (process.client) {
        gsap.registerPlugin(ScrollTrigger);
    }

    export default {
        name: 'TheSectionListNews',
        components: { Checkmark },
        props: {
            step: Number,
        },
        mounted() {
            const gsap = this.$gsap;
            this.tl = new gsap.timeline({
                scrollTrigger: {
                    trigger: ".c-section-listregistersteps",
                }
            })

            this.tl.set('.a-stagger-element__listregistersteps', {autoAlpha: 0, y:30})
            this.tl.staggerTo('.a-stagger-element__listregistersteps', 0.6, {autoAlpha: 1, y:0, ease: "Power1.easeOut"}, .15, "=0.4")
                   
        },
    }
</script>

<!-----
*
Style scoped
*
------>
<style lang="scss" scoped>
    .c-section-listregistersteps {
        position: relative;
        height: 105px;
        background-color: $white;
        display: flex;
        justify-content: center;
        align-items: center;
        border-bottom: 1px solid $grey;

        @include media-breakpoint-down(md) {
            display: none;
        }

        .c-section-listregistersteps__list {
            display: flex;
            justify-content: center;
            align-items: center;
            .c-section-listregistersteps__list__element {
                display: flex;
                align-items: center;

                &:not(:last-child) {
                    margin-right: 40px;
                }
                .c-section-listregistersteps__list__element__number {
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    border: 1px solid $grey;
                    color: $grey;
                    height: 56px;
                    width: 56px;
                    border-radius: 100%;
                }

                .c-section-listregistersteps__list__element__text {
                    margin-left: 16px;
                    color: $grey;
                }
                &.active {
                    .c-section-listregistersteps__list__element__number {
                        color: $white;
                        background-color: $orange;
                        border-color: $orange;
                    }
                    .c-section-listregistersteps__list__element__text {
                        color: $black;
                        font-weight: bold;
                    }
                }

                &.done {
                    .c-section-listregistersteps__list__element__number {
                        border-color: $orange;
                    }
                    .c-section-listregistersteps__list__element__text {
                        color: $orange;
                        font-weight: unset;
                    }
                }
            }
        }

        .c-section-listregistersteps__progress {
            height: 2px;
            background-color: $orange;
            position: absolute;
            bottom: -1px;
            left: 0;

            &.--quarter {
                width: 25%;
            }

            &.--half {
                width: 50%;
            }

            &.--thirdquarter {
                width: 75%;
            }

            &.--full {
                width: 100%;
            }
        }
    }
</style>