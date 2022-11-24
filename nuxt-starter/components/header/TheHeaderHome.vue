<template>
    <header class="c-header-home">
        <div class="container">
            <div class="row">
                <div :class="big ? 'col-lg-11 offset-lg-1' : list ? 'col-lg-10 offset-lg-1' : 'col-lg-13 offset-lg-1'">
                    <h1 class="c-header-home__title" :class="class_title">
                        <span class="--intro_title">{{small_title}}</span>
                        <span v-html="big_title"></span>
                        <b>{{big_title_alt}}</b>
                    </h1>
                    <div class="c-header-home__text" v-html="text"></div>
                    <div v-if="cta_left" class="c-header-home__ctas">
                        <cta
                            v-if="cta_left" 
                            :url="cta_left.url"
                            :title="cta_left.title"
                            class=""
                        />

                        <cta
                            v-if="cta_right"
                            :url="cta_right.url"
                            :title="cta_right.title"
                            class=""
                        />
                    </div>
                    <div v-if="list" class="c-header-home__list-container">
                        <div class="c-header-home__list-element" v-for="(element, index) in list" :key="index">
                            <svg class="c-header-home__list-element__icon" width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M29 10L15 24L8 17" stroke="url(#paint0_linear_2427_4495)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <defs>
                                <linearGradient id="paint0_linear_2427_4495" x1="8" y1="24" x2="29.0491" y2="10.0742" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#FF7A00"/>
                                <stop offset="0.645833" stop-color="#FB9B11"/>
                                </linearGradient>
                                </defs>
                            </svg>
                            <span class="c-header-home__list-element__text">{{element.text}}</span>
                        </div>
                        <div v-if="list" class="c-header-home__list-cta-container">
                            <cta
                                v-if="cta"
                                :url="cta.url"
                                :title="cta.title"
                                class="--bordered"
                            />
                        </div>
                    </div>
                </div>
                <div :class="big ? 'col-lg-7 offset-lg-5' : list ? 'col-lg-7 offset-lg-5' : 'col-lg-7 offset-lg-2'" class="md-down-mt-md">
                    <ImageBordered 
                        :url="image_top.url"
                        :alt="image_top.alt"
                        class_string="--right --h300"
                    />

                    <ImageBordered 
                        :url="image_bottom.url"
                        :alt="image_bottom.alt"
                        class_string="--left --h300"
                    />
                </div>

                

                <svg v-if="ellipse" class="c-header-home__ellipse" width="249" height="358" viewBox="0 0 249 358" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="179" cy="179" r="179" fill="#1D67F1"/>
                </svg>


                <svg v-if="bulb" class="c-header-home__bulb" width="109" height="115" viewBox="0 0 109 115" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_1600_2347)">
                    <path d="M76.1713 64.0743C77.4773 62.9153 78.6385 61.5513 79.6035 60.2078C86.8317 50.1451 84.6402 36.2097 74.7107 29.0772C64.7812 21.9447 50.8774 24.3287 43.6492 34.3914C40.1856 39.2133 38.8143 44.6711 39.4681 50.0307C39.8684 53.3027 39.0678 56.6195 37.1226 59.2855C37.1083 59.3054 37.0939 59.3254 37.0796 59.3453C35.5805 61.4042 33.7853 63.2301 32.3261 65.3177C31.4126 66.6175 30.6127 68.1098 30.7021 69.6965C30.8839 72.8519 34.2455 75.4379 36.4512 77.3046C38.5354 79.074 40.8067 80.6249 43.2025 81.9324C45.1727 83.0048 47.6973 84.2032 50.0161 83.57C51.5436 83.1548 52.7071 81.9137 53.6473 80.6329C55.153 78.5788 56.3168 76.2993 57.7893 74.2214C58.7095 72.9263 59.5426 71.7805 60.9049 70.8938C62.2463 70.0223 63.7675 69.4615 65.2875 69.0006C67.9893 68.1989 70.5948 67.4893 73.1134 66.2132C74.2026 65.6647 75.2258 64.9277 76.1779 64.079" stroke="#1D67F1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M30.8597 70.445C29.3111 70.3005 27.8507 71.5201 27.4029 73.0132C26.9598 74.4997 27.3697 76.1452 28.1955 77.4643C29.0212 78.7834 30.2065 79.8264 31.4149 80.7952C34.7058 83.4515 38.285 85.7906 42.2244 87.3197C43.5959 87.8511 45.1094 88.2829 46.5255 87.8684C47.9416 87.4539 49.0901 85.8692 48.5385 84.505" stroke="#1D67F1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M27.2224 75.1018C25.6738 74.9573 24.4969 76.1889 24.0539 77.6754C23.6108 79.1619 24.0207 80.8074 24.8465 82.1265C25.6722 83.4456 26.8575 84.4886 28.0659 85.4574C31.3568 88.1137 34.936 90.4528 38.8755 91.9819C40.2469 92.5133 41.7604 92.9451 43.1765 92.5306C44.5926 92.1161 45.7411 90.5314 45.1895 89.1672" stroke="#1D67F1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M24.3528 81.4392C22.462 84.0434 22.6563 87.4901 24.4847 90.1344C25.6993 91.8941 27.5636 93.0719 29.3919 94.1735C30.6998 94.9617 32.0733 95.7567 33.5858 95.8954C34.8176 96.0039 36.0537 95.6718 37.1743 95.1358C38.2882 94.5949 39.2951 93.8664 40.2973 93.1444" stroke="#1D67F1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M33.5709 70.3456C38.977 72.3435 43.8577 75.7183 47.6478 80.0641" stroke="#1D67F1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M38.5575 72.6471C42.0771 70.4264 44.3964 66.7487 46.2696 63.0328C48.3869 58.8369 50.0956 54.4382 51.3661 49.9062" stroke="#1D67F1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M63.2705 59.7177C63.8113 59.2593 64.0432 58.4175 63.6949 57.7943" stroke="#1D67F1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M57.1655 54.6669C56.7266 55.3902 56.7532 56.3772 57.1276 57.1603C57.5758 58.1074 58.4263 58.7889 59.3152 59.3468C59.9174 59.7289 60.5596 60.0692 61.2595 60.1888C61.9595 60.3085 62.7315 60.1875 63.2705 59.7177" stroke="#1D67F1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M59.622 55.4131C59.7522 55.1336 59.7884 54.8168 59.6874 54.5225C59.5383 54.1129 59.1186 53.8416 58.6839 53.8016C58.251 53.773 57.8175 53.9557 57.5026 54.2538C57.371 54.381 57.264 54.5159 57.1655 54.667" stroke="#1D67F1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M52.7269 52.4162C52.1646 53.676 52.8154 55.2526 53.9607 56.0147C55.1059 56.7768 56.6072 56.847 57.9431 56.516C58.4287 56.4011 58.9212 56.2204 59.2809 55.8739C59.4174 55.74 59.5321 55.5804 59.6201 55.4017" stroke="#1D67F1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M54.9693 53.7549C55.4296 53.5209 55.802 53.0725 55.8293 52.5577C55.8619 51.825 55.1387 51.2047 54.4136 51.2182C53.6885 51.2317 53.0361 51.7613 52.7287 52.4277" stroke="#1D67F1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M48.9769 49.2488C48.8724 49.5065 48.8259 49.7957 48.8365 50.0755C48.8691 50.6333 49.1139 51.162 49.4313 51.632C50.3341 52.956 51.8586 53.8494 53.4625 53.9731C53.9742 54.0181 54.5072 53.9774 54.9741 53.7482" stroke="#1D67F1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M51.011 48.7034C50.6373 48.2838 49.9361 48.2641 49.4794 48.5914C49.2486 48.7583 49.0862 48.9845 48.9769 49.2488" stroke="#1D67F1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M62.4321 57.8551C55.4406 62.8753 49.5275 69.3959 45.2101 76.8511" stroke="#1D67F1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M47.4988 37.6306C50.6833 32.9308 56.267 29.9545 61.94 29.9259C67.6129 29.8973 73.2228 32.8178 76.4497 37.485" stroke="#1D67F1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M29.2769 73.462C29.3118 74.5356 29.8225 75.578 30.6387 76.2651" stroke="#1D67F1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M26.1523 78.2047C26.3842 79.2283 26.8657 80.1993 27.5483 81.0022" stroke="#1D67F1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M25.4387 86.1413C25.6187 86.7042 25.9826 87.2075 26.4516 87.5646" stroke="#1D67F1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M29.726 41.3189C31.149 41.484 32.5572 41.8099 33.9078 42.2861" stroke="#1D67F1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M31.6447 33.2195C32.9287 33.7183 34.2174 34.2105 35.5014 34.7093" stroke="#1D67F1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M36.4853 24.8395C37.7905 25.5753 39.1023 26.316 40.4075 27.0519" stroke="#1D67F1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M45.0712 17.0526C46.0471 18.1065 47.0297 19.1652 48.0056 20.2192" stroke="#1D67F1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M54.7116 12.9875C55.1652 14.3619 55.6121 15.7315 56.0657 17.1059" stroke="#1D67F1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M66.7889 13.9598C66.7451 15.2692 66.6945 16.5739 66.6507 17.8834" stroke="#1D67F1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M80.0125 20.1816C79.332 21.185 78.6515 22.1884 77.971 23.1918" stroke="#1D67F1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M89.4163 29.6588C88.318 30.4024 87.2196 31.146 86.1212 31.8895" stroke="#1D67F1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M93.976 39.1752C92.7285 39.5092 91.4811 39.8432 90.2402 40.182" stroke="#1D67F1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M95.3613 51.3014C94.3855 51.1449 93.3984 50.9904 92.4226 50.8339" stroke="#1D67F1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M91.9866 61.3998C90.9406 60.8501 89.8946 60.3004 88.8505 59.7621" stroke="#1D67F1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M86.1114 70.1961C84.7788 69.0775 83.451 67.9524 82.1251 66.8386" stroke="#1D67F1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M79.0998 75.595C78.5041 74.6428 77.9037 73.6973 77.308 72.7452" stroke="#1D67F1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_1600_2347">
                    <rect width="68.4032" height="91.3959" fill="white" transform="translate(53.3203) rotate(35.6902)"/>
                    </clipPath>
                    </defs>
                </svg>


                <svg v-if="logo" class="c-header-home__logo" width="371" height="283" viewBox="0 0 371 283" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M195.905 372.043C194.207 370.345 192.973 368.129 192.448 365.642L159.046 203.974L10.9574 183.497C5.38254 182.72 1.00151 178.393 0.169074 172.818C-0.663365 167.243 2.27457 161.841 7.37787 159.53L142.71 97.8018L66.1781 21.9244L66.1507 21.897C62.2624 18.0087 61.3199 12.1057 63.8219 7.19403C66.3513 2.30979 71.7269 -0.382351 77.1382 0.558991L283.041 36.1668C288.507 37.1082 292.697 41.5163 293.447 47.0091C294.17 52.4745 291.259 57.795 286.238 60.0782L186.383 105.607L266.94 185.455L310.144 84.3653C312.317 79.2344 317.637 76.1596 323.185 76.8554C328.732 77.4965 333.195 81.7413 334.163 87.2346L370.094 290.953C371.035 296.364 368.398 301.74 363.541 304.297C358.657 306.826 352.726 305.911 348.811 302.05L275.62 229.513L216.412 368.129C214.266 373.178 209.055 376.253 203.562 375.666C200.584 375.359 197.931 374.014 195.932 372.015M178.532 183.775C180.257 185.5 181.464 187.689 181.989 190.176L209.037 321.123L256.37 210.318L161.986 116.751L57.492 164.4L171.339 180.125C174.126 180.514 176.67 181.804 178.587 183.721M238.662 53.9854L112.425 32.1392L167.298 86.5213L238.689 53.9582L238.662 53.9854ZM316.786 133.254L286.353 204.541L338.488 256.185L316.813 133.227L316.786 133.254Z" fill="white"/>
                </svg>


            </div>
        </div>
    </header>
