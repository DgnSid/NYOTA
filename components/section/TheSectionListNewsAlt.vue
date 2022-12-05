<template>
    <div class="c-section-listnewsalt">
        <div class="container">
            <div class="row">
                <div class="col-lg-8" v-for="(element, index) in news" :key="index">
                    <cardNewsAlt
                        :image_url="element.image.url"
                        :image_alt="element.image.alt"
                        image_style="--right"
                        :date="element.publicationDate|date('DD.MM.YYYY')"
                        :title="element.title"
                        :url="element.url"
                        slug="lorem-ipsum"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import cardNewsAlt from '../card/cardNewsAlt.vue';

    export default {
        name: 'TheSectionListNews',
        components: { cardNewsAlt },
        props: {
            news: Array,
        }
    }
</script>

<!-----
*
Style scoped
*
------>
<style lang="scss" scoped>
    .c-section-listnewsalt {
        padding: 60px 0;
        background-color: $white;
    }
</style>
