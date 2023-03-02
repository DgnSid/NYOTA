<template>
    <div class="layout-contact">
        <TheHeaderSmall
            :title="$t('privacypolicypage.title')"
            :logo="true"
        />
    </div>
</template>

<script>
import TheHeaderSmall from '@/components/header/TheHeaderSmall.vue'

export default {
    name: "contactPage",
    components: {
        TheHeaderSmall,
    },
}
</script>
