<template>
    <section class="c-section-profile-cv" :class="nopadding">
        <div class="container">
            <div class="c-section-profile-cv__content">
                <div :class="offset">
                    <h2 class="c-section-profile-cv__title a-stagger-element__section-profile-cv">{{ $t('pagetalentsingle.formation_experience') }}</h2>
                </div>
                <div class="row">
                    <div :class="offset" class="col-lg-10 mb-md a-stagger-element__section-profile-cv">
                        <div class="c-section-profile-cv__question">{{$t('registerform.steps.two.one.label_question')}}</div>
                        <div class="c-section-profile-cv__answers">
                            <div class="c-section-profile-cv__answers__element" :key="index">
                                {{data.oldIndustry.name}}
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-10 mb-md a-stagger-element__section-profile-cv">
                        <div class="c-section-profile-cv__question">{{$t('registerform.steps.two.seven.label_question')}}</div>
                        <div class="c-section-profile-cv__answers">
                            <div class="c-section-profile-cv__answers__element" v-for="(element, index) in data.languages" :key="index">
                                {{element}}
                            </div>
                        </div>
                    </div>
                    <div :class="offset" class="col-lg-10 mb-md a-stagger-element__section-profile-cv">
                        <div class="c-section-profile-cv__question">{{$t('registerform.steps.two.two.label_question')}}</div>
                        <div class="c-section-profile-cv__answers">
                            <div class="c-section-profile-cv__answers__element">
                                {{data.newIndustry.name}}
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-10 mb-md a-stagger-element__section-profile-cv">
                        <div class="c-section-profile-cv__question">{{$t('registerform.steps.two.eight.label_question')}}</div>
                        <div class="c-section-profile-cv__answers">
                            <div class="c-section-profile-cv__answers__element">
                                {{data.expectedStartDate.name}}
                            </div>
                        </div>
                    </div>
                    <div :class="offset" class="col-lg-10 mb-md a-stagger-element__section-profile-cv">
                        <div class="c-section-profile-cv__question">{{$t('registerform.steps.two.three.label_question')}}</div>
                        <div class="c-section-profile-cv__answers">
                            <div class="c-section-profile-cv__answers__element">
                                {{data.domain.name}}
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-10 mb-md a-stagger-element__section-profile-cv">
                        <div class="c-section-profile-cv__question">{{$t('registerform.steps.two.nine.label_question_two')}}</div>
                        <div class="c-section-profile-cv__answers">
                            <div class="c-section-profile-cv__answers__element">
                                {{data.contract.name}}
                            </div>
                        </div>
                    </div>
                    <div :class="offset" class="col-lg-10 mb-md a-stagger-element__section-profile-cv">
                        <div class="c-section-profile-cv__question">{{$t('registerform.steps.two.four.label_question')}}</div>
                        <div class="c-section-profile-cv__answers">
                            <div class="c-section-profile-cv__answers__element" v-for="(element, index) in data.workplaces" :key="index">
                                {{element.name}}
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-10 mb-md a-stagger-element__section-profile-cv">
                        <div class="c-section-profile-cv__question">{{$t('registerform.steps.two.ten.label_question')}}</div>
                        <div class="c-section-profile-cv__answers">
                            <div class="c-section-profile-cv__answers__element">
                                <span v-if="data.hasAfricanPastExperience">Oui</span>
                                <span v-else>Non</span>
                            </div>
                        </div>
                    </div>
                    <div :class="offset" class="col-lg-10 mb-md a-stagger-element__section-profile-cv">
                        <div class="c-section-profile-cv__question">{{$t('registerform.steps.two.five.label_question')}}</div>
                        <div class="c-section-profile-cv__answers">
                            <div class="c-section-profile-cv__answers__element">
                                {{data.country}}
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-10 mb-md a-stagger-element__section-profile-cv">
                        <div class="c-section-profile-cv__question">{{$t('registerform.steps.two.eleven.label_question_one')}}</div>
                        <div class="c-section-profile-cv__answers">
                            <div class="c-section-profile-cv__answers__element">
                                {{data.diploma}}
                            </div>
                        </div>
                    </div>
                    <div :class="offset" class="col-lg-10 mb-md a-stagger-element__section-profile-cv">
                        <div class="c-section-profile-cv__question">{{$t('registerform.steps.two.six.label_question')}}</div>
                        <div class="c-section-profile-cv__answers">
                            <div class="c-section-profile-cv__answers__element" v-for="(element, index) in data.nationalities" :key="index">
                                {{element}}
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-10 mb-md a-stagger-element__section-profile-cv">
                        <div class="c-section-profile-cv__question">{{$t('registerform.steps.two.twelve.label_question')}}</div>
                        <div class="c-section-profile-cv__answers">
                            <div class="c-section-profile-cv__answers__element">
                                {{data.salary}}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <shape-ellipse v-if="ellipse" class="c-section-profile-cv__ellipse a-stagger-element__section-profile-cv" size="216" />
    </section>
</template>

<script>
    import { gsap } from "gsap";
    import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

    if (process.client) {
        gsap.registerPlugin(ScrollTrigger);
    }

    import ShapeEllipse from '@/components/ui/ShapeEllipse.vue'

    export default {
        name: 'TheSectionProfileCv',
        components: { ShapeEllipse },
        props: {
            data: Object,
            ellipse: Boolean,
            offset: String,
            nopadding: String,
        },
        mounted() {
            const gsap = this.$gsap;
            this.tl = new gsap.timeline({
                scrollTrigger: {
                    trigger: ".c-section-profile-cv",
                }
            })

            this.tl.set('.a-stagger-element__section-profile-cv', {autoAlpha: 0, y:30})
            this.tl.staggerTo('.a-stagger-element__section-profile-cv', 0.6, {autoAlpha: 1, y:0, ease: "Power1.easeOut"}, .15, "=0.4")
                   
        },
    }
</script>

<!-----
*
Style scoped
*
------>
<style lang="scss" scoped>
    .c-section-profile-cv {
        position: relative;
        background-color: $white;
        padding: 80px 0;

        &.--nopadding {
            padding: 0;
        }

        .c-section-profile-cv__title {
            font-family: $font-family-custom;
            font-size: 3rem;
            line-height: 3rem;
            margin-bottom: 48px;
            color: $black;

            @include media-breakpoint-down(md) {
                padding: 0 15px;
            }
        }

        .c-section-profile-cv__question {
            color: $black;
            margin-bottom: 15px;

            @include media-breakpoint-down(md) {
                padding: 0 15px;
            }
        }

        .c-section-profile-cv__answers {
            display: flex;

            @include media-breakpoint-down(md) {
                padding: 0 15px;
            }
            .c-section-profile-cv__answers__element {
                color: $orange;
                border: 1px solid $grey;
                border-radius: 20px;
                padding: 5px 10px;
                text-transform: uppercase;
                font-weight: 500;

                font-size: .875rem;
                line-height: .875rem;

                &:not(:last-child) {
                    margin-right: 10px;
                }
            }
        }

        .c-section-profile-cv__ellipse {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            right: -60px;

            @include media-breakpoint-down(md) {
                display: none;
            }
        }
    }
</style>
