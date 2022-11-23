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
    export default {
        name: 'TheSectionProJourney',
        props: {
            title: String,
            steps: Array,
        }
    }
</script>

<!-----
*
Style scoped
*
------>
<style lang="scss" scoped>
    .c-section-projourney {
        background-color: $white;
        padding: 120px 0;
    }
</style>
