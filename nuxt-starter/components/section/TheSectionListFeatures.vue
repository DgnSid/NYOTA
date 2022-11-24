<template>
    <section class="c-section-listfeatures">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 p-r order-lg-1 order-md-2 order-sm-2 order-2">
                    <ImageBordered 
                        :url="image.url"
                        :alt="image.alt"
                        class_string="--right"
                    />
                    <div class="c-section-listfeatures__cta-container">
                        <cta 
                                :url="cta.url"
                                :title="cta.title"
                                class=""
                        />
                    </div>
                </div>
                <div class="col-lg-14 offset-lg-2 order-lg-2 order-md-1 order-sm-1 order-1">
                    <h2 class="c-section-listfeatures__title">
                        {{title}}
                    </h2>

                    <cardFeature v-for="(element, index) in features" 
                        :key="index"
                        :title="element.title"
                        :description="element.description"
                        :url="element.url"
                    />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import Cta from '../Cta.vue';
    import ImageBordered from '../ImageBordered.vue';
    import cardFeature from '../card/cardFeature.vue';

    export default {
        name: 'TheSectionListFeatures',
        components: { Cta, ImageBordered, cardFeature },
        props: {
            title: String,
            image: Object,
            cta: Object,
            features: Array,
        }
    }
</script>

<!-----
*
Style scoped
*
------>
<style lang="scss" scoped>
    .c-section-listfeatures {
        padding: 60px 0;
        background-color: $white;
        background-image: url('/gradient-home.png');
        background-position: center;
        background-size: cover;

        .c-section-listfeatures__cta-container {
            position: absolute;
            z-index: 2;
            bottom: 0;
            left: 50%;
            transform: translate(-50%, 50%);
        }

        .c-section-listfeatures__title {
            font-size: 4.125rem;
            line-height: 4.5rem;
            color: $black;
            padding-bottom: 60px;

            @include media-breakpoint-down(md) {
                font-size: 3.125rem;
                line-height: 3.5rem;
            }
        }
    }
</style>
