<!-----
*
Template
*
------>
<template>
	<div class="layout__registertalents">
        <TheHeaderRegister
            :title="$t('registertalent.header.confirm_title')"
            :text="$t('registertalent.header.confirm_text')"
            :logo="true"
        />
        <TheFormRegisterTalentStepConfirm
            :title="$t('registerform.steps.confirm.title')"
            :text="$t('registerform.steps.confirm.text')"
        />
    </div>
</template>

<script>
    import TheHeaderRegister from '@/components/header/TheHeaderRegister'
    import TheFormRegisterTalentStepConfirm from '@/components/forms/TheFormRegisterTalentStepConfirm';

    export default {
        name: "Talents",
        components: { TheHeaderRegister, TheFormRegisterTalentStepConfirm },
        async asyncData({ app, params, $axios, $config: { baseURL } }) {

        }
    }
</script>

<style lang="scss" scoped>
    .layout__registertalents {
        overflow-x: hidden;
    }
</style>