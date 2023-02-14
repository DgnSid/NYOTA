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
        <TheFormRegisterTalentStepTwoSix
            :title="$t('registerform.steps.two.title')"
            :step_current_specific="6"
            :step_current_total="12"
            :back_title="$t('registerform.form.back_title')"
            back_url="/register/talent/steps/2/5"
            :submit_title="$t('registerform.form.next')"
            :countries="this.CountriesApi['hydra:member']"
        />
    </div>
</template>

<script>
    import TheHeaderRegister from '@/components/header/TheHeaderRegister'
    import TheSectionListRegisterSteps from '@/components/section/TheSectionListRegisterSteps'
    import TheFormRegisterTalentStepTwoSix from '@/components/forms/TheFormRegisterTalentStepTwoSix';

    export default {
        name: "Talents",
        components: { TheHeaderRegister, TheSectionListRegisterSteps, TheFormRegisterTalentStepTwoSix },
        async asyncData({app, params, $axios, $config: { baseURL } }) {      
			const CountriesApi = await $axios.$get(`/api/countries`)
			.then((res) => {
			  console.log(res)
			  return res
			})
			.catch((err) => {
			  console.error(err)
			});    

			return { CountriesApi }
  		},
    }
</script>

<style lang="scss" scoped>
    .layout__registertalents {
        overflow-x: hidden;
    }
</style>