<template>
    <section class="c-section-single-wysiwyg">
        <div class="container">
            <div class="row">
                <div class="col-lg-16 offset-lg-1">
                    <h2 class="c-section-single-wysiwyg__title">{{ title }}</h2>
                    <div class="c-section-single-wysiwyg__wysiwyg" v-html="wysiwyg"></div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'TheSectionSingleWysiwyg',
        props: {
            wysiwyg: String,
            title: String,
        }
    }
</script>

<style lang="scss" scoped>
    .c-section-single-wysiwyg {
        background-color: $white;
        padding: 20px 0;

        ::v-deep h2 {
            color: $black;
            color: $orange;
            font-size: 2rem;
            line-height: 2.125rem;
            margin: 20px 0;
        }

        ::v-deep p {
            color: $black;
            margin: 20px 0;
        }
    }
</style>
