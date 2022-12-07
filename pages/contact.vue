<template>
    <div class="layout-contact">
        <TheHeaderSmall
            :title="contactData.blockHeader.title"
            :text="contactData.blockHeader.text"
            :logo="true"
        />
        <TheFormContact />
    </div>
</template>

<script>
import TheHeaderSmall from '@/components/header/TheHeaderSmall.vue'
import TheFormContact from '@/components/forms/TheFormContact.vue'

export default {
    name: "contactPage",
    components: {
        TheHeaderSmall,
        TheFormContact,
    },
    async asyncData({ app, params, $axios, $config: { baseURL } }) {
        const contactData = await $axios.$get(`https://4ed59c05-70d1-4a3d-9853-e7bf3a6fc552.mock.pstmn.io/contact`, {
            headers: {
              'x-api-key': 'PMAK-6375006c1d4a8b7337c50e05-92b517b7ee4aa56076bdf9ac26e1af6158',
              'Accept-Language': app.i18n.locale,
            }
        });

        return { contactData }
    }
}
</script>
