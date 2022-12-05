<!-----
*
Template
*
------>
<template>
    <div :class="['breadcrumbs', uiClass]">
        <ol
            vocab="http://schema.org/"
            typeof="BreadcrumbList"
        >
            <li property="itemListElement" typeof="ListItem">
                <nuxt-link property="item" typeof="WebPage" to="/">
                    <span property="name">Home</span>
                </nuxt-link>
                <meta property="position" content="1" />
            </li>
            <li
                v-for="(crumb, index) in crumbs"
                :key="index"
                property="itemListElement"
                typeof="ListItem"
            >
                <nuxt-link property="item" typeof="WebPage" :to="crumb.path">
                    <span property="name">
                        {{ $route.fullPath === crumb.path && title !== null ? title : crumb.title }}
                    </span>
                </nuxt-link>
                <meta property="position" :content="index + 2" />
            </li>
        </ol>
    </div>
</template>

<!-----
*
Script
*
------>
<script>

    export default {
        props: {
            title: {
                type: String,
                default: null,
            },
            uiClass: {
                type: String
            },
        },
        computed: {
            crumbs() {

                const fullPath = this.$route.fullPath
                const params = fullPath.startsWith('/') ? fullPath.substring(1).split('/') : fullPath.split('/')
                const crumbs = []

                let path = ''

                params.forEach((param, index) => {
                    path = `${path}/${param}`
                    const match = this.$router.match(path)

                    if (match.name !== null) {
                        crumbs.push({
                            title: param.replace(/-/g, ' ').charAt(0).toUpperCase() + param.replace(/-/g, ' ').slice(1),
                            ...match,
                        })
                    }
                })

                return crumbs

            },
        },
    }

</script>

<!-----
*
Style
*
------>
<style lang="scss" scoped>

    .breadcrumbs {

        ol {
            display: flex;
            align-items: center;

            li {
                list-style: none;

                & + li {
                    margin-left: 15px;

                    &:before {
                        content: ">";

                        display: inline-block;

                        margin-right: 15px;
                    }
                }

            }
        }
    }

</style>