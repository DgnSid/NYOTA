<template>
    <section class="c-section-twocols" :class="background ? '--background' : ''">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 p-r order-md-2 order-sm-2 order-2" :class="is_image_left ? 'order-lg-1' : 'offset-lg-2 order-lg-2'">
                    <ImageBordered 
                        :url="image.url"
                        :alt="image.alt"
                        class_string="--right"
                    />
                </div>
                <div class="col-lg-14 order-md-1 order-sm-1 order-1" :class="is_image_left ? 'offset-lg-2 order-lg-2' : 'order-lg-1'">
                    <h2 class="c-section-twocols__title">
                        {{title}}
                    </h2>
                    <div class="c-section-twocols__subtitle">
                        {{subtitle}}
                    </div>
                    <div class="c-section-twocols__text" v-html="text"></div>
                    <cta v-if="cta"
                        :url="cta.url"
                        :title="cta.title"
                        class=""
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
        name: 'TheSectionTwoCols',
        components: { Cta, ImageBordered },
        props: {
            title: String,
            subtitle: String,
            text: String,
            image: Object,
            cta: Object,
            is_image_left: Boolean,
            background: Boolean,
        }
    }
</script>

<!-----
*
Style scoped
*
------>
<style lang="scss" scoped>
    .c-section-twocols {
        background-color: $white;
        padding: 120px 0;

        &.--background {
            background-image: url('/gradient-home.png');
            background-position: center;
            background-size: cover;
        }

        .c-section-twocols__title {
            font-family: $font-family-custom;
            font-weight: 400;
            
            font-size: 4.125rem;
            line-height: 4.5rem;
            
            color: $black;

            margin-bottom: 16px;
        }

        .c-section-twocols__subtitle {
            font-family: $font-family-custom;
            font-weight: 400;
            font-style: italic;
            
            font-size: 2rem;
            line-height: 2.375rem;

            background: $gradientOrange;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;

            margin-bottom: 40px;
        }

        .c-section-twocols__text {
            color: $black;

            ::v-deep p {
                margin-bottom: 20px;
            }
        }
    }
</style>
