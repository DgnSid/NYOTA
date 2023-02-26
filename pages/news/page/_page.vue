<!-----
*
Template
*
------>
<template>
	<div class="layout__blog">
        <TheHeaderNewsArchive
            :title="$t('pagenews.header.title')"
            :category_list="newsCategories['hydra:member']"
            :pen="true"
            :logo="true"
        />
        <TheSectionListNewsAlt
            :news="newsList['hydra:member']"
            :total="newsList['hydra:totalItems']"
        />
    </div>
</template>

<script>
import { eventHub } from '@/plugins/eventhub'
import TheHeaderNewsArchive from '../../../components/header/TheHeaderNewsArchive.vue';
import TheSectionListNewsAlt from '../../../components/section/TheSectionListNewsAlt.vue';

export default {
    name: "NewsPage",
    components: { TheHeaderNewsArchive, TheSectionListNewsAlt },
    mounted: function() {
      eventHub.$on('filter-news-by-category', (data) => {
        console.log(data)
        console.log(this.$i18n.locale)
        this.$axios.$get(`/api/news?itemsPerPage=12&page=1&category=${data}`, {
          headers: {
            'Accept-Language': this.$i18n.locale,
          },
        })
        .then((res) => {
          console.log(res)
          eventHub.$emit('update-news-by-category', res)
        })
        .catch((err) => {
          console.error(err)
        });
      })
    },
    async asyncData({ app, params, route, $axios, $config: { baseURL } }) {
        const current_lang = app.i18n.locale
        const current_page = route.params.page

        console.log(params)

        const newsCategories = await $axios.$get(`/api/categories`, {
            headers: {
              'Accept-Language': app.i18n.locale,
            },
        })
        .then((res) => {
          console.log(res)
          return res
        })
        .catch((err) => {
          console.error(err)
        });

        const newsList = await $axios.$get(`/api/news?itemsPerPage=12&page=${params.page}`, {
          headers: {
            'Accept-Language': app.i18n.locale,
          },
        })
        .then((res) => {
          console.log(res)
          return res
        })
        .catch((err) => {
          console.error(err)
        });  

        return { newsCategories, newsList, current_lang }
    }
}
</script>

<!-----
*
Style scoped
*
------>
<style lang="scss" scoped></style>
