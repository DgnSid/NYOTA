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
                        class_string=""
                    />
                </div>
            </div>
        </div>
        <div class="container">
            <Pagination v-if="(total > 1)" :total="total" :perPage="1" />
        </div>
    </div>
</template>

<script>
    import cardNewsAlt from '@/components/card/cardNewsAlt.vue';
    import Pagination from '@/components/Pagination.vue';

    export default {
        name: 'TheSectionListNews',
        components: { cardNewsAlt, Pagination },
        props: {
            news: Array,
            total: {
                type: Number,
                default: 0,
            },
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
