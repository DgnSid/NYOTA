<!-----
*
Template
*
------>
<template>
	<div class="layout__blog__single">
        <section class="section">
            <div class="container">
                <h1 class="title-xl mb-lg">{{singleNewsData.blockHeader.title}}</h1>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: "NewsSingle",
    components: {},
    async asyncData({ app, params, $axios, $config: { baseURL } }) {
        const singleNewsData = await $axios.$get(`https://4ed59c05-70d1-4a3d-9853-e7bf3a6fc552.mock.pstmn.io/news/${params.slug}`, {
            headers: {
              'x-api-key': 'PMAK-6375006c1d4a8b7337c50e05-92b517b7ee4aa56076bdf9ac26e1af6158',
              'Accept-Language': app.i18n.locale,
            }
        });

        return { singleNewsData }
    }
}
</script>

<style lang="scss" scoped></style>