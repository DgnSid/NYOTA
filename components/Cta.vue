<template>
    <div class="c-cta">
        <nuxt-link v-if="url" class="c-cta__link" :to="url"></nuxt-link>
        <div class="c-cta__cover"></div>
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

        &.--table {
            display: table;
        }

        @include media-breakpoint-down(md) {
            margin: 10px;
        }

        &.--white {
            background: $white;
            .c-cta__text {
                color: $orange;
            }

            .c-cta__cover {
                background: $white;
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
            z-index: 3;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }

        &:not(:last-child) {
            margin-right: 16px;           
        }

        .c-cta__cover {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border-radius: 100px;
            background: $gradientOrange;
            opacity: 1;

            transition: opacity .2s ease-out;
        }

        .c-cta__text {
            position: relative;
            z-index: 2;
            font-weight: 700;
            font-size: 0.675rem;
            text-transform: uppercase;
            letter-spacing: 4px;
            color: $white;

            transition: .2s ease-out;

            @media screen and (max-width: 1400px) {
                letter-spacing: 2px;
            }

            @include media-breakpoint-down(md) {
                font-size: .55rem !important;
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

            .c-cta__cover {
                opacity: 0;
            }
        }
    }
</style>
