<template>
    <div class="__layout--wrapper">


        <!-- The navigation -->
        <the-navigation/>

        <div class="page-offset">
            <div class="c-error">
                <div class="c-error__content">
                    <h1 class="c-error__content__title" v-if="error.statusCode === 404">{{$t('errorpage.404_title')}}</h1>
                    <h1 class="c-error__content__title" v-else>An error occurred</h1>
                    <div class="c-error__content__cta">
                        <cta
                            :url="$t('errorpage.cta_url')"
                            :title="$t('errorpage.cta_title')"
                            class="--bordered"
                        />
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
  
<script>
    import Cta from '@/components/Cta';

    export default {
      props: ['error'],
      components: { Cta },
      layout: 'error' // you can set a custom layout for the error page
    }
</script>

<style lang="scss" scoped>
    .c-error {
        height: calc(100vh - 91px - 200px);
        display: flex;
        justify-content: center;
        align-items: center;

        background-color: $white;
        background-image: url('/gradient-home.png');
        background-position: center;
        background-size: cover;

        .c-error__content {
            .c-error__content__title {
                font-size: 3rem;
                color: $orange;
                font-family: $font-family-custom;
                margin-bottom: 40px;
            }

            .c-error__content__cta {
                display: table;
                margin: 0 auto;
            }
        }
    }
</style>