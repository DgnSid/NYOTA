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
            :step="3"
        />
        <TheFormRegisterTalentStepThree
            :title="$t('registerform.steps.three.title')"
            :step_current_specific="1"
            :step_current_total="1"
            :back_title="$t('registerform.form.back_title')"
            :back_url="this.currentLang + '/register/talent/steps/2/12'"
            :submit_title="$t('registerform.form.next')"
            submit_url="/register/talent/steps/4"
        />
    </div>
</template>

<script>
    import TheHeaderRegister from '@/components/header/TheHeaderRegister'
    import TheSectionListRegisterSteps from '@/components/section/TheSectionListRegisterSteps'
    import TheFormRegisterTalentStepThree from '@/components/forms/TheFormRegisterTalentStepThree';

    export default {
        name: "Talents",
        components: { TheHeaderRegister, TheSectionListRegisterSteps, TheFormRegisterTalentStepThree },
        async asyncData({ app, params, $axios, $config: { baseURL } }) {
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
            
            return { HeaderRegisterApi }
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