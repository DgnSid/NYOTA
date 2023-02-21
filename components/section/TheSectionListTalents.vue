<template>
    <div class="c-section-listtalents">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 a-stagger-element__listtalents" v-for="(element, index) in mutableTalents" :key="index">
                    <card-talent 
                        :firstname="element.firstname"
                        :lastname="element.lastname.slice(0,1)"
                        :job="element.job"
                        :school="element.school"
                        :profilePicture="element.profilePicture"
                        :yearsOfExperience="element.yearsOfExperience"
                        :hasBeenConsulted="element.hasBeenConsulted"
                        from="Paris"
                        :industry="element.industry"
                        :id="element['@id'].split('/').pop()"
                    />
                </div>
            </div>
        </div>
        <div v-if="list.totalItems > 9" class="container a-stagger-element__listtalents">
            <cta
                url="cta.url"
                title="Afficher plus de profil"
                class="c-section-listtalents__cta --bordered"
            />
        </div>
    </div>
</template>

<script>
    import { eventHub } from '@/plugins/eventhub'
    import { gsap } from "gsap";
    import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

    if (process.client) {
        gsap.registerPlugin(ScrollTrigger);
    }

    import cardTalent from '@/components/card/cardTalent.vue';
    import Cta from '../Cta.vue';

    export default {
        name: 'TheSectionListTalents',
        components: { cardTalent, Cta },
        data: function () {
            return {
                mutableTalents: this.$props.list,
            }
        },
        props: { 
            list: Array,
        },
        mounted() {
            const gsap = this.$gsap;
            this.tl = new gsap.timeline({
                scrollTrigger: {
                    trigger: ".c-section-listtalents",
                }
            })

            this.tl.set('.a-stagger-element__listtalents', {autoAlpha: 0, y:30})
            this.tl.staggerTo('.a-stagger-element__listtalents', 0.6, {autoAlpha: 1, y:0, ease: "Power1.easeOut"}, .15, "=0.4")

            eventHub.$on('update-talents-list', (data) => {
                this.mutableTalents = data['hydra:member']
            })                   
        },
    }
</script>

<!-----
*
Style scoped
*
------>
<style lang="scss" scoped>
    .c-section-listtalents {
        padding: 60px 0;
        background-color: $white;
        .c-section-listtalents__cta {
            display: table;
            margin: 0 auto;
        }
    }
</style>
