<template>
    <div class="layout-contact">
        <TheHeaderConnexion
            v-if="this.$i18n.locale == 'fr'"
            title="Se connecter"
            text=""
            :image="connexionData.blockHeader.image"
            :logo="true"
        />
        <TheHeaderConnexion
            v-else            
            title="Login"
            text=""
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

        console.log('this.$i18n.locale ', app)
        const connexionData = {
            "seo": {
                "title": "string",
                "description": "string"
            },
            "blockHeader": {
                "text": "",
                "image": {
                  "url": "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
                  "alt": ""
                },
            }
        }

        return { connexionData }
    }
}
</script>
