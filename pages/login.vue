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
