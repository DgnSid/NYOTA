<template>
    <section class="c-section-profile-cv">
        <div class="container">
            <div class="c-section-profile-cv__content">
                <h2 class="c-section-profile-cv__title a-stagger-element__section-profile-cv">Formation et expérience</h2>
                <div class="row">
                    <div class="col-lg-10 mb-md a-stagger-element__section-profile-cv">
                        <div class="c-section-profile-cv__question">Dans quelle industrie avez-vous travaillé ?</div>
                        <div class="c-section-profile-cv__answers">
                            <div class="c-section-profile-cv__answers__element" v-for="(element, index) in data.talent_industry_passed" :key="index">
                                {{element}}
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-10 mb-md a-stagger-element__section-profile-cv">
                        <div class="c-section-profile-cv__question">Dans quelle industrie avez-vous travaillé ?</div>
                        <div class="c-section-profile-cv__answers">
                            <div class="c-section-profile-cv__answers__element" v-for="(element, index) in data.talent_langs" :key="index">
                                {{element}}
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-10 mb-md a-stagger-element__section-profile-cv">
                        <div class="c-section-profile-cv__question">Dans quelle industrie avez-vous travaillé ?</div>
                        <div class="c-section-profile-cv__answers">
                            <div class="c-section-profile-cv__answers__element" v-for="(element, index) in data.talent_industry_wish" :key="index">
                                {{element}}
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-10 mb-md a-stagger-element__section-profile-cv">
                        <div class="c-section-profile-cv__question">Dans quelle industrie avez-vous travaillé ?</div>
                        <div class="c-section-profile-cv__answers">
                            <div class="c-section-profile-cv__answers__element" v-for="(element, index) in data.talent_work_when" :key="index">
                                {{element}}
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-10 mb-md a-stagger-element__section-profile-cv">
                        <div class="c-section-profile-cv__question">Dans quelle industrie avez-vous travaillé ?</div>
                        <div class="c-section-profile-cv__answers">
                            <div class="c-section-profile-cv__answers__element" v-for="(element, index) in data.talent_specialisation" :key="index">
                                {{element}}
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-10 mb-md a-stagger-element__section-profile-cv">
                        <div class="c-section-profile-cv__question">Dans quelle industrie avez-vous travaillé ?</div>
                        <div class="c-section-profile-cv__answers">
                            <div class="c-section-profile-cv__answers__element" v-for="(element, index) in data.talent_post_type" :key="index">
                                {{element}}
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-10 mb-md a-stagger-element__section-profile-cv">
                        <div class="c-section-profile-cv__question">Dans quelle industrie avez-vous travaillé ?</div>
                        <div class="c-section-profile-cv__answers">
                            <div class="c-section-profile-cv__answers__element" v-for="(element, index) in data.talent_work_where_wish" :key="index">
                                {{element}}
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-10 mb-md a-stagger-element__section-profile-cv">
                        <div class="c-section-profile-cv__question">Dans quelle industrie avez-vous travaillé ?</div>
                        <div class="c-section-profile-cv__answers">
                            <div class="c-section-profile-cv__answers__element" v-for="(element, index) in data.talent_worked_in_africa_before" :key="index">
                                {{element}}
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-10 mb-md a-stagger-element__section-profile-cv">
                        <div class="c-section-profile-cv__question">Dans quelle industrie avez-vous travaillé ?</div>
                        <div class="c-section-profile-cv__answers">
                            <div class="c-section-profile-cv__answers__element" v-for="(element, index) in data.talent_from" :key="index">
                                {{element}}
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-10 mb-md a-stagger-element__section-profile-cv">
                        <div class="c-section-profile-cv__question">Dans quelle industrie avez-vous travaillé ?</div>
                        <div class="c-section-profile-cv__answers">
                            <div class="c-section-profile-cv__answers__element" v-for="(element, index) in data.talent_level" :key="index">
                                {{element}}
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-10 mb-md a-stagger-element__section-profile-cv">
                        <div class="c-section-profile-cv__question">Dans quelle industrie avez-vous travaillé ?</div>
                        <div class="c-section-profile-cv__answers">
                            <div class="c-section-profile-cv__answers__element" v-for="(element, index) in data.talent_nationality" :key="index">
                                {{element}}
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-10 mb-md a-stagger-element__section-profile-cv">
                        <div class="c-section-profile-cv__question">Dans quelle industrie avez-vous travaillé ?</div>
                        <div class="c-section-profile-cv__answers">
                            <div class="c-section-profile-cv__answers__element" v-for="(element, index) in data.talent_salary" :key="index">
                                {{element}}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <shape-ellipse class="c-section-profile-cv__ellipse a-stagger-element__section-profile-cv" size="216" />
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

        .c-section-profile-cv__title {
            font-family: $font-family-custom;
            font-size: 3rem;
            line-height: 3rem;
            margin-bottom: 48px;
            color: $black;
        }

        .c-section-profile-cv__question {
            color: $black;
            margin-bottom: 15px;
        }

        .c-section-profile-cv__answers {
            display: flex;
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
        }
    }
</style>
