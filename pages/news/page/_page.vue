<!-----
*
Template
*
------>
<template>
	<div class="layout__blog">
        <TheHeaderNewsArchive
            :title="pageNewsData.blockHeader.title"
            :category_list="pageNewsData.blockHeader.text"
            :pen="true"
            :logo="true"
        />
        <TheSectionListNewsAlt
            :news="pageNewsDataPaginated.blockNews.news"
            :total="pageNewsData.blockNews.news.length"
        />
    </div>
</template>

<script>

import TheHeaderNewsArchive from '../../../components/header/TheHeaderNewsArchive.vue';
import TheSectionListNewsAlt from '../../../components/section/TheSectionListNewsAlt.vue';

export default {
    name: "NewsPage",
    components: { TheHeaderNewsArchive, TheSectionListNewsAlt },
    async asyncData({ app, params, route, $axios, $config: { baseURL } }) {
        const current_lang = app.i18n.locale
        const current_page = route.params.page

        // const pageNewsDataPaginated = await $axios.$get(`https://4ed59c05-70d1-4a3d-9853-e7bf3a6fc552.mock.pstmn.io/news?page=${current_page}`, {
        //     headers: {
        //       'x-api-key': 'PMAK-6375006c1d4a8b7337c50e05-92b517b7ee4aa56076bdf9ac26e1af6158',
        //       'Accept-Language': app.i18n.locale,
        //     }
        // });

        // const pageNewsData = await $axios.$get(`https://4ed59c05-70d1-4a3d-9853-e7bf3a6fc552.mock.pstmn.io/news`, {
        //     headers: {
        //       'x-api-key': 'PMAK-6375006c1d4a8b7337c50e05-92b517b7ee4aa56076bdf9ac26e1af6158',
        //       'Accept-Language': app.i18n.locale,
        //     }
        // });

        

        const pageNewsData = {
    "seo": {
        "title": "string",
        "description": "string"
    },
    "blockHeader": {
        "title": "Actualité FR"
    },
    "blockNews": {
        "news": [
            {
                "title": "string 1",
                "url": "#",
                "publicationDate": "2022-11-16T16:35:49.556Z",
                "image": {
                  "url": "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
                  "alt": "A définir"
                }
            },
            {
                "title": "string 1",
                "url": "#",
                "publicationDate": "2022-11-16T16:35:49.556Z",
                "image": {
                  "url": "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
                  "alt": "A définir"
                }
            },
            {
                "title": "string 1",
                "url": "#",
                "publicationDate": "2022-11-16T16:35:49.556Z",
                "image": {
                  "url": "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
                  "alt": "A définir"
                }
            },
            {
                "title": "string 1",
                "url": "#",
                "publicationDate": "2022-11-16T16:35:49.556Z",
                "image": {
                  "url": "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
                  "alt": "A définir"
                }
            },
            {
                "title": "string 1",
                "url": "#",
                "publicationDate": "2022-11-16T16:35:49.556Z",
                "image": {
                  "url": "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
                  "alt": "A définir"
                }
            },
            {
                "title": "string 1",
                "url": "#",
                "publicationDate": "2022-11-16T16:35:49.556Z",
                "image": {
                  "url": "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
                  "alt": "A définir"
                }
            },
            {
                "title": "string 1",
                "url": "#",
                "publicationDate": "2022-11-16T16:35:49.556Z",
                "image": {
                  "url": "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
                  "alt": "A définir"
                }
            }
        ]
    }
}

        const pageNewsDataPaginated = {
    "seo": {
        "title": "string",
        "description": "string"
    },
    "blockHeader": {
        "title": "Actualité FR"
    },
    "blockNews": {
        "news": [
            {
                "title": "string 1 page 1",
                "url": "#",
                "publicationDate": "2022-11-16T16:35:49.556Z",
                "image": {
                  "url": "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
                  "alt": "A définir"
                }
            }
        ]
    }
}

        return { pageNewsData, pageNewsDataPaginated, current_lang }
    }
}
</script>

<!-----
*
Style scoped
*
------>
<style lang="scss" scoped></style>
