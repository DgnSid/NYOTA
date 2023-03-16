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
                        :from="element.country.name"
                        :industry="element.newIndustry"
                        :id="element['@id'].split('/').pop()"
                        :canConsult="mutableCanConsult"
                    />
                </div>
            </div>
        </div>
        <div v-if="mutableTotalItems > itemPerPage" class="container a-stagger-element__listtalents">
            <div @click="paginatedListUpdate()">
                <cta
                    url=""
                    title="Afficher plus de profil"
                    class="c-section-listtalents__cta --bordered"
                />
            </div>
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
                currentPage: 1,
                itemPerPage: 9,
                mutableTalents: this.$props.list,
                mutableTotalItems: this.$props.totalItems,
                mutableCanConsult: this.$props.canConsult
            }
        },
        props: { 
            list: Array,
            totalItems: Number,
            canConsult: Boolean,
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
                console.log('update-talents-list')
                this.mutableTalents = data['hydra:member']
                this.currentPage = 1
                this.itemPerPage = 9
                this.mutableTotalItems = data['hydra:totalItems']
                this.mutableCanConsult = this.$props.canConsult
            })
            
            eventHub.$on('update-talents-list-paginated-results', (data) => {
                this.mutableTalents = data['hydra:member']
                this.itemPerPage = data['hydra:member'].length
            })            
        },
        methods: {
            paginatedListUpdate() {
                console.log('paginatedListUpdate')
                this.currentPage = this.currentPage + 1
                eventHub.$emit('update-talents-list-paginated', this.currentPage)
            }
        }
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
