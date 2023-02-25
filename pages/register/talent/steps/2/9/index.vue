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
        <TheFormRegisterTalentStepTwoNine
            :title="$t('registerform.steps.two.title')"
            :step_current_specific="9"
            :step_current_total="12"
            :back_title="$t('registerform.form.back_title')"
            :back_url="this.currentLang + '/register/talent/steps/2/8'"
            :submit_title="$t('registerform.form.next')"
            :contracts="this.ContractsApi['hydra:member']"
        />
    </div>
</template>

<script>
    import TheHeaderRegister from '@/components/header/TheHeaderRegister'
    import TheSectionListRegisterSteps from '@/components/section/TheSectionListRegisterSteps'
    import TheFormRegisterTalentStepTwoNine from '@/components/forms/TheFormRegisterTalentStepTwoNine';

    export default {
        name: "Talents",
        components: { TheHeaderRegister, TheSectionListRegisterSteps, TheFormRegisterTalentStepTwoNine },
        async asyncData({ app, params, $axios, $config: { baseURL } }) {
            const ContractsApi = await $axios.$get(`/api/contracts`, { 
                headers: {
                    'Accept-Language': app.i18n.locale,
                }
            })
			.then((res) => {
			  console.log(res)
			  return res
			})
			.catch((err) => {
			  console.error(err)
			});    

			return { ContractsApi }
        },
		computed: {
            currentLang () {
                return this.$i18n.locale == 'en' ? '/' + this.$i18n.locale : ''
            },
		}
    }
</script>

<style lang="scss" scoped>
    .layout__registertalents {
        overflow-x: hidden;
    }
</style>