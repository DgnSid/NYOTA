<template>
    <div class="layout-contact">
        <TheHeaderSmall
            :title="$t('pageregistercompany.title')"
            :text="$t('pageregistercompany.text')"
            :logo="true"
        />
        <TheFormCompany />
    </div>
</template>

<script>
import TheHeaderSmall from '@/components/header/TheHeaderSmall.vue'
import TheFormCompany from '@/components/forms/TheFormCompany.vue'

export default {
    name: "contactPage",
    components: {
        TheHeaderSmall,
        TheFormCompany,
    }
}
</script>
