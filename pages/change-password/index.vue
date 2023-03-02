<template>
    <div class="layout-contact">
        <TheHeaderSmall
            :title="connexionData.blockHeader.title"
            :text="connexionData.blockHeader.text"
            :logo="true"
        />
        <TheFormChangePassword />
    </div>
</template>

<script>
import TheHeaderSmall from '@/components/header/TheHeaderSmall.vue'
import TheFormChangePassword from '@/components/forms/TheFormChangePassword.vue'

export default {
    name: "contactPage",
    components: {
        TheHeaderSmall,
        TheFormChangePassword,
    },
    async asyncData({ app, params, $axios, $config: { baseURL } }) {
        const connexionData = {
            "seo": {
                "title": "string",
                "description": "string"
            },
            "blockHeader": {
                "title": "Changer de mot de passe",
                "text": "Fusce venenatis aliquam sem, sit amet cursus eros fringilla et. Maecenas eu orci ipsum. Mauris gravida pulvinar erat consequat ultricies."
            }
        }

        return { connexionData }
    }
}
</script>
