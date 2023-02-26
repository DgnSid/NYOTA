<template>
    <div class="c-section-listnewsalt">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 a-stagger-element__listnewsalt" v-for="(element, index) in mutableNews" :key="index">
                    <cardNewsAlt
                        :image_url="element.image.url"
                        :image_alt="element.image.alt"
                        image_style="--right"
                        :date="element.publicationDate|date('DD.MM.YYYY')"
                        :title="element.title"
                        :url="element.url"
                        :slug="element['@id'].split('/').pop()"
                    />
                </div>
            </div>
        </div>
        <div class="container a-stagger-element__listnewsalt">
            <Pagination v-if="(mutableTotal > 12)" :total="mutableTotal" :perPage="1" />
        </div>
    </div>
</template>

<script>
    import { gsap } from "gsap";
    import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
    import { eventHub } from '@/plugins/eventhub'

    if (process.client) {
        gsap.registerPlugin(ScrollTrigger);
    }

    import cardNewsAlt from '@/components/card/cardNewsAlt.vue';
    import Pagination from '@/components/Pagination.vue';

    export default {
        name: 'TheSectionListNews',
        components: { cardNewsAlt, Pagination },
        data: function () {
            return {
                mutableNews: this.$props.news,
                mutableTotal: this.$props.total
            }
        },
        props: {
            news: Array,
            total: {
                type: Number,
                default: 0,
            },
        },
        mounted() {
            const gsap = this.$gsap;
            this.tl = new gsap.timeline({
                scrollTrigger: {
                    trigger: ".c-section-listnewsalt",
                }
            })

            this.tl.set('.a-stagger-element__listnewsalt', {autoAlpha: 0, y:30})
            this.tl.staggerTo('.a-stagger-element__listnewsalt', 0.6, {autoAlpha: 1, y:0, ease: "Power1.easeOut"}, .15, "=0.4")

            eventHub.$on('update-news-by-category', (data) => {
                console.log('data', data['hydra:totalItems'])
                this.mutableNews = data['hydra:member']
                this.mutableTotal = data['hydra:totalItems']
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
    .c-section-listnewsalt {
        margin-top: -210px;
        padding: 0 0 60px 0;
        background-color: $white;
    }
</style>
