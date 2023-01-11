<!-----
*
Template
*
------>
<template>
	<div class="layout__talents">
        <TheHeaderRegister
            :title="$t('registertalent.header.title')"
            :text="$t('registertalent.header.text')"
            :logo="true"
        />
        <TheSectionListRegisterSteps
            :step="1"
        />
        <TheFormRegisterTalent 
            :title="$t('registerform.steps.one.title')"
            :step_current_specific="1"
            :step_current_total="1"
            :back_title="$t('registerform.form.back_title')"
            back_url="#"
            :submit_title="$t('registerform.form.next')"
        />
    </div>
</template>

<script>
    import TheHeaderRegister from '@/components/header/TheHeaderRegister'
    import TheSectionListRegisterSteps from '@/components/section/TheSectionListRegisterSteps'
    import TheFormRegisterTalent from '@/components/forms/TheFormRegisterTalent';

    export default {
        name: "Talents",
        components: { TheHeaderRegister, TheSectionListRegisterSteps, TheFormRegisterTalent },
        async asyncData({ app, params, $axios, $config: { baseURL } }) {

        }
    }
</script>

<style lang="scss" scoped></style>