<!-----
*
Template
*
------>
<template>
	<div class="layout__blog">
        <section class="section">
            <div class="container">
                <h1 class="title-xl mb-lg">{{pageNewsData.blockHeader.title}}</h1>
                <div class="row">
                    <ui-card-news v-for="index in 9" :key="index"
                        :image="require('~/assets/images/app/banner.jpg')"
                        date="14 JANVIER 2022"
                        title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis fermentum aliquet viverra libero. Tempor malesuada donec fames tortor."
                        uiClass="col-md-4 mb-lg"
                        :url="current_lang == 'en' ? '/en/news/lorem-ipsum' : '/news/lorem-ipsum'"
                    ></ui-card-news>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: "NewsPage",
    components: {},
    async asyncData({ app, params, $axios, $config: { baseURL } }) {
        const current_lang = app.i18n.locale
        const pageNewsData = await $axios.$get(`https://4ed59c05-70d1-4a3d-9853-e7bf3a6fc552.mock.pstmn.io/news`, {
            headers: {
              'x-api-key': 'PMAK-6375006c1d4a8b7337c50e05-92b517b7ee4aa56076bdf9ac26e1af6158',
              'Accept-Language': app.i18n.locale,
            }
        });

        return { pageNewsData, current_lang }
    }
}
</script>

<!-----
*
Style scoped
*
------>
<style lang="scss" scoped></style>
