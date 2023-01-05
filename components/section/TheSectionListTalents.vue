<template>
    <div class="c-section-listtalents">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 a-stagger-element__listtalents" v-for="(element, index) in list" :key="index">
                    test {{ element.firstname }}
                </div>
            </div>
        </div>
        <div class="container a-stagger-element__listtalents">
            <cta
                url="cta.url"
                title="Afficher plus de profil"
                class="c-section-listtalents__cta --bordered"
            />
        </div>
    </div>
</template>

<script>
    import { gsap } from "gsap";
    import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

    if (process.client) {
        gsap.registerPlugin(ScrollTrigger);
    }

    import cardTalent from '@/components/card/cardNewsAlt.vue';
    import Cta from '../Cta.vue';

    export default {
        name: 'TheSectionListTalents',
        components: { cardTalent, Cta },
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
