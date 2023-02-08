<template>
    <header class="c-header-news">
        <div class="container">
            <div class="c-header-news__content">
                <h1 class="c-header-news__title a-stagger-element">
                    {{title}}
                </h1>

                <svg class="c-header-news__pen a-stagger-element" width="108" height="101" viewBox="0 0 108 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1549_2044)">
                <path d="M70.1202 71.89C73.0702 73.48 109.01 5.59999 106.06 4.00999C104.79 3.31999 102.24 1.94999 100.97 1.26999C98.3202 -0.16001 62.3802 67.72 65.0302 69.15C66.3002 69.84 68.8502 71.21 70.1202 71.89Z" stroke="#1D67F1" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M75.6104 50.83C75.1104 51.94 74.6104 53.04 74.1104 54.15" stroke="#1D67F1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M78.4996 52.04C78.0496 53.06 77.5896 54.09 77.1396 55.11" stroke="#1D67F1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M94.0996 11.41C96.6696 12.15 99.1296 13.3 101.36 14.79" stroke="#1D67F1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M95.8896 8.08997C98.5196 9.06997 101.04 10.3 103.43 11.77" stroke="#1D67F1" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M71.5703 53.73C74.5603 53.93 77.4503 55.43 79.3303 57.76" stroke="#1D67F1" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M73.5498 49.9C76.7198 49.83 79.8698 51.52 81.5698 54.2" stroke="#1D67F1" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M65.0796 69.22C63.1496 73.67 60.1096 77.63 56.3096 80.64" stroke="#1D67F1" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M56.1497 80.98C55.6597 85.38 53.6296 92.42 53.1396 96.82" stroke="#1D67F1" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M53.1299 96.83C56.8699 94.61 62.3499 89.85 66.0899 87.63" stroke="#1D67F1" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M53.1299 96.83C55.2099 93.36 59.1499 87.14 61.2199 83.67" stroke="#1D67F1" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M1.25 96.17C4.23 92.89 13.22 84.52 17.99 85.88C23.34 87.41 15.46 94.03 19.86 98.52C22.83 101.55 31.26 95.21 34.76 95.24C37.38 95.26 37.39 98.52 37.39 98.52C40 98.79 46.09 98.57 49.54 98.88" stroke="#1D67F1" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M61.4796 82.9499C61.3496 82.9199 61.2296 83.0499 61.2396 83.1799C61.2396 83.3099 61.3596 83.4199 61.4796 83.4499C61.7396 83.5299 62.0396 83.3199 62.0496 83.0499C62.0596 82.7799 61.7796 82.5499 61.5196 82.5999C61.2196 82.6599 61.0696 83.0799 61.2496 83.3299C61.4296 83.5799 61.8396 83.5999 62.0596 83.3899C62.2796 83.1799 62.2896 82.7999 62.0896 82.5699C61.8896 82.3399 61.5196 82.2999 61.2696 82.4599C61.0196 82.6299 60.9096 82.9799 61.0196 83.2599C61.1296 83.5399 61.4296 83.7299 61.7296 83.7199C62.1796 83.6999 62.5396 83.1799 62.3996 82.7399C62.2596 82.3099 61.6596 82.0999 61.2796 82.3599C60.8996 82.6099 60.8596 83.2399 61.1996 83.5399" stroke="#1D67F1" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M66.0801 87.42C66.2301 82.1 67.8601 76.82 70.7501 72.34" stroke="#1D67F1" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                <defs>
                <clipPath id="clip0_1549_2044">
                <rect width="107.49" height="100.59" fill="white"/>
                </clipPath>
                </defs>
                </svg>
            </div>
            <select v-model="category_filter" class="c-header-news__select a-stagger-element">
                <option value="">Type</option>
                <option v-for="(element, index) in category_list" :key="index" :value="element['@id'].split('/').pop()">{{element.name}}</option>
            </select>
        </div>
        
        <div class="c-header-news__logo a-stagger-element">
            <svg class="" width="339" height="513" viewBox="0 0 339 513" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M248.905 462.043C247.207 460.345 245.972 458.129 245.448 455.642L212.046 293.974L63.9571 273.497C58.3823 272.72 54.0013 268.393 53.1688 262.818C52.3364 257.243 55.2743 251.841 60.3776 249.53L195.709 187.802L119.178 111.924L119.15 111.897C115.262 108.009 114.32 102.106 116.822 97.194C119.351 92.3098 124.727 89.6176 130.138 90.559L336.041 126.167C341.507 127.108 345.697 131.516 346.447 137.009C347.17 142.475 344.259 147.795 339.238 150.078L239.383 195.607L319.94 275.455L363.143 174.365C365.317 169.234 370.637 166.16 376.184 166.855C381.732 167.497 386.194 171.741 387.163 177.235L423.094 380.953C424.035 386.364 421.398 391.74 416.541 394.297C411.656 396.826 405.726 395.911 401.811 392.05L328.62 319.513L269.412 458.129C267.265 463.178 262.055 466.253 256.562 465.666C253.584 465.359 250.931 464.014 248.932 462.015M231.532 273.775C233.257 275.5 234.464 277.689 234.989 280.176L262.037 411.123L309.37 300.318L214.986 206.751L110.492 254.4L224.339 270.125C227.126 270.514 229.67 271.804 231.586 273.721M291.661 143.985L165.425 122.139L220.298 176.521L291.689 143.958L291.661 143.985ZM369.785 223.254L339.353 294.541L391.487 346.185L369.813 223.227L369.785 223.254Z" fill="white"/>
            </svg>
        </div>
    </header>
