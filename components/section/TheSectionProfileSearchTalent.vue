<template>
    <section class="c-section-profile-search-talent">
        <h2 class="c-section-profile-search-talent__title">Talent</h2>
    </section>
</template>

<script>
    import { gsap } from "gsap";
    import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

    if (process.client) {
        gsap.registerPlugin(ScrollTrigger);
    }

    export default {
        name: 'TheSectionFigures',
        components: {
          cardFigure,
        },
        props: {
            title: String,
            key_numbers: Array,
        },
        mounted() {
            const gsap = this.$gsap;
            this.tl = new gsap.timeline({
                scrollTrigger: {
                    trigger: ".c-section-figures",
                }
            })

            this.tl.set('.a-stagger-element__figures', {autoAlpha: 0, y:30})
            this.tl.staggerTo('.a-stagger-element__figures', 0.6, {autoAlpha: 1, y:0, ease: "Power1.easeOut"}, .15, "=0.4")
                   
        },
    }
</script>

<!-----
*
Style scoped
*
------>
<style lang="scss" scoped>
    .c-section-profile-search-talent {
        background-color: $white;

        .c-section-profile-search-talent__title {
            text-align: center;
        }
        
    }
</style>
