<template>
    <div class="layout-contact">
        <TheHeaderSmall
            :title="$t('page_contact.title')"
            :text="$t('page_contact.text')"
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
    head() {
      return {
        title: this.$t('page_contact.seo_title'),
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: this.$t('page_contact.seo_description')
          }
        ]
      }
    },
    components: {
        TheHeaderSmall,
        TheFormContact,
    },
}
</script>