</template>

<script>
    import Cta from '../Cta.vue';
    import ImageBordered from '../ImageBordered.vue';

    export default {
        name: 'HeaderHome',
        components: { Cta, ImageBordered },
        props: {
            small_title: String,
            class_title: String,
            big_title: String,
            big_title_alt: String,
            text: String,
            image_top: Object,
            image_bottom: Object,
            cta: Object,
            list: Array,
            cta_left: Object,
            cta_right: Object,
            ellipse: Boolean,
            bulb: Boolean,
            logo: Boolean,
            big: Boolean,
        }
    }
</script>

<!-----
*
Style scoped
*
------>
<style lang="scss" scoped>
    .c-header-home {
        position: relative;
        height: 100vh;

        display: flex;
        align-items: center;

        background-color: $white;
        background-image: url('/gradient-home.png');
        background-position: center;
        background-size: cover;

        .c-header-home__title {
            font-family: $font-family-default;
            font-size: 5.75rem;
            line-height: 4.875rem;
            font-weight: 800;
            margin-bottom: 24px;
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

        .c-header-home__text {
            font-size: 1.125rem;
            line-height: 1.5rem;
            margin-bottom: 44px;
            color: $dark-grey;

            ::v-deep span {
                background: $gradientOrange;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }
        }

        .c-header-home__ctas {
            display: flex;
            position: relative;
            z-index: 1;

            @include media-breakpoint-down(sm) {
               flex-direction: column;
               align-items: flex-start;
            }
        }

        .c-header-home__list-container {
            position: relative;
            background-color: $white;
            border-radius: 40px;
            padding: 40px;

            .c-header-home__list-element {

                &:not(:last-child) {
                    margin-bottom: 10px;
                }
                .c-header-home__list-element__icon {
                    margin-right: 20px;
                }
                .c-header-home__list-element__text {
                    color: $black;
                }
            }
        }

        .c-header-home__list-cta-container {
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
        }

        .c-header-home__ellipse {
            position: absolute;
            right: 0;
            top: 50%;
            transform: translateY(-50%);

            @include media-breakpoint-down(sm) {
                display: none;
            }
        }

        .c-header-home__bulb {
            position: absolute;
            left: 55%;
            top: 50%;
            transform: translate(-50%, -50%);

            @include media-breakpoint-down(sm) {
                display: none;
            }
        }

        .c-header-home__logo {
            position: absolute;
            left: 60%;
            bottom: 0;
            transform: translate(-50%, 0);
        }
    }
</style>
