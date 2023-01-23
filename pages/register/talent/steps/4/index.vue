<!-----
*
Template
*
------>
<template>
	<div class="layout__registertalents">
        <TheHeaderRegister
            :title="$t('registertalent.header.title')"
            :text="$t('registertalent.header.text')"
            :logo="true"
        />
        <TheSectionListRegisterSteps
            :step="4"
        />
        <TheFormRegisterTalentStepFour
            :title="$t('registerform.steps.four.title')"
            :step_current_specific="1"
            :step_current_total="1"
            :back_title="$t('registerform.form.back_title')"
            back_url="/register/talent/steps/3"
            :submit_title="$t('registerform.form.submit')"
            submit_url="/register/talent/steps/confirm"
        />
    </div>
</template>

<script>
    import TheHeaderRegister from '@/components/header/TheHeaderRegister'
    import TheSectionListRegisterSteps from '@/components/section/TheSectionListRegisterSteps'
    import TheFormRegisterTalentStepFour from '@/components/forms/TheFormRegisterTalentStepFour';

    export default {
        name: "Talents",
        components: { TheHeaderRegister, TheSectionListRegisterSteps, TheFormRegisterTalentStepFour },
        async asyncData({ app, params, $axios, $config: { baseURL } }) {

        }
    }
</script>

<style lang="scss" scoped>
    .layout__registertalents {
        overflow-x: hidden;
    }
</style>