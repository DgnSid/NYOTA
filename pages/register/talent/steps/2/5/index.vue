<!-----
*
Template
*
------>
<template>
	<div class="layout__registertalents">
        <TheHeaderRegister
            :title="$t('registertalent.header.title')"
            :text="HeaderRegisterApi.description"
            :logo="true"
        />
        <TheSectionListRegisterSteps
            :step="2"
        />
        <TheFormRegisterTalentStepTwoFive
            :title="$t('registerform.steps.two.title')"
            :step_current_specific="5"
            :step_current_total="12"
            :back_title="$t('registerform.form.back_title')"
            :back_url="this.currentLang + '/register/talent/steps/2/4'"
            :submit_title="$t('registerform.form.next')"
            :countries="this.CountriesApi['hydra:member']"
        />
    </div>
</template>

<script>
    import TheHeaderRegister from '@/components/header/TheHeaderRegister'
    import TheSectionListRegisterSteps from '@/components/section/TheSectionListRegisterSteps'
    import TheFormRegisterTalentStepTwoFive from '@/components/forms/TheFormRegisterTalentStepTwoFive';

    export default {
        name: "Talents",
        components: { TheHeaderRegister, TheSectionListRegisterSteps, TheFormRegisterTalentStepTwoFive },
        async asyncData({app, params, $axios, $config: { baseURL } }) {      
			const CountriesApi = await $axios.$get(`/api/countries`, {
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
            
            const HeaderRegisterApi = await $axios.$get(`/api/configuration/talent-registration`, {
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

			return { CountriesApi, HeaderRegisterApi}
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