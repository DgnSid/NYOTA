<template>
    <div class="layout-contact">
        <TheHeaderConnexion
            :title="connexionData.blockHeader.title"
            :text="connexionData.blockHeader.text"
            :image="connexionData.blockHeader.image"
            :logo="true"
        />
        <TheFormConnexion />
    </div>
</template>

<script>
import TheHeaderConnexion from '@/components/header/TheHeaderConnexion.vue'
import TheFormConnexion from '@/components/forms/TheFormConnexion.vue'

export default {
    name: "contactPage",
    components: {
        TheHeaderConnexion,
        TheFormConnexion,
    },
    async asyncData({ app, params, $axios, $config: { baseURL } }) {
        // const connexionData = await $axios.$get(`https://4ed59c05-70d1-4a3d-9853-e7bf3a6fc552.mock.pstmn.io/contact`, {
        //     headers: {
        //       'x-api-key': 'PMAK-6375006c1d4a8b7337c50e05-92b517b7ee4aa56076bdf9ac26e1af6158',
        //       'Accept-Language': app.i18n.locale,
        //     }
        // });

        const connexionData = {
            "seo": {
                "title": "string",
                "description": "string"
            },
            "blockHeader": {
                "title": "Se connecter",
                "text": "Fusce venenatis aliquam sem, sit amet cursus eros fringilla et. Maecenas eu orci ipsum. Mauris gravida pulvinar erat consequat ultricies.",
                "image": {
                  "url": "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
                  "alt": "alt à définir"
                },
            }
        }

        return { connexionData }
    }
}
</script>
