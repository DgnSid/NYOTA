<template>
    <div class="layout-contact">
        <TheHeaderSmall
            :title="connexionData.blockHeader.title"
            :text="connexionData.blockHeader.text"
            :logo="true"
        />
        <TheFormForgottenPassword />
    </div>
</template>

<script>
import TheHeaderSmall from '@/components/header/TheHeaderSmall.vue'
import TheFormForgottenPassword from '@/components/forms/TheFormForgottenPassword.vue'

export default {
    name: "contactPage",
    components: {
        TheHeaderSmall,
        TheFormForgottenPassword,
    },
    async asyncData({ app, params, $axios, $config: { baseURL } }) {
        const connexionData = {
            "seo": {
                "title": "string",
                "description": "string"
            },
            "blockHeader": {
                "title": "Mot de passe oublié",
                "text": "Fusce venenatis aliquam sem, sit amet cursus eros fringilla et. Maecenas eu orci ipsum. Mauris gravida pulvinar erat consequat ultricies."
            }
        }

        return { connexionData }
    }
}
</script>
