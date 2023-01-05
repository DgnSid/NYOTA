<template>
    <article class="c-card-feature" :class="class_string" >
        <NuxtLink class="c-card-feature__link" :to="url"></NuxtLink>
        <div class="c-card-feature__text">
            <h2 class="c-card-feature__text__title">
                {{title}}
            </h2>
            <div class="c-card-feature__text__description">
                {{description}}
            </div>
        </div>
        <div class="c-card-feature__arrow-container">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M18.7074 6.29289C18.3168 5.90237 17.6837 5.90237 17.2931 6.29289C16.9026 6.68342 16.9026 7.31658 17.2931 7.70711L24.586 15H5.00024C4.44796 15 4.00024 15.4477 4.00024 16C4.00024 16.5523 4.44796 17 5.00024 17H24.586L17.2931 24.2929C16.9026 24.6834 16.9026 25.3166 17.2931 25.7071C17.6837 26.0976 18.3168 26.0976 18.7074 25.7071L27.7074 16.7071C27.8904 16.524 27.9877 16.2877 27.9991 16.048C27.9999 16.032 28.0002 16.016 28.0002 16M28.0002 15.9908C27.9979 15.7379 27.9003 15.4858 27.7074 15.2929L18.7074 6.29289" fill="white"/>
            </svg>
        </div>
    </article>
</template>

<script>
    export default {
        name: 'cardFeature',
        props: {
            class_string: String,
            title: String,
            description: String,
            url: String,
        }
    }
</script>

<!-----
*
Style scoped
*
------>
<style lang="scss" scoped>
    .c-card-feature {
        position: relative;
        display: flex;
        align-items: center;
        padding-bottom: 60px;

        border-bottom: 1px solid $orange;

        &:not(:last-child) {
            margin-bottom: 60px;
        }

        .c-card-feature__link {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }

        .c-card-feature__text {
            color: $black;
            padding-right: 40px;
            .c-card-feature__text__title {
                font-family: $font-family-default;
                font-size: 2rem;
                line-height: 2.375rem;
                font-weight: 200;
                margin-bottom: 20px;

                transition: color .2s ease-out;
            }

            .c-card-feature__text__description {
                font-family: $font-family-default;
                font-size: 1.125rem;
                line-height: 1.625rem;
                font-weight: 400;
            }
        }

        .c-card-feature__arrow-container {
            height: 86px;
            min-width: 86px;
            border-radius: 100%;
            background-color: $orange;
            display: flex;
            align-items: center;
            justify-content: center;

            transition: background-color .2s ease-out;
        }

        &:hover {
            .c-card-feature__text__title {
                color: $orange;
            }

            .c-card-feature__arrow-container {
                background-color: $white;

                svg > path {
                    fill: $orange;
                }
            }
        }
    }
</style>
