<template>
    <div class="c-pagination"> 

      <!--BACK-->
      <div v-if="currentPage === 1" class="c-pagination-prev disabledStyle">
        <span class="hidden">Prev</span>
        <SingleBack />
      </div>  
      <nuxt-link
        v-else
        :to="{ name: 'news-page-page___fr', params: { page: prevPage } }"
        class="c-pagination-prev"
        :class="buttonStyles"
      >
        <SingleBack />
        <span class="hidden">Prev</span>
      </nuxt-link>

      <!--FIRST PAGE-->
      <nuxt-link
          v-if="currentPage < totalPagesMinusTwo"
          :to="{ name: 'news-page-page___fr', params: { page: currentPage } }"
          :class="buttonStyles"
          class="c-pagination__page current"
      >
        <span v-if="currentPage < 10">0</span>
        {{(currentPage)}}
      </nuxt-link>

      <!--SECOND PAGE-->
      <nuxt-link
          v-if="currentPage + 1 < totalPagesMinusTwo"
          :to="{ name: 'news-page-page___fr', params: { page: nextPagePlusOne } }"
          :class="buttonStyles"
          class="c-pagination__page"
      >
        <span v-if="currentPage + 1 < 10">0</span>
        {{(currentPage + 1)}}
      </nuxt-link>

      <!--THIRD PAGE-->
        <nuxt-link
            v-if="currentPage + 2 < totalPagesMinusTwo"
            :to="{ name: 'news-page-page___fr', params: { page: nextPagePlusTwo } }"
            :class="buttonStyles"
            class="c-pagination__page"
        >
          <span v-if="currentPage + 2 < 10">0</span>
          {{(currentPage + 2)}}
        </nuxt-link>

      <!-- SEPARATOR -->
      <div v-if="currentPage + 2 < totalPagesMinusTwo">
        <div class="c-pagination__separator">...</div>
      </div>

      <!-- ANTE ANTE LAST PAGE -->
      <nuxt-link
        :to="{ name: 'news-page-page___fr', params: { page: totalPagesMinusTwo } }"
        :class="buttonStyles"
        class="c-pagination__page current"
        v-if="currentPage == totalPagesMinusTwo"
      >
        <span v-if="totalPagesMinusTwo < 10">0</span>
        {{totalPagesMinusTwo}}
      </nuxt-link>
      <nuxt-link
        :to="{ name: 'news-page-page___fr', params: { page: totalPagesMinusTwo } }"
        :class="buttonStyles"
        class="c-pagination__page"
        v-else
      >
        <span v-if="totalPagesMinusTwo < 10">0</span>
        {{totalPagesMinusTwo}}
      </nuxt-link>

      <!-- ANTE LAST PAGE -->
      <nuxt-link
        :to="{ name: 'news-page-page___fr', params: { page: totalPagesMinusOne } }"
        :class="buttonStyles"
        class="c-pagination__page current"
        v-if="currentPage == totalPagesMinusOne"
      >
        <span v-if="totalPagesMinusOne < 10">0</span>
        {{totalPagesMinusOne}}
      </nuxt-link>
      <nuxt-link
        :to="{ name: 'news-page-page___fr', params: { page: totalPagesMinusOne } }"
        :class="buttonStyles"
        class="c-pagination__page"
        v-else
      >
        <span v-if="totalPagesMinusOne < 10">0</span>
        {{totalPagesMinusOne}}
      </nuxt-link>

      <!-- LAST PAGE -->
      <nuxt-link
        :to="{ name: 'news-page-page___fr', params: { page: totalPages } }"
        :class="buttonStyles"
        class="c-pagination__page current"
        v-if="currentPage == totalPages"
      >
        <span v-if="totalPages < 10">0</span>
        {{totalPages}}
      </nuxt-link>
      <nuxt-link
        :to="{ name: 'news-page-page___fr', params: { page: totalPages } }"
        :class="buttonStyles"
        class="c-pagination__page"
        v-else
      >
        <span v-if="totalPages < 10">0</span>
        {{totalPages}}
      </nuxt-link>

      <!-- FORWARD -->
      <div v-if="currentPage == totalPages" class="c-pagination-next disabledStyle">
        <span class="hidden">Next</span>
        <SingleFwd />
      </div>
  
      <nuxt-link
        v-else
        :to="{ name: 'news-page-page___fr', params: { page: nextPage } }"
        :class="buttonStyles"
        class="c-pagination-next"
      >
        <span class="hidden">Next</span>
        <SingleFwd />
      </nuxt-link>

      <!--
      <div v-if="currentPage === totalPages" :class="disabledStyle">
        <span class="hidden">Last</span>
        <DoubleFwd />
      </div>
      -->
  
      <nuxt-link
        v-else
        :to="{ name: 'news-page-page___fr', params: { page: totalPages } }"
        :class="buttonStyles"
      >
        <span class="hidden">Last</span>
        <DoubleFwd />
      </nuxt-link>
    </div>
  </template>
  
  <script>
  import DoubleFwd from '@/components/svg/DoubleFwd';
  import DoubleBack from '@/components/svg/DoubleBack';
  import SingleFwd from '@/components/svg/SingleFwd';
  import SingleBack from '@/components/svg/SingleBack';
  
  export default {
    name: 'Pagination',
    components: {
      DoubleFwd,
      DoubleBack,
      SingleFwd,
      SingleBack,
    },
    props: {
      total: {
        type: Number,
        default: 0,
      },
      perPage: {
        type: Number,
        default: 5,
      },
    },
    computed: {
      buttonStyles() {
        return '';
      },
      disabledStyle() {
        return '';
      },
      totalPages() {
        return Math.ceil(this.total / this.perPage);
      },
      totalPagesMinusOne() {
        return Math.ceil(this.total / this.perPage) - 1;
      },
      totalPagesMinusTwo() {
        return Math.ceil(this.total / this.perPage) - 2;
      },
      currentPage() {
        return parseInt(this.$route.params.page) || 1;
      },
      prevPage() {
        return this.currentPage > 1 ? this.currentPage - 1 : 1;
      },
      nextPage() {
        return this.currentPage < this.totalPages
          ? this.currentPage + 1
          : this.totalPages;
      },
      nextPagePlusOne() {
        return this.currentPage < this.totalPages
          ? this.currentPage + 1
          : this.totalPages;
      },
      nextPagePlusTwo() {
        return this.currentPage < this.totalPages
          ? this.currentPage + 2
          : this.totalPages;
      },
    },
  };
  </script>

  <!-----
  *
  Style scoped
  *
  ------>
  <style lang="scss" scoped>
        .c-pagination {
            display: flex;
            align-items: center;
            justify-content: center;

            .c-pagination-next {
              margin-left: 40px;
            }

            .c-pagination-prev {
              margin-right: 40px;
            }

            .hidden {
                display: none;
            }

            .disabledStyle {
              filter: grayscale(1);
            }

            svg {
              margin-bottom: 3px;
            }

            .c-pagination__page {
              padding: 0 15px;
            }

            .c-pagination__separator {
              color: $orange;
              filter: grayscale(1);
            }

            a {
                height: 20px;
                width: 20px;
                display: flex;
                align-items: center;
                justify-content: center;
                color: $light-grey;

                &.current {
                    color: $orange;
                    font-weight: 700;
                }
            }
        }
  </style>