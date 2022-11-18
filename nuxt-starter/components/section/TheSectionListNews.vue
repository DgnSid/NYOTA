<template>
    <section class="c-section-listnews">
        <div class="container">
            <h2 class="c-section-listnews__title">{{title}}</h2>
            <div class="row">
                <div class="col-lg-12" v-for="(element, index) in news.slice(0, 2)" :key="index">
                    <cardNews
                        :image_url="element.image.url"
                        :image_alt="element.image.alt"
                        image_style="--right"
                        :date="element.publicationDate|date('DD.MM.YYYY')"
                        :title="element.title"
                        :url="element.url"
                    />
                </div>
                <div class="col-lg-12" v-for="(element, index) in news.slice(2, 4)" :key="index">
                    <cardNews
                        :image_url="element.image.url"
                        :image_alt="element.image.alt"
                        image_style="--left"
                        :date="element.publicationDate|date('DD.MM.YYYY')"
                        :title="element.title"
                        :url="element.url"
                    />
                </div>
            </div>

            <div class="c-section-listnews__cta-container">
                <cta 
                    :url="cta.url"
                    :title="cta.title"
                    class=""
                />
            </div>

        </div>
    </section>
</template>

<script>
    import cardNews from '../card/cardNews.vue';
    import Cta from '../Cta.vue';

    export default {
        name: 'TheSectionListNews',
        components: { Cta, cardNews },
        props: {
            title: String,
            news: Array,
            cta: Object,
        }
    }
</script>

<!-----
*
Style scoped
*
------>
<style lang="scss" scoped>
    .c-section-listnews {
        padding: 60px 0;
        background-color: $white;
        background-image: url('/gradient-home.png');
        background-position: center;
        background-size: cover;

        .c-section-listnews__title {
            font-size: 4.125rem;
            line-height: 4.5rem;
            color: $black;
            padding-bottom: 60px;
            text-align: center;

            @include media-breakpoint-down(md) {
                font-size: 3.125rem;
                line-height: 3.5rem;
            }
        }

        .c-section-listnews__cta-container {
            display: table;
            margin: 0 auto;
        }
    }
</style>
