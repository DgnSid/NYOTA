<template>
    <section class="c-section-figures">
        <div class="c-section-figures__container">
            <div class="c-section-figures__container__cover"></div>
            <div class="c-section-figures__container__image"></div>
            <div class="c-section-figures__container__content">
                <div class="container">
                    <div class="row ai-center">
                        <div class="col-lg-9 offset-lg-1">
                            <h2 class="c-section-figures__title" v-html="title"></h2>
                        </div>
                        <div class="col-lg-6 offset-lg-2 md-down-mb-sm">
                            <cardFigure v-for="(element, index) in key_numbers.slice(0,2)"
                                :key="index"
                                :title="element.number"
                                :description="element.description"
                            />
                        </div>
                        <div class="col-lg-6">
                            <cardFigure v-for="(element, index) in key_numbers.slice(2,4)"
                                :key="index"
                                :title="element.number"
                                :description="element.description"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import cardFigure from '../card/cardFigure.vue';

    export default {
        name: 'TheSectionFigures',
        components: {
          cardFigure,
        },
        props: {
            title: String,
            key_numbers: Array,
        }
    }
</script>

<!-----
*
Style scoped
*
------>
<style lang="scss" scoped>
    .c-section-figures {
        background-color: $white;

        .c-section-figures__title {
            font-size: 4.125rem;
            line-height: 4.5rem;

            @include media-breakpoint-down(md) {
                font-size: 3.125rem;
                line-height: 3.5rem;
                margin-bottom: 40px;
            }
        }

        .c-section-figures__container {
            border-top-left-radius: 100px;
            border-bottom-right-radius: 100px;
            overflow: hidden;
            position: relative;

            .c-section-figures__container__cover {
                width: 100%;
                height: 100%;
                position: absolute;
                z-index: 2;
                top: 0;
                left: 0;
                background-color: rgba($blue, .5);
            }

            .c-section-figures__container__image {
                position: absolute;
                top: 0;
                left: 0;
                background-image: url('https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg');
                background-size: cover;
                width: 100%;
                height: 100%;
            }

            .c-section-figures__container__content {
                position: relative;
                z-index: 3;
                padding: 60px 0;
            }
        }
    }
</style>
