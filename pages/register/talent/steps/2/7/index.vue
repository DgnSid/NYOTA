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
            :step="2"
        />
        <TheFormRegisterTalentStepTwoSeven
            :title="$t('registerform.steps.two.title')"
            :step_current_specific="7"
            :step_current_total="12"
            :back_title="$t('registerform.form.back_title')"
            back_url="/register/talent/steps/2/6"
            :submit_title="$t('registerform.form.next')"
            :languages="this.LanguagesApi['hydra:member']"
        />
    </div>
</template>

<script>
    import TheHeaderRegister from '@/components/header/TheHeaderRegister'
    import TheSectionListRegisterSteps from '@/components/section/TheSectionListRegisterSteps'
    import TheFormRegisterTalentStepTwoSeven from '@/components/forms/TheFormRegisterTalentStepTwoSeven';

    export default {
        name: "Talents",
        components: { TheHeaderRegister, TheSectionListRegisterSteps, TheFormRegisterTalentStepTwoSeven },
        async asyncData({app, params, $axios, $config: { baseURL } }) {      
			const LanguagesApi = await $axios.$get(`/api/languages`)
			.then((res) => {
			  console.log(res)
			  return res
			})
			.catch((err) => {
			  console.error(err)
			});    

			return { LanguagesApi }
  		},
    }
</script>

<style lang="scss" scoped>
    .layout__registertalents {
        overflow-x: hidden;
    }
</style>