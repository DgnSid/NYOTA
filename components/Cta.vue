<template>
    <div class="c-cta">
        <NuxtLink v-if="url" class="c-cta__link" :to="url"></NuxtLink>
        <span class="c-cta__text">{{title}}</span>
    </div>
</template>

<script>
    export default {
        name: 'Cta',
        props: {
            title: String,
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
    .c-cta {
        cursor: pointer;
        position: relative;
        background: $gradientOrange;
        padding: 16px 24px;
        border-radius: 100px;
        text-align: center;

        @include media-breakpoint-down(md) {
            margin: 10px;
        }

        &.--white {
            background: $white;
            .c-cta__text {
                color: $orange;
            }

            &:hover {
                background: $gradientOrange;

                .c-cta__text {
                    color: $white;
                }
            }
        }

        &.--bordered {
            border: 1px solid $orange;
        }

        .c-cta__link {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }

        &:not(:last-child) {
            margin-right: 16px;           
        }

        .c-cta__text {
            font-weight: 700;
            font-size: 0.675rem;
            text-transform: uppercase;
            letter-spacing: 4px;
            color: $white;

            transition: .2s ease-out;

            @media screen and (max-width: 1400px) {
                letter-spacing: 2px;
            }
        }

        &.cta-h-small {
            padding: 8px 14px;

            @media screen and (min-width: 1360px) {
                padding: 8px 40px;
            }
        }

        &:hover {
            background: $white;
            .c-cta__text {
                color: $orange;
            }
        }
    }
</style>
