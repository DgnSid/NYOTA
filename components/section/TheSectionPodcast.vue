<template>
    <section class="c-section-podcast">
        <div class="container">
            <div class="row">
                <div class="col-lg-21 offset-lg-3">
                    <h2 class="c-section-podcast__title">
                        {{title}}
                    </h2>
                </div>
                <div class="col-lg-7 offset-lg-3 p-r order-md-2 order-sm-2 order-2 order-lg-1">
                    <ImageBordered 
                        :url="image.url"
                        :alt="image.alt"
                        class_string="--right"
                    />
                </div>
                <div class="col-lg-11 order-md-1 order-sm-1 order-1 offset-lg-2 order-lg-2">
                    <div class="c-section-podcast__text" v-html="text"></div>
                    <cta v-if="cta"
                        :url="cta.url"
                        :title="cta.title"
                        class="--bordered"
                    />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import Cta from '../Cta.vue';
    import ImageBordered from '../ImageBordered.vue';

    export default {
        name: 'TheSectionPodcast',
        components: { Cta, ImageBordered },
        props: {
            title: String,
            text: String,
            image: Object,
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
    .c-section-podcast {
        background-color: $white;
        padding: 120px 0;

        .c-section-podcast__title {
            font-family: $font-family-custom;
            font-weight: 400;
            
            font-size: 4.125rem;
            line-height: 4.5rem;
            
            color: $black;
            text-align: center;

            margin-bottom: 50px;
        }

        .c-section-podcast__text {
            color: $black;

            ::v-deep p {
                margin-bottom: 20px;
            }
        }
    }
</style>