</template>

<script>
    import { eventHub } from '@/plugins/eventhub'

    export default {
        name: 'HeaderHome',
        components: {},
        data() {
            return {
                category_filter: this.$store.state.newsarchive.inputCategoryFilter,
            }
        },
        props: {
            title: String,
            category_list: Array,
            pen: Boolean,
            logo: Boolean,
        },
        mounted() {
            const gsap = this.$gsap;
            this.tl = new gsap.timeline()

            this.tl.set('.a-stagger-element', {autoAlpha: 0, y:30})
            this.tl.staggerTo('.a-stagger-element', 0.6, {autoAlpha: 1, y:0, ease: "Power1.easeOut"}, .15, "=0.4")

            this.category_filter = this.$store.state.newsarchive.inputCategoryFilter
        },
        watch: {
            category_filter() {
                console.log('WATCH CATEGORY FILTER')
                // this.$router.push({path: '/news/page/1'})
                this.$store.commit('newsarchive/mutateInputCategoryFilter', this.category_filter)
                eventHub.$emit('filter-news-by-category', this.category_filter)
            }
        }
    }
</script>

<!-----
*
Style scoped
*
------>
<style lang="scss" scoped>
    .c-header-news {
        position: relative;
        height: 750px;

        display: flex;
        align-items: center;

        background-color: $white;
        background-image: url('/gradient-home.png');
        background-position: center;
        background-size: cover;

        .c-header-news__pen {
            @include media-breakpoint-down(sm) {
                display: none;
            }
        }

        .c-header-news__logo {
            position: absolute;
            right: 0;
            top: 50%;
            transform: translate(0, -50%);

            @include media-breakpoint-down(md) {
                display: none;
            }
        }

        .c-header-news__select {
            margin-top: 70px;

            border: 1px solid $orange;
            border-radius: 40px;
            color: $black;
            width: 200px;
            background-color: transparent;
            padding: 20px 16px;

            appearance: none;
            background-image: url('/arrow-down.svg');
            background-repeat: no-repeat;
            background-position: calc(100% - 20px) center;

        }

        .c-header-news__content {
            display: flex;
        }

        .c-header-news__title {
            font-family: $font-family-default;
            font-size: 5.75rem;
            line-height: 4.875rem;
            font-weight: 800;
            margin-bottom: 24px;
            margin-right: 20px;
            color: $black;

            span.--intro_title {
                display: block;
                font-family: $font-family-custom;
                font-weight: 400;
                font-size: 1.75rem;
                line-height: 2.375rem;
                margin-bottom: 10px;
                background: $gradientOrange;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }

            strong, b {
                background: $gradientOrange;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }

            &.--small {
                font-size: 3.6rem;
                line-height: 3.688rem;
            }

            @include media-breakpoint-down(md) {
                display: flex;
                flex-direction: column;

                font-size: 4.75rem;
                line-height: 3.875rem;
            }

            @include media-breakpoint-down(sm) {
                font-size: 3.75rem;
                line-height: 2.875rem;
            }
        }

        .c-header-news__logo {
            position: absolute;
            right: 0;
            top: 50%;
            transform: translate(0, -50%);
        }
    }
</style>
