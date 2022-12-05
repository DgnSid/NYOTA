<template>
    <section class="c-section-projourney">
        <div class="container">
            <div class="row">
                <div class="col-lg-20 offset-lg-2">
                    <h2>{{title}}</h2>
                </div>
                <div class="col-lg-20 offset-lg-2" v-for="(element, index) in news.slice(2, 4)" :key="index">
                    <div class="c-section-projourney__element">
                        <div class="c-section-projourney__element__figure">{{index}}.</div>
                        <div>{{element.title}}</div>
                        <div>{{element.text}}</div>
                    </div>
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
